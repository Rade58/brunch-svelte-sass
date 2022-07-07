<script lang="ts">

  // HERE YOU GO
  // YOU WILL GET BOOLEANS
  console.log($$slots) //   {child-one: true, child-two: true}

  // YOU CAN RENDER THINGS BASED ON IF CERTAIN IS SLOT PASSED OR NOT

</script>



<section>
  <h1>Hello World</h1>
  <div>
    <slot name="child-one" />
  </div>
  <h2>Hello Mars</h2>
  <div>
    <slot name="child-two" />
  </div>
</section>