<script>
  import { count } from "./stores";
  import Decrementer from "./Decrementer.svelte";
  import Incrementer from "./Incrementer.svelte";
  import Resetter from "./Resetter.svelte";

  let count_value;

  count.subscribe((value)=>{
    count_value = value;
  })
</script>

<h1>The count value is {count_value}</h1>
<Incrementer/>
<Decrementer/>
<Resetter/>