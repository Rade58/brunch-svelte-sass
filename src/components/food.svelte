<script lang="ts">

  import printFood from '$util/printFood'

  // THESE AR PROPS
  export let color: string;

  export let count: number;



</script>

<div>{printFood()}</div>

<aside>
  <!-- THIS IS IF ELSE STATEMENT -->
  {#if color === "crimson"}
    <h1>Hello World</h1>
  {:else}
    <h1>Hello Mars</h1>
  {/if}
  <!-- THIS IS ONLY IF STATEMENT -->
  {#if count === 6}
    <h2>Hello counter</h2>
  {/if}
</aside>