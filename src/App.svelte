<script>
  import Inner from "./Inner.svelte";

  function handleMessage(event) {
    alert(`A mensagem misteriosa é: ${event.detail.greet}`)
  }
</script>

<Inner on:greet={handleMessage}/>