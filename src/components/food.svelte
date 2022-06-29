<script lang="ts">

  import printFood from '$util/printFood'

  // THESE AR PROPS
  export let color: string;

  export let count: number;



</script>

<div>{printFood()}</div>

<aside>
  <h1>{color}</h1>
  <h1>{count}</h1>
</aside>