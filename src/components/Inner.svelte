<script lang="ts">

  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()


  const handleClick = () => {
    // WE DEFINE LABLE WHEN DISPATCHING
    dispatch("shiba", {
      // THIS IS TEXT WE ARE SENDING
      data: "Hello World"
    })
  }


</script>

<button on:click={handleClick}>
  Click To Send Event
</button>