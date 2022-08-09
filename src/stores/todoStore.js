import { writable } from "svelte/store";

export const todos = writable([]);

export const addTodo = (text) => {
	todos.update((currentValue) => {
		const newTodos = [...currentValue, { text, completed: false, id: Date.now() }];

		return newTodos;
	});
};

export const deletetodo = (id) => {
	//implicit return without curly bracket
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
