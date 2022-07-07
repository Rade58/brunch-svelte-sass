<script lang="ts">

  let toggled = false;

</script>


<!-- WE ARE GOING TO ADD FEW CLASSES WITH A BUTTON
JUST PAY ATTENTION HOW WE ARE ADDING CLASSES -->


<img 
  class:mask={toggled}
  class:mask-heart={toggled} 
  src="https://placeimg.com/160/160/arch" 
/>


<button class="btn btn-primary" on:click={() => {toggled = !toggled}}>
  {!toggled? "Make it Heart": "Make It Normal"}
</button>
