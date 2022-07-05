<script lang="ts">
  
  import {marked} from 'marked'


  let markdown = "";



</script>

<textarea
  class="textarea textarea-primary"
  bind:value={markdown}
/>


<div>
  {@html marked(markdown)}
</div>

