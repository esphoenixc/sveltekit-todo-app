<script>
	import { deletetodo, toggleTodoCompleted } from "../stores/todoStore";

	export let todo;
</script>

<li class="sm my-2 flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 shadow">
	<input
		class="form-checkbox mr-2 h-5 w-5"
		type="checkbox"
		name="completed"
		checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id)}
	/>

	<span class={`flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`}>
		{todo.text}
	</span>
	<button
		type="button"
		class="focus:shadow-outline rounded bg-red-500 py-1 px-2 text-sm text-white hover:bg-red-600 focus:outline-none"
		on:click={() => deletetodo(todo.id)}>deleteTodo</button
	>
</li>
