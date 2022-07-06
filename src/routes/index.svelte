<script>
  import Simpsons from '$components/Simpsons.svelte'
  import MultipleSimpsons from '$components/MultipleSimpsons.svelte'
  import Some from '$components/Some.svelte'
  import Deferred from '$components/Deferred.svelte'
  import Move from '$components/Move.svelte'
  import Once from '$components/Once.svelte'
  import Parent from '$components/GrandParent.svelte'
  import Foo from '$components/Foo.svelte'
  import BarBaz from '$components/BarBaz.svelte'
  import RadioGroup from '$components/RadioGroup.svelte'
  import CheckGroup from '$components/CheckGroup.svelte'
  import Area from '$components/Area.svelte'
  import Editable from '$components/Editable.svelte'
  import EBindz from '$components/EBindz.svelte'
  import GetData from '$components/GetData.svelte'
  import Unload from '$components/Unload.svelte'
</script>




<h1>Welcome to SvelteKit</h1>

  <Simpsons />
  <br/>
  <MultipleSimpsons />
  <br />

  <Area />
  <Some />
  <Deferred />
  <Move />
  <Once />
  <Parent />
  <Foo />
  <!--  -->
  <BarBaz />
  <RadioGroup />
  <CheckGroup />
  <br />

  <Editable />

  <br />

  <EBindz />
  <br />
  <GetData />
  <Unload />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
