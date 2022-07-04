<script lang="ts">
  let inputData = ""
</script>

<input type="text" on:input={(e) => {inputData = e.currentTarget.value}}  />
<div>{inputData}</div>