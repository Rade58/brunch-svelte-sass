<script lang="ts">
  let inputData = ""
  $: console.log({inputData})

</script>

<input 
  bind:value={inputData}
/>
