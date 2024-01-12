<script>
    import { name, greeting } from "./store";
</script>

<h1>{$greeting}</h1>
<input type="text" bind:value={$name}>

<button on:click={()=> $name += '!'}>Add exclamation mark!</button>

