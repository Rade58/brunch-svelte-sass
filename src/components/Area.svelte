<script lang="ts">
  
  import {marked} from 'marked'


  let value = "";



</script>

<textarea
  class="textarea textarea-primary"
  bind:value
/>


<div>
  {@html marked(value)}
</div>

