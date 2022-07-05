<script lang="ts">

  let simpsons = [
    {id: 1, name: "Homer"},
    {id: 2, name: "Marge"},
    {id: 3, name: "Bart"},
    {id: 4, name: "Lisa"},
    {id: 5, name: "Maggie"},
  ];

  let selected:string;

  $: console.log({selected})

</script>


<select
  bind:value={selected}
  class="select w-full max-w-xs"
>
  <option disabled selected>Pick your favorite Simpson</option>
  {#each simpsons as item (item.id)}
    <option value={item}>{item.name}</option>
  {/each}
</select>
