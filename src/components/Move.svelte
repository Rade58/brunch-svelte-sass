<script lang="ts">

  let X: number = 0;
  let Y: number = 0;


  const handleMousemove = (event: MouseEvent) => {

    const x = event.clientX;
    const y = event.clientY;

    X = x;
    Y = y;
  }
</script>


<!-- I ADDED HANDLER ON THIS ELEMENT -->
<div
  on:mousemove={handleMousemove}
  class="card w-96 bg-base-100 shadow-xl"
>
  <div
     
    class="card-body"
  >
    <h2 class="card-title">{X} {Y}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
</div>