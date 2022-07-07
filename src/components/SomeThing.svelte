<script lang="ts">

  let toggled = false;

  // WE RE GOING TO USE VARIABLE NAME 
  // SAME AS CLASS NAME
  let mask = false;


</script>




<img 
  class:mask={toggled}
  class:mask-heart={toggled} 
  src="https://placeimg.com/160/160/arch" 
/>


<!-- HERE WE JUST ADDED class:mask  -->
<img
  class:mask
  class:mask-hexagon-2={mask}
  src="https://placeimg.com/160/160/arch" 
  />



<button 
  class="btn btn-primary"
  on:click={() => {
    toggled = !toggled;
    mask = !mask;
  }}
>
  {!toggled? "Make it Heart": "Make It Normal"}
</button>
