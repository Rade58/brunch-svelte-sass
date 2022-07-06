<script lang="ts">
  import {onDestroy} from 'svelte'
  import {count} from '$stores/countStore'

  let countVal: number;

  const unsubscribe = count.subscribe((c)  => {
    countVal = c;
  })


  onDestroy(() => {
    if(unsubscribe){
      unsubscribe()
    }
  })

</script>

<div>
  Your count: {countVal}
</div>