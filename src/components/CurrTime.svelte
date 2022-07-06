<script lang="ts">
  import {time, elapsed} from '$stores/timeStore'


  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  })

</script>

<h1>Current Time is: {formatter.format($time)}</h1>

<h1>Elapsed: {$elapsed}</h1>



