<script lang="ts">
  
  const colors = [
    {id: 2, color: "#ffef96"},
    {id:4, color: "#50394c"},
    {id: 3, color: "#b2b2b2"},
    {id: 1, color: "#f4e1d2"},
  ]

</script>

<h1>Palette</h1>
<div>
  {#each colors as color (color.id)}
    <div style="background-color: {color.color}" class={`grid w-32 h-20 rounded text-primary-content place-content-center`}>{color.color}</div> 
  {/each}
</div>
