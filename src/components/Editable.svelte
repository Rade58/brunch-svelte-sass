<script lang="ts">
  let htmlContent: string;

  let encodedText: string;

  
</script>

<div>
  <h1>Html Content:</h1>
  <div>
    
    <pre>{htmlContent}</pre>
  </div>
</div>

<div>
  <h1>Encoded Content:</h1>
  <div>
    
    <pre>{htmlContent}</pre>
  </div>
</div>


<div>
  <h1>Enter html code</h1>
  <div
  class="border border-primary"
    contenteditable="true"
    bind:textContent={htmlContent}
    bind:innerHTML={encodedText}
  ></div>
</div>


