<script lang="ts">

  // SEE HERE WE HAVE A VARIABLE
  let youCanRock: boolean = true;

  // YOU HAVE A FUNCTION THAT IS DOING REASSIGNMENT
  function toggleRocking() {

    // THIS IS GOING TO DO RESIGNMENT OF THIS VARIABLE
    // AND DEPENDING OF THAT WE WILL SEE DIFFERENT VALUE RENDERING
    // WHEN WE PASS THIS VALUE TO HTML
    youCanRock = !youCanRock
  }

  // THIS IS ONLY GOING TO BE AFFECTED BY INITIAL VALUE OF  youCanRock
  let youCanSwim: boolean;
  youCanSwim = youCanRock;

  // REACTIVE DECLARATION IS GOING TO BE AFFECTED BY 
  // EVERY VALUE CHANGE OF THE   youCanRock      VARIABLE
  $: youCanDab = youCanRock

</script>

<section>
  Rock: {youCanRock}
</section>
<section>
 Swim: {youCanSwim}
</section>
<section>
 Dab {youCanDab}
</section>
<button
  on:click={toggleRocking}
  class="btn btn-primary"
>
  toggle
</button>


