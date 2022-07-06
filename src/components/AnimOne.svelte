<script>

  import {tweened} from 'svelte/motion'
  // WE CAN USE CUBIC BEZIER FUNCTION TOO
  import {elasticOut} from 'svelte/easing'

  // I PASSE INITIAL VALUE
  const progress = tweened(
    0,
    // YOU CAN USE DEFAULTS BUT YOU CAN SET
    // UP BEZIER VLUES OVER HERE
    {
      duration: 600,
      easing: elasticOut
    }
  )

</script>


<progress value={$progress} class="progress progress-secondary w-56" max="1"></progress>

<!-- WE ARE SETTING VALUES HERE -->
<!-- BUT SINCE WE ARE USING tween CHANGE OF VALUE
IS GOING TO BE   -->


<div class="btn-group">
  <input 
  on:click="{() => progress.set(0)}"
   type="radio" name="options" data-title="0%" class="btn" />
  <input 
  on:click="{() => progress.set(0.25)}"
   type="radio" name="options" data-title="25%" class="btn" />
  <input 
  on:click="{() => progress.set(0.5)}"
   type="radio" name="options" data-title="50%" class="btn" />
  <input 
  on:click="{() => progress.set(0.75)}"
   type="radio" name="options" data-title="75%" class="btn" />
  <input 
  on:click="{() => progress.set(1)}"
   type="radio" name="options" data-title="100%" class="btn" />
</div>