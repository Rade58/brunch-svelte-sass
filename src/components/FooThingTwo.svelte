<script lang="ts">
  import FooThingOne from '$components/FooThingOne.svelte'
</script>

<!-- HEE WE ARE NOT GOING TO PASS ANYTHING
SINCE WE WANT TO DISPLAY FALLBCK -->
<FooThingOne />

<!-- HERE WE ARE PASSING CHILDREN -->
<FooThingOne>
  <div class="badge badge-success gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    success
  </div>
</FooThingOne>