import {defineStore} from "pinia";
import {computed} from "vue";

export const useTodosStore = defineStore('todos', () => {

    /** @type {{ task: string, id: number, isFinished: boolean }[]} */
    const todos = $ref([]);
    let nextId = 0;


    const allTodos = computed(() => todos)
    const hasTodos = computed(() => todos.length <= 0)

    const addTodo = (task) => {
        if (task.length <= 0) {
            throw new Error("Task must not be empty")
        }
        todos.unshift({task, id: nextId++, isFinished: false})
    }

    const toggleTodoFinishedById = (todo) => {
        const idx = todos.findIndex(({id}) => id === todo.id)
        todos[idx] = {
            ...todo,
            isFinished: !todo.isFinished
        }
    }


    return {
        allTodos,
        hasTodos,

        addTodo,
        toggleTodoFinishedById,
    }

})