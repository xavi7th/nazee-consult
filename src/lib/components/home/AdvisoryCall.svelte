<script>
	import svgIcons from '$lib/svgIcons';
  import PriceTag from '$lib/components/PriceTag.svelte';
</script>

<section class="about-section" id="advisory">
  <div class="auto-container">
    <div class="row clearfix">
      <div class="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div class="inner">
          <div class="image-block wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><enhanced:img src="$lib/images/resource/advisory-call.webp?h=516&w=470" alt="" /></div>
          <div class="image-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms"><enhanced:img src="$lib/images/resource/advisory-call-office.webp" alt="" /></div>
        </div>
      </div>

      <div class="text-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div class="inner">
          <div class="sec-title">
            <h2 class="text-nowrap">
              ADVISORY CALL (30 MINS) <span class="dot">.</span>
            </h2>
            <div class="lower-text">Tailored expert business consultations</div>
          </div>
          <div class="text">
            <p>If you need tailored expert advice or opinions then our private one-on-one consultation is for you. For example:</p>
          </div>
          <div class="text clearfix">
            <ul>
              <li>{@html svgIcons.check() } Create a clear roadmap on how to safely transition into PM.</li>
              <li>{@html svgIcons.check() } Roadmap on how to land first PM role.</li>
              <li>{@html svgIcons.check() } Tailored advice for exams and certification.</li>
              <li>{@html svgIcons.check() } Focused consultation about career progressions.</li>
              <li>{@html svgIcons.check() } Interview prep/C.V assessment.</li>
              <li>{@html svgIcons.check() } Project assistance (guidelines or help to create a budget, plan, risk log, executive summary).</li>
            </ul>
          </div>
          <div class="link-box d-flex justify-content-between justify-content-sm-around">
            <a class="theme-btn btn-style-one" href="https://paystack.com/pay/oneononecall" target="_blank" rel="noreferrer">
              <i class="btn-curve"></i>
              <span class="btn-title">Book a Call Now</span>
            </a>

            <PriceTag price = '$30' duration='30 mins'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .about-section {
    .image-column .image-block img{
      filter: none;
    }

    .text-column .text {

      ul li{
        padding-left: 0;

        &::before{
          content: '';
        }

        :global(svg){
          margin-right: 10px;
        }
      }
    }
  }

</style>
