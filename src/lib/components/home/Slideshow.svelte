<script>
	import { PUBLIC_APP_INSTAGRAM, PUBLIC_APP_LINKEDIN, PUBLIC_APP_NAME, PUBLIC_APP_TWITTER } from '$env/static/public';
  import SlideImage1 from '$lib/images/main-slider/1.jpg';
  import SlideImage2 from '$lib/images/main-slider/2.jpg';
</script>

<section class="banner-section banner-one">
  <div class="left-based-text">
    <div class="base-inner">
      <div class="hours">
        <ul class="clearfix">
          <li><span>mon - fri</span></li>
          <li><span>9am - 6pm</span></li>
        </ul>
      </div>
      <div class="social-links">
        <ul class="clearfix">
          <li>
            <a href="{PUBLIC_APP_LINKEDIN}"><span>LinkedIn</span></a>
          </li>
          <li>
            <a href="{PUBLIC_APP_TWITTER}"><span>Twitter</span></a>
          </li>
          <li>
            <a href="{PUBLIC_APP_INSTAGRAM}"><span>Instagram</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="banner-carousel owl-theme owl-carousel">
    <div class="slide-item">
      <div class="image-layer" style="background-image: url({SlideImage1});"></div>
      <div class="left-top-line"></div>
      <div class="right-bottom-curve"></div>
      <div class="right-top-curve"></div>
      <div class="auto-container">
        <div class="content-box">
          <div class="content">
            <div class="inner">
              <div class="sub-title">welcome to { PUBLIC_APP_NAME }</div>
              <h1>
                Project <br />
                Management Hub
              </h1>
              <div class="link-box">
                <a class="theme-btn btn-style-one" href="#about-us">
                  <i class="btn-curve"></i>
                  <span class="btn-title">Discover More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-item">
      <div class="image-layer" style="background-image: url({SlideImage2});"></div>
      <div class="left-top-line"></div>
      <div class="right-bottom-curve"></div>
      <div class="right-top-curve"></div>
      <div class="auto-container">
        <div class="content-box">
          <div class="content">
            <div class="inner pm-hub">
              <div class="link-box">
                <a class="theme-btn btn-style-one" href="https://pmhub.my.canva.site/" target="_blank" referrerpolicy="no-referrer">
                  <i class="btn-curve"></i>
                  <span class="btn-title">Grab a Seat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
.banner-carousel {

  .content-box {

    h1{
      font-size: 95px;

      @media (max-width: 430px){
        font-size: 48px;
      }
    }

    .pm-hub.inner{
      position: absolute;
      bottom: 75px;
      left: 50%;

      @media (max-width: 991px) {
        bottom: 30px;
        left: auto;
        right: 0;
      }
    }
  }
}
</style>
