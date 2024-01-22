<script>
  import { elasticOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let visible = false;

    // Defines a custom animation
	function spin(node, { duration }) {
		return {
            delay: 1000,
			duration,
			css: (t) => {
                const eased = elasticOut(t);

                return `
                    transform: scale(${eased}) rotate(${eased*1080}deg);
                    color: hsl(
                        ${Math.trunc(t*360)},
                        ${Math.min(100, 1000*(1-t))}%,
                        ${Math.min(50, 500*(1-t))}%
                    );`
            }
		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<div
		class="centered"
		in:spin={{ duration: 8000 }}
		out:fade
	>
		<span>transitions!</span>
	</div>
{/if}

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>
