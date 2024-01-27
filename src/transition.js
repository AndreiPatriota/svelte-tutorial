import { tick } from 'svelte';

export function typewriter(node, { speed = 1 }) {
  const isValid =
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!isValid) {
    throw new Error(
      `This transition only works on elements with a single  text node child`
    );
  }

  const text = node.textContent;
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t) => {
      const i = Math.trunc(text.length * t);
      node.textContent.slice(0, i);
    },
  };
}
