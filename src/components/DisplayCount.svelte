<script lang="ts">
  import {onDestroy} from 'svelte'
  import {count} from '$stores/countStore'

  // INSTEAD OF THIS
  // let countVal: number;

  // INSTEAD OF THIS
  // const unsubscribe = count.subscribe((c)  => {
    // countVal = c;
  // })

  // AND INSTEAD OF THIS
  // onDestroy(() => {
    // if(unsubscribe){
      // unsubscribe()
    // }
  // })

</script>

<!-- WE JUST PREFIX STORE WRITABLE WITH $ -->
<div>
  <!-- Your count: {countVal} -->
  Your count: {$count}
</div>