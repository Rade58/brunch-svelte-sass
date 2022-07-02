<script lang="ts">
  
  let colors = [
    {id: 1, color: "#ffef96"},
    {id:2, color: "#50394c"},
    {id: 3, color: "#b2b2b2"},
    {id: 4, color: "#f4e1d2"},
  ]

  const handleRemove = () => {
    colors = colors.slice(1)
  }


</script>

<h1>Palette</h1>
<div>
  {#each colors as color, i (color.id)}
    <!-- I ALSO SHOWDED YOU HERE HOW YOU WOULD PASS DYNAMIC STYLES -->
    <div style="background-color: {color.color}" class={`grid w-32 h-20 rounded text-primary-content place-content-center`}>{color.color}</div> 
  {/each}
</div>
<button
  on:click={handleRemove}
  class="btn btn-secondary"
>
  Remove firt item
</button>

<!-- CONCLUSION: IF YOU DON'T USE (color.id) 
LAST ITEM WOULD BE REMOVED -->
<!-- I GUESS THAT WORKS SAME AS key IN REACT -->
<!-- IF WE WOULDN'T USE THAT RENDERING WOULD BE BROKEN -->
<!-- THIS SEEMS VERY STRANGE -->

<!-- BUT THIS DIDN'T WORK FOR ME AS EXPECTED
NO MATTER I PASSED  (color.id)
FIRST ITEM WAS REMOVING-->
