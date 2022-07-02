<script lang="ts">
  export let color:string;
</script>
<!-- THIS IS HOW DYNAMIC STYLES WORKS IN SVELTE -->
<div
  
  style="background-color: {color}"
  class={`grid w-32 h-20 rounded text-primary-content place-content-center`}
>
  {color}
</div> 