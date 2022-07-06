<script>
	import { count } from "$stores/countStore";

	function reset() {
		count.set(0)
	}
</script>

<button on:click={reset}>
	reset
</button>