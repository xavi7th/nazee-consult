<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
  import bkgImage from '$lib/images/background/image-2.jpg';
</script>

<section class="company-section pt-200 pb-100">
  <div class="auto-container">
    <div class="row clearfix">
      <div class="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div class="inner">
          <div class="sec-title mb-20">
            <h2>
              We are the  <br />
              Best PM company <span class="dot">.</span>
            </h2>
          </div>

          <div class="text pb-50">At { PUBLIC_APP_NAME }, we are fervent believers that project managers are not just professionals; they are the architects of transformation, the catalysts for progress, and the navigators of change in today’s dynamic world.</div>

        </div>
      </div>
      <div class="right-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div class="inner">

          <div class="default-tabs tabs-box">
            <ul class="tab-btns tab-buttons clearfix">
              <li data-tab="#tab-vision" class="tab-btn active-btn"><span>Our Vision</span></li>
              <li data-tab="#tab-drive" class="tab-btn"><span>Our Drive</span></li>
              <li data-tab="#tab-mission" class="tab-btn"><span>Our Mission</span></li>
            </ul>

            <div class="tabs-content pb-50">
              <div class="tab active-tab" id="tab-vision">
                <div class="content">
                  <div class="text">
                    Innovation <br />
                    Excellence <br />
                    Global community <br />
                    Continuous development

                  </div>
                </div>
              </div>

              <div class="tab" id="tab-drive">
                <div class="content">
                  <div class="text">
                    At the forefront of project management education, our vision is to ignite passion, foster creativity, and cultivate a culture of continuous improvement, where every project manager has the confidence and capability to navigate complexities and achieve
                  </div>
                </div>
              </div>

              <div class="tab" id="tab-mission">
                <div class="content">
                  <div class="text">
                    Our mission is to provide comprehensive, accessible, and practical education and support to aspiring and existing project managers worldwide, equipping them with the skills, knowledge, and confidence necessary to succeed in their roles and drive successful project outcomes in any industry or context.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-column col-12 text-center">
        <div class="inner">
          <div class="link-box d-flex justify-content-around">
            <a class="theme-btn btn-style-one" href="wa.me/447311035016" target="_blank" referrerpolicy="no-referrer">
              <i class="btn-curve"></i> <span class="btn-title">Ask a Question</span>
            </a>

            <a class="theme-btn btn-style-two" href="https://forms.gle/f1L8DQhV2Ey9E1Yf8" target="_blank" referrerpolicy="no-referrer">
              <i class="btn-curve"></i> <span class="btn-title">Hire an Intern</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="parallax-section">
  <div class="image-layer" style="background-image: url({bkgImage});"></div>
  <div class="auto-container">
    <div class="content-box">
      <div class="icon-box"><span class="flaticon-app-development"></span></div>
      <h2>Success is not just a goal but a tangible destination. <span>Project Managers are World changers.</span></h2>
    </div>
  </div>
</section>

<style lang="scss">
  .link-box{

    @media (max-width: 435px) {
      flex-wrap: wrap;

      .btn-title{
        padding: 10px 30px 10px;
      }
    }
  }

  @media (max-width: 435px) and (-webkit-min-device-pixel-ratio: 2){
    .ios .parallax-section .image-layer{
      background-attachment: initial;
    }
  }
</style>
