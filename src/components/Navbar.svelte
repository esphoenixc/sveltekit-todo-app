<script>
	import { supabase } from "../supabase";

	const logout = () => {
		console.log("lot Out");
		supabase.auth.signOut();
	};
</script>

<div class="my-4 flex justify-end">
	<button
		class=" rounded bg-blue-500 py-2 px-4 text-white shadow-sm hover:bg-blue-600"
		on:click={logout}>Log Out</button
	>
</div>
