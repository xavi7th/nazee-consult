<script>
  import { onMount } from 'svelte'
  import { navigating } from '$app/stores'
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  import '$vendor/css/main.scss';

  let isMounted = false;

  onMount(async () => {
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
