<script>
  import {page} from '$app/stores'



</script>
<!-- TO TEST IT GO ON /foo_user/1234 -->

<div class="bg-secondary text-secondary-content">
  Hello user your id is: {$page.params["userID"]}
</div>