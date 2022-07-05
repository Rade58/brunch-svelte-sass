<script lang="ts">
  // THESE ARE POSIBLE VALUES OF EVERY CHECKBOX IN A GROUP
  const valuesList = [
    "Hello World",
    "Foo Bar",
    "Baz Baz",
    "Shiba"
  ]
  // THESE ARE GOING TO BE VALUES SELECTED BY USER
  // FROM THE CHECKBOXES IN THE GROUP
  let selectedValuesList: string[] = [];

  $: console.log({selectedValuesList})

</script>


<div class="form-control">
  {#each valuesList as val}
  <label class="label cursor-pointer">
    <span class="label-text">{val}</span> 
    <input
      bind:group={selectedValuesList}
      type="checkbox"
      value={val}
      class="checkbox checkbox-primary" 
    />
  </label>
  {/each}
</div>
