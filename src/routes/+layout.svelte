<script>
  import { onMount } from 'svelte'
  import { navigating } from '$app/stores'
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  import '$vendor/css/main.scss';

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

<Header />

<slot />

<Footer />
