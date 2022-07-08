<script>

  // THIS IS SOME VALUE WE WANT TO SEND TO A SLOT
  // NORMALI THAT WOULD BE SOMETHING READ FROM THE DOM
  // MAYBE DIMENSIONS OR MOUSE POSITION
  // BUT I DON'T HAVE TIME FOR THAT SO I MADE ONE VARIABLE
  const foobar = "shiba inu"



</script>


<div>
  <h1>Hello World</h1>
  <!-- AND I'M PASSING THAT VARIABLE TO THE SLOT
  AS barbaz PROP -->
  <slot barbaz={foobar} />
</div>