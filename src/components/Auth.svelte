<script>
	import { supabase } from "../supabase";

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			console.log(email);
			const { error } = await supabase.auth.signIn({ email });

			if (error) throw error;
			alert("Check your email for the join link");
		} catch (error) {
			console.error(error);
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-center text-2xl font-bold text-gray-800 md:text-3xl">Join In</h1>
<p class="mt-2 text-center">Join in via magic link with your email below.</p>

<form on:submit|preventDefault={handleLogin}>
	<div class="mb-2 flex flex-col text-sm">
		<label class="mb-2 font-bold text-gray-800" for="email">Email</label>
		<input
			class=" appearance-none rounded-lg border border-gray-200 p-2 shadow-sm  focus:border-gray-500 focus:outline-none"
			type="text"
			placeholder="Your email"
			name="email"
			bind:value={email}
		/>
	</div>
	<button
		class=" w-full rounded bg-blue-500 py-2 px-4 text-white shadow-sm hover:bg-blue-600"
		type="submit">Join in</button
	>
</form>
