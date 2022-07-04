<script>
  let yes = false
</script>

<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Remember me</span> 
    <input
      type="checkbox"
      class="checkbox checkbox-primary"
      bind:checked={yes}  
    />
  </label>
</div>

<div>
  {yes? "Checked":"Unchecked"}
</div>