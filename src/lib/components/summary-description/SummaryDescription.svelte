<script>
  import { fade } from 'svelte/transition'
  import { afterUpdate } from 'svelte'

  export let description
  let overflow, element

  function updateOverflow() {
    overflow = element.clientHeight < element.scrollHeight
  }

  afterUpdate(updateOverflow)
</script>

<p class="description" class:overflow bind:this={element}>
  {@html description}
  {#if overflow}
    <div class="gradient" transition:fade|local />
  {/if}
</p>

<style lang="scss">

  p.description {
    --max-lines: 5;
    position: relative;
    max-height: calc(var(--max-lines) * 1.5em);
    overflow: hidden;
  }

  .gradient {
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3em;
    background: linear-gradient(
      to bottom,
      rgba($neutral-dark-gray, 0),
      rgba($neutral-dark-gray, 1) 100%
    );
  }
</style>
