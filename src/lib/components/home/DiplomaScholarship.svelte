<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
  import bkgImage from '$lib/images/background/image-1.jpg';
	import svgIcons from '$lib/svgIcons';
</script>

<section class="facts-section">
  <div class="image-layer" style="background-image: url({bkgImage});"></div>
  <div class="content-placeholder"></div>
</section>

<section class="trusted-section" id="scholarship">
  <div class="auto-container">
    <div class="outer-container">
      <div class="row clearfix">
        <div class="left-col col-xl-5 col-lg-6 col-md-12 col-sm-12">
          <div class="inner">
            <div class="col-header">
              <div class="header-inner">
                <span>We’re Committed To Your Guaranteed Success.</span>
              </div>
            </div>
            <div class="features d-none d-lg-block">
              <div class="feature">
                <div class="count"><span>01</span></div>
                <h5>AFRICANS FROM AGE 18 - 35</h5>
                <div class="sub-text">ID proof required</div>
              </div>
              <div class="feature">
                <div class="count"><span>02</span></div>
                <h5>50% OFF THE COURSE FEE</h5>
                <div class="sub-text">application link below</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-col col-xl-7 col-lg-6 col-md-12 col-sm-12">
          <div class="inner">
            <div class="sec-title">
              <h2>
                Scholarship Program <br class="d-md-none"/>
                for diploma in PMP<span class="dot">.</span>
              </h2>
              <div class="lower-text">{PUBLIC_APP_NAME} is partnering with Osazee Igbinovia Foundation to provide a scholarship program for diploma in project management. See the criteria listed below</div>
            </div>
            <div class="featured-block-two clearfix">
              <div class="image"><enhanced:img class="schlorship-img" src="$lib/images/resource/nazee-diploma-scholarship.jpg" alt="diploma-scholarship" /></div>
              <div class="text">
                <ul>
                  <li>{@html svgIcons.check()} <span class="pl-5">Africans from age 18 - 35 (ID proof required).</span></li>
                  <li>{@html svgIcons.check()} <span class="pl-5">50% off the course fee.</span></li>
                  <li>{@html svgIcons.check()} <span class="pl-5">Passionate about Project Management Education.</span></li>
                  <li>{@html svgIcons.check()} <span class="pl-5">WASSCE or higher educational background.</span></li>
                  <li>{@html svgIcons.check()} <span class="pl-5">Informal project experience of at least 3 months.</span></li>
                </ul>
              </div>
            </div>
            <div class="link-box mt-40">
              <a class="theme-btn btn-style-one" href="https://forms.gle/Dk82a2P3tBpHLaxYA" target="_blank" rel="noreferrer">
                <i class="btn-curve"></i>
                <span class="btn-title">Apply Here</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .content-placeholder{
    min-height: 300px;
  }

  .trusted-section {

    .featured-block-two {

      .image .schlorship-img{
        filter: none;
      }

      .text ul li{
        padding-left: 0;

        &:before{
          content: none;
        }
      }
    }
  }


  @media (max-width: 991px) {
    .facts-section .image-layer{
        background-attachment: inherit;
    }

    .trusted-section .featured-block-two{
      padding-left: 0;
      padding-top: 0;

      .image{
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        margin: 0 0 30px;
      }
    }
  }
</style>
