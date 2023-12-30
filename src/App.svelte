<script>
  import { count } from "./stores";
  import Decrementer from "./Decrementer.svelte";
  import Incrementer from "./Incrementer.svelte";
  import Resetter from "./Resetter.svelte";
  import { onDestroy } from "svelte";

  let count_value;

  const unsubscribe = count.subscribe((value)=>{
    count_value = value;
  })

  onDestroy(unsubscribe);
</script>

<h1>The count value is {count_value}</h1>
<Incrementer/>
<Decrementer/>
<Resetter/>