<script lang="ts">
  import {fade, slide} from 'svelte/transition'
  import {bounceOut} from 'svelte/easing'

  let visible = true;

</script>


<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">Toggle it</span>
    <input type="checkbox" bind:checked={visible} class="checkbox checkbox-accent" />
  </label>
</div>


<!-- YOU CAN SET UP PARAMETRS OR YOU CAN USE DEFAULTS -->

{#if visible}

<h1 transition:slide>Hello from The Summer Foo Bar</h1>
<br />
<h1 transition:fade={{delay: 200, duration: 1000,easing: bounceOut}}>Hello From The Podcast Foo Bar</h1>

{/if}