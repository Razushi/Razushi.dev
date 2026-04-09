<script lang="ts">
  import { onMount } from 'svelte';

  const interactiveSelector =
    'a, button, [role="button"], input, textarea, select, summary, [contenteditable="true"]';

  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let frame = 0;
  let hasPointerPosition = false;
  let isInteractive = false;

  onMount(() => {
    const updateInteractiveState = (target: EventTarget | null) => {
      const nextIsInteractive = target instanceof Element && target.closest(interactiveSelector) !== null;
      isInteractive = nextIsInteractive;
      document.body.classList.toggle('custom-cursor--native', nextIsInteractive);
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      hasPointerPosition = true;
      updateInteractiveState(event.target);

      if (frame !== 0) {
        return;
      }

      frame = requestAnimationFrame(() => {
        x = targetX;
        y = targetY;
        frame = 0;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }

      document.body.classList.remove('custom-cursor--native');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<div
  aria-hidden="true"
  class="custom-cursor"
  class:is-active={hasPointerPosition}
  class:is-interactive={isInteractive}
  style:transform={`translate(${x}px, ${y}px) translate(-50%, -50%)`}
></div>

<style>
  @media (pointer: coarse) {
    .custom-cursor {
      display: none;
    }

    :global(*),
    :global(body.custom-cursor--native),
    :global(body.custom-cursor--native *) {
      cursor: auto !important;
    }
  }

  :global(*) {
    cursor: none !important;
  }

  :global(body.custom-cursor--native),
  :global(body.custom-cursor--native *) {
    cursor: pointer !important;
  }

  .custom-cursor {
    position: fixed;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-accent);
    border-radius: 50%;
    background: var(--border-accent);
    color: var(--border-accent);
    pointer-events: none;
    opacity: 0;
    z-index: 9999;
    will-change: transform;
  }

  .custom-cursor.is-active {
    opacity: 1;
  }

  .custom-cursor.is-interactive {
    opacity: 0;
  }
 </style>
