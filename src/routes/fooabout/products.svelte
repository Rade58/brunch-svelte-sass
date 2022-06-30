<script lang="ts">

  let count = 0;

  function handleClick(){
    count++;
  } 

</script>

<div>{count}</div>
<button
  class="btn btn-circle btn-secondary"
  on:click={handleClick}
>
  Increment
</button>
<section>
  <!-- JUST TO BE CLEAR
    YOU CAN'T USE TERNARY FOR CONDITIONAL RENDERING OF COMPONENTS
  BUT YOU CAN DO CONDITIONAL RENDERING OF VALUES WITH TERNARY -->
  {count > 5 ? "FOO" : "BAR"}
</section>

