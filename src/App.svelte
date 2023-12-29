<script>
  import { marked } from 'marked';
  let text = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;

</script>

<div class="grid">
  input 
  <textarea bind:value={text}></textarea>

  output
  <div>{@html marked(text)}</div>
</div>