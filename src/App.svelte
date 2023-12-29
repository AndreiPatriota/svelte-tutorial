<script>
  import Outter from "./Outter.svelte";

  function handleGreet(event) {
    alert(event.detail.message);
  }
</script>

<Outter on:greeting={handleGreet}/>

