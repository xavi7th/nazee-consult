<script>

	import svgIcons from '$lib/svgIcons';

</script>

<section class="we-do-section" id="diploma">
  <div class="auto-container">
    <div class="row clearfix">
      <div class="left-col col-lg-6 col-md-12 col-sm-12">
        <div class="inner pr-20">
          <div class="featured-block pl-0 clearfix">
            <div class="image w-100"><enhanced:img src="$lib/images/resource/nazee-consult-best-graduating-student.jpg" alt="nazee consult best graduating student" /></div>
            <div class="text">BEST GRADUATING STUDENT</div>
          </div>
        </div>
      </div>
      <div class="right-col col-lg-6 col-md-12 col-sm-12">
        <div class="inner">
          <div class="sec-title">
            <h2>
              Dimplma in Project  <br />
              Management <span class="dot">.</span>
            </h2>
          </div>
          <div class="faq-box">
            <ul class="accordion-box clearfix">
              <li class="accordion block active-block">
                <div class="acc-btn active"><span class="count">1.</span> Module One <span class="chevron">{@html svgIcons.chevronDown()}</span></div>
                <div class="acc-content current">
                  <div class="content">
                    <div class="text"> {@html svgIcons.check()} <span class="pl-10">Introduction to Project Management.</span></div>
                    <div class="text"> {@html svgIcons.check()} <span class="pl-10">Real-life Project Management solution scenarios.</span></div>
                    <div class="text"> {@html svgIcons.check()} <span class="pl-10">Essential roles of Project managers.</span></div>
                    <div class="text"> {@html svgIcons.check()} <span class="pl-10">Basic project management tools.</span></div>
                  </div>
                </div>
              </li>

              <li class="accordion block">
                <div class="acc-btn"><span class="count">2.</span> Module Two <span class="chevron">{@html svgIcons.chevronDown()}</span></div>
                <div class="acc-content">
                  <div class="content">
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Project Management Life-cycle.</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Building WBS (Work Breakdown Structure).</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Creating a Project Management Schedule.</span></div>
                  </div>
                </div>
              </li>

              <li class="accordion block">
                <div class="acc-btn"><span class="count">3.</span> Module Three <span class="chevron">{@html svgIcons.chevronDown()}</span></div>
                <div class="acc-content">
                  <div class="content">
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Team building and leadership.</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Risk assessment and monitoring.</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Communication and stakeholder engagement.</span></div>
                  </div>
                </div>
              </li>

              <li class="accordion block">
                <div class="acc-btn"><span class="count">4.</span> Module Four <span class="chevron">{@html svgIcons.chevronDown()}</span></div>
                <div class="acc-content">
                  <div class="content">
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Project closing.</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">Customer satisfaction and Lesson-Learned Register.</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">How to land entry roles in project management and interview prep.</span></div>
                    <div class="text">{@html svgIcons.check()} <span class="pl-10">CERTIFICATE after live project completion.</span></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .we-do-section {

    .featured-block{
      min-height: auto;

      .image{
        position: relative;
      }

      .text{
       position: absolute;
       color: white;
       background: black;
       padding-left: 20px;
       margin-bottom: 10px;
       right: 0;
       bottom: 0;
       left: 0;
       top: unset;
     }
    }

    .acc-btn{
      display: flex;

      &:before{
        content: unset !important;
      }

      .count{
        margin-right: 5px;
      }

      .chevron{
        margin-left: auto;
        transition: transform 300ms ease-in-out;
      }
    }

  }

  .active-block .chevron {
    transform: rotate3D(1, 0, 0, 0.5turn);
  }

</style>
