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
  // 

  import Plus from '$components/Plus.svelte'
  import Minus from '$components/Minus.svelte'
  import Reset from '$components/Reset.svelte'
  import DisplayCount from '$components/DisplayCount.svelte'

  import CurrTime from '$components/CurrTime.svelte'
  import SomeInp from '$components/SomeInp.svelte'

  import AnimOne from '$components/AnimOne.svelte' 
</script>




<h1>Welcome to SvelteKit</h1>

  <AnimOne />

  <br />

  <SomeInp />
  <br />
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
  <br />

  <Plus />
  <Minus />
  <Reset />
  <DisplayCount />
  <br />
  <CurrTime />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
