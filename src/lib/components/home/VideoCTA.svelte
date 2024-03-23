<script>
  import ctaImage from '$lib/images/resource/featured-image-3.jpg';
	import svgIcons from '$lib/svgIcons';
</script>

<section class="live-section">
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
              <a href="https://www.youtube.com/watch?v=_mfmrsJtjhA" class="lightbox-image">
                <div class="icon">{@html svgIcons.playBtn({size: 35}) } <i class="ripple"></i></div>
              </a>
            </div>
            <div class="title">
              <h3>
                an agency that <br />
                gets your needs
              </h3>
            </div>
            <div class="more-link"><a href="#about-us">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
