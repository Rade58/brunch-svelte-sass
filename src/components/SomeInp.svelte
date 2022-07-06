<script lang="ts">

  import {name, greeting} from '$stores/greetingStore'

</script>


<input type="text" bind:value={$name} 
class="input input-bordered input-secondary w-full max-w-xs"
/>

{#if $name && $name !== ""}
  <h1>{$greeting}</h1>
{/if}



