<script lang="ts">
  // LETS SAY THAT THIS COMPONENT ALSO LISTNS FOR SHIBA EVENT

  const handleShibaPayload = (e: any) => {
    console.log(e.payload.data)
    console.log("FROM RANDOM CHILD")
  }

</script>
