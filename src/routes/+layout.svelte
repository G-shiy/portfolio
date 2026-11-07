<script lang="ts">
  import '$lib/styles/fonts.css';
  import '$lib/styles/tokens.css';
  import '$lib/styles/global.css';
  import '$lib/styles/motion.css';
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>
{@render children()}
