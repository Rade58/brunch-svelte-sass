<script lang="ts">
  let textInput = ""

  // THIS WILL HOLD VALUE OF NUMERIC INPUT
  let numericValue: number;

  // THIS WILL HOLD VALUE OF RANGE INPUT
  let rangeValue: number;

  $: console.log(typeof numericValue, typeof rangeValue)

</script>

<input 
  bind:value={textInput}
/>

<!-- NUMERIC INPUT -->
<input
  type="number"
  placeholder="enter number"
  class="input input-bordered w-full max-w-xs"
  min={0}
  max={6}
  bind:value={numericValue}
/>

<br />


<!-- RANGE INPUT -->
<input type="range"
  min="0" max="100"
  bind:value={rangeValue} 
  class="range range-primary" 
/>

<br />

<!-- BECAUSE YOU HAVE NUMBERS YOU CAN DO 
  SOMETHING LIKE THIS -->

<div>
  {#if numericValue !== undefined && rangeValue !== undefined }
    <h1>Result</h1>
    <h2>{numericValue} + {rangeValue} = {numericValue + rangeValue}</h2>
  {/if}
</div>