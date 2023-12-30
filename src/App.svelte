<script>
  import { count } from "./stores";
  import Decrementer from "./Decrementer.svelte";
  import Incrementer from "./Incrementer.svelte";
  import Resetter from "./Resetter.svelte";
</script>

<h1>The count value is {$count}</h1>
<Incrementer/>
<Decrementer/>
<Resetter/>