import axios from "axios";

const PER_PAGE = 10;
export async function fetchTodos(page) {
  const _start = (page - 1) * PER_PAGE;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_start=${_start}&_limit=${PER_PAGE}`
  );

  // const apiTodos = await response.json();/
  return data;
}

// export async function createNewTodo(newTodo) {
//   const { data } = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);

//   return data;
// }

export async function deleteTodo(id) {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {});
  return true;
}
