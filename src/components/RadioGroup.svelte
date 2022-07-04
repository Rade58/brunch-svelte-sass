<script lang="ts">
  
  let radioValue: number | string;


  $: console.log({radioValue})

</script>

<input type="radio"
  name="radio-2"
  class="radio radio-primary"
  value={"pumpkin"}
  bind:group={radioValue}
/>
<input type="radio"
  name="radio-2"
  class="radio radio-primary"
  value={6}
  bind:group={radioValue}
/>
<input type="radio"
  name="radio-2"
  class="radio radio-primary"
  value={"crimson"}
  bind:group={radioValue}
/>
<input type="radio"
  name="radio-2"
  class="radio radio-primary"
  value={76}
  bind:group={radioValue}
/>
