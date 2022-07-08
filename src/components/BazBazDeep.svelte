<script lang="ts">
  import {getContext} from "svelte" 

  const userDetails = getContext("user-details")

</script>


<div>
  {JSON.stringify({userDetails})}
</div>