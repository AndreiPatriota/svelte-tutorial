<script>
  let a = 1;
  let b = 2;
</script>

<label>
  <input type="number" name="num-a" id="num-a" bind:value={a} min="0" max="10">
  <input type="range" name="range-a" id="range-a" bind:value={a} min="0" max="10">
</label>

<label>
  <input type="number" name="num-b" id="num-b" bind:value={b} min="0" max="10">
  <input type="range" name="range-b" id="range-b" bind:value={b} min="0" max="10">
</label>