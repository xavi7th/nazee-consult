<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
  import bkgImage from '$lib/images/background/image-2.jpg';
</script>

<section class="agency-section pt-200">
  <div class="auto-container">
    <div class="row clearfix">
      <div class="left-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div class="inner">
          <div class="sec-title">
            <h2>
              We are the  <br />
              Best PM agency <span class="dot">.</span>
            </h2>
          </div>

          <div class="text">At { PUBLIC_APP_NAME }, we are fervent believers that project managers are not just professionals; they are the architects of transformation, the catalysts for progress, and the navigators of change in today’s dynamic world.</div>

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

            <div class="tabs-content">
              <div class="tab active-tab" id="tab-vision">
                <div class="content">
                  <div class="text">
                    Our journey began with a vision to empower and elevate project managers, recognizing them as the unsung heroes behind every successful endeavor. We understand the pivotal role they play in shaping the landscape of industries, businesses, and communities worldwide.
                  </div>
                </div>
              </div>

              <div class="tab" id="tab-drive">
                <div class="content">
                  <div class="text">
                    At { PUBLIC_APP_NAME }, we stand committed to providing unparalleled resources, cutting-edge tools, and a transformative learning environment tailored explicitly for project managers. Our mission is to equip these world changers with the knowledge, skills, and support they need to excel and lead impactful initiatives that shape the future.
                  </div>
                </div>
              </div>

              <div class="tab" id="tab-mission">
                <div class="content">
                  <div class="text">
                    We are driven by the conviction that project managers possess a unique set of skills – a blend of leadership, strategic thinking, problem-solving, and adaptability – that goes beyond managing timelines and budgets. They are the driving force behind innovation, the orchestrators of collaboration, and the champions of efficiency and effectiveness.
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
            <a class="theme-btn btn-style-one" href="https://forms.gle/XNveBeKrViWc6x4i9" target="_blank" referrerpolicy="no-referrer">
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

    @media (max-width: 425px) {
      flex-wrap: wrap;

      .btn-title{
        padding: 10px 30px 10px;
      }
    }
  }
</style>
