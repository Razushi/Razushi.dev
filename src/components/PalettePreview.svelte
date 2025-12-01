<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let swatches: { name: string; hex: string }[] = [];
  const dispatch = createEventDispatcher<{ select: string }>();
  export let persistAccent = false;
  let selected = swatches[0]?.hex ?? null;

  const choose = (hex: string) => {
    selected = hex;
    dispatch('select', hex);
    if (persistAccent && typeof document !== 'undefined') {
      try {
        localStorage.setItem('epithet-accent', hex);
        // Update accent immediately
        const root = document.documentElement;
        root.style.setProperty('--accent-highlight', hex);
        root.style.setProperty('--accent-teal', hex);
        root.style.setProperty('--accent-copper', hex);
        window.dispatchEvent(new CustomEvent('vestige-accent-updated', { detail: { accent: hex } }));
      } catch (_err) {
        /* ignore storage errors */
      }
    }
  };
</script>

<div class="palette">
  {#each swatches as swatch}
    <button
      type="button"
      class:selected={selected === swatch.hex}
      style={`--swatch:${swatch.hex}`}
      on:click={() => choose(swatch.hex)}
      aria-pressed={selected === swatch.hex}
    >
      <span>{swatch.name}</span>
      <small>{swatch.hex}</small>
    </button>
  {/each}
</div>
{#if selected}
  <p class="readout">Selected: {selected}</p>
{/if}

<style>
  .palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;
  }

  button {
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    padding: 0.9rem;
    background: var(--swatch);
    color: #0b0b0b;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    cursor: pointer;
    transition: transform var(--transition), filter var(--transition), border-color var(--transition), box-shadow var(--transition);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  button:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.8);
  }

  button.selected {
    border-color: var(--accent-highlight);
    filter: brightness(1.04);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  small {
    font-weight: 500;
    opacity: 0.75;
  }

  .readout {
    margin-top: 0.7rem;
    font-size: 0.95rem;
    color: var(--muted);
  }
</style>
