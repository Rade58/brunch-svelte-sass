<script lang="ts">

  const makeFakeRequest = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const num = Math.round(Math.random() * 100)
        if(num>50){
          res("Hello World")
        }else{
          rej()
        }
      }, 1000)
    })
  }

</script>

<section>
  {#await makeFakeRequest()}
    <progress class="progress w-56"></progress>
  {:then val}
    <div>{val}</div>
  {:catch error}
  <div class="alert alert-error shadow-lg">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Error! Task failed successfully.</span>
    </div>
  </div>
  {/await}
</section>