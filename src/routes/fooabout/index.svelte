<style lang="scss">
  main {
    & h3 {
      color: crimson;
    }
  }
</style>

<script lang="ts">

  // IMPORTANT THING
	// EVERY VARIABLE OR A FUNCTION DECLARED INSIDE
	// script IS ACCESSIBLE DOWNTHERE INSIDE "HTML" TAMPLATE (I DON'T KNOW HOW IT'S CALLED)

  const name = "Shibainu"

  function randomNum(multiplier: number){
    return Math.round(Math.random() * multiplier)
  }

</script>

<main>
  <!-- WE PASSED name HERE -->
  <h3>Hello my name is {name}</h3>
  <!-- WE CALLED FUNCTION OVERHERE -->
  <h4>{randomNum(100)} greetings</h4>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    <figure><img src="/foo.png" alt="foo" /></figure>
  </div>
</main>
<aside>
  <h2
    class="bg-primary"
  >
    Hello World
  </h2>
  <button class="btn btn-primary">Press</button>
</aside>