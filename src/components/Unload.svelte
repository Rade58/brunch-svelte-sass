<script lang="ts">

  import {onDestroy} from 'svelte'

  let timerId;

  onDestroy(async () => {
    console.log("something")
  })

</script>


