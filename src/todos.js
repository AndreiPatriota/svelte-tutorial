import { writable } from 'svelte/store';

/* 
  essa função cria um writable store a partir de uma
  lista de objetos de entrada, e rotorna um objeto que 
  permite controlar esse store, criando, removendo ou marcando objetos salvos.
*/
export function createTodoStore(initial) {
  let uid = 1;

  const todos = initial.map(({ done, description }) => {
    return {
      id: uid++,
      done,
      description,
    };
  });

  const { subscribe, update } = writable(todos);

  return {
    subscribe,
    add: (description) => {
      const todo = {
        id: uid++,
        done: false,
        description,
      };

      update(($todos) => [...$todos, todo]);
    },
    remove: (todo) => {
      update(($todos) => $todos.filter((todoEle) => todoEle !== todo));
    },
    mark: (todo, done) => {
      update(($todos) => [
        ...$todos.filter((todoEle) => todoEle !== todo),
        { ...todo, done },
      ]);
    },
  };
}
