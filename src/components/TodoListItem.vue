<script setup>
import {useTodosStore} from "../stores/todos";

const todosStore = useTodosStore()

const {todo}   = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const toggleTodoIsFinished = () => {
  todosStore.toggleTodoFinishedById(todo)
}

</script>

<template>
  <div
      class="d-flex justify-content-between border-0  shadow-sm p-3 rounded-3 mb-3 text-secondary"
      :class="todo.isFinished ? `bg-success text-white` : ''"
  >
    <div
        :class="todo.isFinished ? 'text-decoration-line-through' : ''"
    >
      {{ todo.task }}
    </div>
    <input type="checkbox" class="form-check-input" @change="toggleTodoIsFinished">
  </div>
</template>