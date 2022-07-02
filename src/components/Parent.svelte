<script lang="ts">
  // THIS IS OUR CHILD COMPONENT
  import Inner from '$components/Inner.svelte'

  function handlePayload(ev: any){

    // WE SETTED UP THAT WE ARE SENDING OUR DATA
    // INSIDE data PROPERTY
    alert(ev.detail.data)

  }

</script>

<div>
  <h1>Parent component</h1>
  <div>
    
    <!-- IN INNER COMPONENT WE NAMED EVENT AS "shiba"
    SO WE ANTICIPATE "shiba" EVENT -->
    <Inner on:shiba={handlePayload} />
  </div>
</div>