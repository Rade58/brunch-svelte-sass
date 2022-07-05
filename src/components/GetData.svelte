<script lang="ts">

  import {onMount} from 'svelte'

  let data: any;

  onMount(async () => {
    const res = await fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=30")
  
    data = await res.json()
  
  })

</script>


{#if data}
 <pre>
  {JSON.stringify({data}, null, 2)}
 </pre>   
{/if}

