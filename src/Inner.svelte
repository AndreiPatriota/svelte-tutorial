<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayHello(){
        dispatch('greeting', {
            message: 'Olaarrrrrr, BAE!'
        })
    }
</script>

<button on:click={sayHello}>
    Click on me to hear my message!
</button>

