<script lang="ts">
  import {page} from '$app/stores';

  const ala: number = 4;

  console.log({ala})

</script>

<main>
  <h1>
    hello world
  </h1>
  <p>
    this is user: {$page.params["userID"]}
  </p>
  <p>
    this is data: {$page.params["dataId"]}
  </p>
</main>

