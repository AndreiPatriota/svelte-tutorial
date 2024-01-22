<script>
    import { fly, fade } from "svelte/transition";

    let isVisible = true;

</script>

<label>
    <input type="checkbox" bind:checked={isVisible}>
    visible
</label>

{#if isVisible}
    <p in:fly={{ y: 200,  duration: 2000}} out:fade>
        Fades in and out.
    </p>
{/if}