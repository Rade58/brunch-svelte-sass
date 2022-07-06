<script lang="ts">
  import {count} from '$stores/countStore'

  let countVal: number;

  count.subscribe((c)  => {
    countVal = c;
  })

</script>

<div>
  Your count: {countVal}
</div>