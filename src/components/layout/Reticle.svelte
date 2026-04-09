<script lang="ts">
  import { crosshair2Dot } from '@lucide/lab';

  const iconNode = crosshair2Dot as [string, Record<string, string>][];
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
</svg>
