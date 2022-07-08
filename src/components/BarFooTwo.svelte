<script lang="ts">
  import BarFooOne from './BarFooOne.svelte'

  // WE WILL DEDICATE THIS VARIABLE TO BE USED
  // TO BIND PROP VLUE FROM THE SLOT OF 
  // ABOVES COMPONENT
  let shiba: string;

</script>


<!-- WE DO THIS WITH let -->
<BarFooOne let:barbaz={shiba}>

  <!-- NOW WE CAN USE PROP OF THE SLOT
  IN HERE -->
  <div>Hello from a child {shiba}</div>

</BarFooOne>

<!-- BUT YOU CAN'T USE IT HERE -->
<!-- HERE IT WILL BE undefined -->
<div>
  i'm {shiba}, howaboutyou
</div>