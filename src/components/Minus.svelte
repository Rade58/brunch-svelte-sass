<script>
	import { count } from "$stores/countStore";

	function decr() {
		count.update((old) => {
      if(old !== 0){
        return old - 1

      }

      return old
    })
	}
</script>

<button on:click={decr}>
	minus
</button>