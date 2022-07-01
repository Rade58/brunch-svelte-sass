<script lang="ts">

  let count = 0;

  // AS count CHANGES, THIS
  // IS NOT GOING TO BE CHANGED
  // ONLY WILL HAVE VALUE WITH WHOOM IT IS INITIALIZED
  // AND THAT IS      0  TIMES   2
  let doubleFirst = count * 2;

  // BUT THIS ONE THAT I LABLED WITH $  WILL BE CHANGED
  // AS count CHANGES

  $: doubleSecond = count * 2; 

</script>


<button
  class="btn btn-primary"
  on:click={() => {count++}}
>
  Increment
</button>

<div>
  doubleFirst: <strong>{doubleFirst}</strong>
</div>
<div>
  doubleSecond: <strong>{doubleSecond}</strong>
</div>
