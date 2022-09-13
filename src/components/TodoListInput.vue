<script setup>
import {useTodosStore} from "../stores/todos";

const task = $ref('')
const error = $ref(undefined)

const todosStore = useTodosStore()

const saveTodo = () => {
  try {
    todosStore.addTodo(task)
    error = undefined;
    task = ''
  } catch ({message}) {
    error = message;
  }
}
</script>

<template>
  <form
      @submit.prevent="saveTodo"
  >
    <div class="mb-3">
      <div class="d-flex justify-content-between gap-3">
        <input
            type="text"
            class="form-control"
            :class="error ? 'is-invalid' : ''"
            placeholder="Enter task"
            v-model="task"
        >
        <button
            class="btn btn-success"
            type="submit"
        >
          Add
        </button>
      </div>
      <small :class="error ? 'text-danger' : 'd-none'">{{ error }}</small>
    </div>
  </form>
</template>
