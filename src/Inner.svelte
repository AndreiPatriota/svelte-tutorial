<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch('greet', {
            greet: 'Hello, Mom!'
        });
    }
</script>

<button on:click={sayHello}>
    Click to say hello
</button>