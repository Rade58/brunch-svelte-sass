<script lang="ts">
  import {page} from '$app/stores';

  const ala: number = 4;

  console.log({ala})

</script>
<!-- TO TEST IT OUT GO ON /foo/123456/4321 -->

<main>
  <h1>
    hello world
  </h1>
  <p>
    this is user: {$page.params["fooId"]}
  </p>
  <p>
    this is data: {$page.params["barId"]}
  </p>
</main>

