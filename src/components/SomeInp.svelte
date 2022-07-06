<script lang="ts">

  import {name, greeting} from '$stores/greetingStore'

</script>


<input type="text" bind:value={$name} 
class="input input-bordered input-secondary w-full max-w-xs"
/>

<!-- SEE WHAT I DID -->
<button on:click={() => $name += "🦉"}
  class="btn btn-primary"  
>
  Add an 🦉!
</button>


{#if $name && $name !== ""}
  <h1>{$greeting}</h1>
{/if}



