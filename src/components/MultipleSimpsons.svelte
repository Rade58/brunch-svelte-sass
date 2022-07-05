<script lang="ts">

  let simpsons = [
    {id: 1, name: "Homer"},
    {id: 2, name: "Marge"},
    {id: 3, name: "Bart"},
    {id: 4, name: "Lisa"},
    {id: 5, name: "Maggie"},
  ];

  let selected:string [] = [];

  $: console.log({selected})

  // LETS ALSO CHANGE THIS VALUE
  // WHEN SELECT ELEMENTS CHANGES
  // I,M JUST DOING THIS T OSHOW YOU IT S POSSIBLE
  // IT CAN BE USEFUL TOO
  let someValue: string;
  // 
  $: console.log({someValue})

</script>


<select
  multiple
  bind:value={selected}
  class="select w-full max-w-xs"
  on:change="() => {someValue === "shiba"? (someValue = "inu"): (someValue = "shiba")}"
>
  <option disabled selected>Pick your favorite Simpsons</option>
  {#each simpsons as item (item.id)}
    <option value={item}>{item.name}</option>
  {/each}
</select>
