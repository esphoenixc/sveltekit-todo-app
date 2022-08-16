<script>
	import { addTodo } from "../stores/todoStore";
	import { user } from "../stores/authStore";

	let todo = "";
	const handleSubmit = () => {
		addTodo(todo, $user.id);
		todo = "";
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="mb-2 flex flex-col text-sm">
		<label class="mb-2 font-bold text-gray-800 " for="todo">Todo</label>
		<input
			class=" appearance-none rounded-lg border border-gray-200 p-2 shadow-sm focus:border-gray-500 focus:outline-none"
			type="text"
			name="todo"
			placeholder="Watcha gotta do?"
			bind:value={todo}
		/>
	</div>

	<button class=" w-full  rounded bg-blue-500 py-2 px-4 text-white shadow-sm" type="submit"
		>Submit</button
	>
</form>
