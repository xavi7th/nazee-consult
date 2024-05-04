<script>

	import svgIcons from '$lib/svgIcons';

</script>

<section class="services-section">
  <div class="auto-container">
    <div class="row clearfix">

      <div class="title-block col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div class="inner">
          <div class="sec-title">
            <h2>
              Our Services <span class="dot">.</span>
            </h2>
            <div class="lower-text">We are committed to providing our students with exceptional service while offering our employees the best training.</div>
          </div>
        </div>
      </div>
      <!--Service Block-->
      <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div class="inner-box">
          <div class="bottom-curve"></div>
          <div class="icon-box">
            {@html svgIcons.advisoryCall() }
          </div>
          <h6>
            <a href="#advisory">
              Advisory <br />
              Call (30 mins)
            </a>
          </h6>
        </div>
      </div>

      <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
        <a href="#diploma">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box">{@html svgIcons.diploma() }</div>
            <h6>
              <span>
                Diploma in <br />
                Project Management
              </span>
            </h6>
          </div>
        </a>
      </div>

      <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <a href="#scholarship">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box">{@html svgIcons.certification() }</div>
            <h6>
              <span>
                Project Management <br />
                Scholarship
              </span>
            </h6>
          </div>
        </a>
      </div>

      <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
        <a href="https://pmhub.my.canva.site/" target="_blank" referrerpolicy="origin" rel="me external">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box">{@html svgIcons.masterclass() }</div>
            <h6>
              <span>
                Project Management <br />
                Community Hub
              </span>
            </h6>
          </div>
        </a>
      </div>

      <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
        <a href="#templates">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box">{@html svgIcons.worksheets() }</div>
            <h6>
              <span>
                Templates &amp; <br />
                Worksheets
              </span>
            </h6>
          </div>
        </a>
      </div>

      <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
        <a href="#certification">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box">{@html svgIcons.certifiedGadgets() }</div>
            <h6>
              <span>
                Global Certification <br />
                Exam prep(2 weeks)
              </span>
            </h6>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
