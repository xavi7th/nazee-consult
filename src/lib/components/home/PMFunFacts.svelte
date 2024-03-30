<script>

	import svgIcons from '$lib/svgIcons';

</script>
<section class="why-us-section">
  <div class="auto-container">
    <div class="row clearfix">
      <div class="left-col col-lg-6 col-md-12 col-sm-12" style="order: 12;">
        <div class="inner wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInLeft;">
          <div class="round-box">
            <div class="image-box">
              <enhanced:img decoding="async" src="$lib/images/resource/featured-image-8.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="right-col col-lg-6 col-md-12 col-sm-12 pm-fun-facts">
        <div class="inner">
          <div class="sec-title">
            <h2>PM Fun Facts<span class="dot">.</span></h2>
          </div>

          <div class="features">
            <div class="feature">
              {@html svgIcons.toolTip()}
              <div class="inner-box">
                <h6>Average Pay</h6>
                <div class="text">The average project manager earns at least $70,000/yr.</div>
              </div>
            </div>
            <div class="feature">
              {@html svgIcons.toolTip()}
              <div class="inner-box">
                <h6>Demand</h6>
                <div class="text">According to statistics, the demand for project managers will increase by 90% in { new Date().getFullYear() + 1 }.</div>
              </div>
            </div>
            <div class="feature">
              {@html svgIcons.toolTip()}
              <div class="inner-box">
                <h6>Specific Regions</h6>
                <div class="text">Project Management is the second highest in-demand non-coding tech skill globally.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .why-us-section .feature .inner-box{

    &:before{
      content: none;
    }

    h6{
      @media (max-width: 435px) {
        text-align: left;
        padding-left: 45px;
        padding-top: 7px;
      }
    }
  }

  .pm-fun-facts :global(svg){
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 60px;
    color: var(--thm-base);
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    background: rgba(var(--thm-base-rgb), 0.2);
    border-radius: 50%;
    transition: all 500ms ease;
    padding: 10px;

    @media (max-width:435px) {
      width: 40px;
      height: 40px;
    }
  }
</style>
