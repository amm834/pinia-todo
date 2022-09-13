<script setup>
import TodoListItem from "./TodoListItem.vue";
import TodoListInput from "./TodoListInput.vue";
import {useTodosStore} from "../stores/todos";

const todosStore = useTodosStore()
const todos = todosStore.allTodos;
</script>

<template>
  <main class="container my-5 w-50">
    <TodoListInput/>
    <TodoListItem
        v-for="todo in todos" :key="todo.id"
        :todo="todo"
        v-if="!todosStore.hasTodos"
    />
    <div class="text-center text-secondary" v-else>
      There is no tasks.
    </div>

  </main>
</template>
