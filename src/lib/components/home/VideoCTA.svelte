<script>
  import ctaImage from '$lib/images/resource/featured-image-3.jpg';
	import svgIcons from '$lib/svgIcons';

  // import Fancybox from "@fancyapps/ui/dist/fancybox/fancybox.umd";
  import { Fancybox } from "@fancyapps/ui";
  import "@fancyapps/ui/dist/fancybox/fancybox.css";
	import { onDestroy } from 'svelte';

  let showFancyBox = () => {
    Fancybox.show([
      {
        src: "https://www.youtube.com/watch?v=_mfmrsJtjhA",
        // videoAutoplay: false
      }
    ]);
  }

  // onDestroy(() => {
  //   window.Fancybox.destroy();
  // })
</script>

<section class="live-section" id="about-us">
  <div class="auto-container">
    <div class="sec-title centered">
      <h2>Experience us live <span class="dot">.</span></h2>
    </div>
    <div class="main-image-box">
      <div class="image-layer" style="background-image: url({ctaImage});"></div>
      <div class="inner clearfix">
        <div class="round-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
          <div class="round-inner">
            <div class="vid-link">
              <a href="#/" class="lightbox-image" on:click|preventDefault|stopPropagation|capture={showFancyBox}>
                <div class="icon">{@html svgIcons.playBtn({size: 35}) } <i class="ripple"></i></div>
              </a>
            </div>
            <div class="title">
              <h3>
                a project management <br /> school that understands <br /> your needs
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .title h3{
    font-size: 40px;
  }
</style>
