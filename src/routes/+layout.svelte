<script>
  import { onMount } from 'svelte'
  import { navigating } from '$app/stores'

  import '$vendor/css/main.scss';

  $: console.log(! $navigating)

  let isMounted = false;

  onMount(async () => {
    // Import dynamically because vendor files have side effects that are referencing the window object thus messing up with SSR
    await import('$vendor/js/app.js');

    isMounted = true;
  })
</script>

<svelte:head>
  {#if ! $navigating && isMounted}
    <script src="/js/app-init.js"></script>
  {/if}
</svelte:head>

<!-- Preloader -->
<div class="preloader">
  <div class="icon"></div>
</div>

<slot />

<a href="/">Home</a>
<a href="/hello">Hello</a>
