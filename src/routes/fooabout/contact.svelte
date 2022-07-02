<script lang="ts">

  import AccentButton from '$components/AccentButton.svelte'


  let count = 0;

  let doubleFirst = count * 2;

  $: doubleSecond = count * 2;
  
  // LIKE THIS
  $: console.log({doubleSecond})

  $: if(doubleSecond > 6) console.log("above six")

  // IF YOU WANT TO DEFINE MORE THINGS YOU CAN
  // WRAP ENTIRETY INSIDE BRACETS
  $: {
    // const val = prompt("Enter value")
    // alert(val);
  }

</script>


<AccentButton>Hello Accent</AccentButton>

<button
  class="btn btn-primary"
  on:click={() => {count++}}
>
  Increment
</button>

<div>
  doubleFirst: <strong>{doubleFirst}</strong>
</div>
<div>
  doubleSecond: <strong>{doubleSecond}</strong>
</div>
