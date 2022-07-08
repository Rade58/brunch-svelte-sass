<script lang="ts">
  import {setContext} from 'svelte'

  import BazBazDeep from './BazBazDeep.svelte'

  const userDetails = {username: "Sven Svenson", email: "sven@sv.com"}

  setContext("user-details", userDetails)


</script>


<BazBazDeep />


