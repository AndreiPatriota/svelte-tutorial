<script>
  import { fly } from "svelte/transition";

  let visible = true;
  let status = 'waiting...';

  function endIntro() {
    status = 'intro has ended';

    setTimeout(() => {
      status = 'waiting...';
    }, 2000)
  }

  function endOutro() {
    status = 'outro has ended';

    setTimeout(() => {
      status = 'waiting...'
    }, 2000)
  }
</script>

<p>Status: {status}</p>

<label>
  <input type="checkbox" bind:checked={visible}>
  Visible
</label>

{#if visible}
  <p transition:fly={{y:200, duration: 2000}}
   on:introstart={()=>{status = 'intro has started'}}
   on:outrostart={()=>{status = 'outro has started'}}
   on:introend={endIntro}
   on:outroend={endOutro}
   >
    Flies in and out.
  </p>
{/if}