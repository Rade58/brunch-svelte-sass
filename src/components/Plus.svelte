<script>
	import { count } from "$stores/countStore";

	function incr() {
		count.update((old) => {
      return old +1
    })
	}
</script>

<button on:click={incr}>
	plus
</button>