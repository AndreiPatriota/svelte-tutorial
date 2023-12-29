<script>
  let questions = [
    {id: 1, text: 'Where did you go to school?'},
    {id: 2, text: `What's your mother's name?`},
    {id: 3, text: `Where are you from?`},
  ];

  let selected;

  let answer = ''

  function clearAnswer() {
    answer = '';
  }
  function handleSubmit() {
    alert(`Answred the quastion number ${selected.id} (${selected.text}) with ${answer}`);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change={clearAnswer}>
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <input type="text" bind:value={answer}>

  <button type="submit" disabled={!answer}>Submit</button>
</form>
