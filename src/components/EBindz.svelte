<script>
  
  let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

  $: console.log({todos})


</script>

{#each todos as todo}
  <div>

    <input type="checkbox" bind:checked={todo.done}>

    <input
      placeholder="What needs to be done"
      bind:value={todo.text}
    />
  </div>

{/each}


<!-- IT IS GOOD TO REMEMBER THAT todos ARRAY WILL BE MUTATED 
IF YOU PERFER TO USE IMMUTABLE DATA, YOU SHOULD AVOID THIS-->