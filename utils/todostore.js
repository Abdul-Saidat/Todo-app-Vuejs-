
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  function addTodo(todo) {
    todos.value.unshift(todo)
  }

  return { todos, addTodo }
})
