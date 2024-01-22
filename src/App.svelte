<script>
    import { fade } from "svelte/transition";

    let isVisible = true;

</script>

<label>
    <input type="checkbox" bind:checked={isVisible}>
    visible
</label>

{#if isVisible}
    <p transition:fade>
        Fades in and out.
    </p>
{/if}