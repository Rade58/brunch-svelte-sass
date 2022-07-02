<script lang="ts">
  
  // this Daughter doesn't handle event (not anticipating  it)
  import Daughter from '$components/Daughter.svelte'

  function handlePayload(ev: any){
    alert(ev.detail.data)
  }

</script>

<div>
  <h1>Parent component</h1>
  <div>
    <!-- THIS IS Daughter THAT STANDS "IN BETWEEN GRANDFATER" ("SUBSCRIBER")
    AND HIS GRAND-DAUGHTER (WHO IS TRIGGERING THE COMPONENT EVENT)
      -->
    <Daughter on:shiba={handlePayload} />
  </div>
</div>