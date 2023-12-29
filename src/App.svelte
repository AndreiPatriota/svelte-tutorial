<script>
  let yes = false;
</script>

<label>
  <input type="checkbox" bind:checked={yes}>
  Yes! Send me regular email spam!
</label>

{#if yes}
  <p>You are screwed! We gonno overload your inbox with so much garbage</p>
{:else}
  <p>Fuck you. We didn't want to email you anyway.</p>
{/if}

<button disabled={!yes}>Subscribe!</button>