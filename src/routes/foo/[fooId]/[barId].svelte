<script lang="ts">
  import {page} from '$app/stores';

  const la: number = 4;

  console.log({la})

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

