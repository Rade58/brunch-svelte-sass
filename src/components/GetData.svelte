<script lang="ts">

  import {onMount} from 'svelte'

  let data: any;

  onMount(async () => {


    await new Promise((res) => {
      setTimeout(res, 2000)
    })

    const res = await fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=30")
  
    data = await res.json()

    console.log({data})
  
  })

</script>


{#if data}
 <pre>
  {JSON.stringify({data}, null, 2)}
 </pre>
 {:else}
 <div>loading...</div>   
{/if}