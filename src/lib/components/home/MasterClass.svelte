<script lang="ts">
	import svgIcons from '$lib/svgIcons';
	import { onMount } from 'svelte';

  let elem: HTMLElement | undefined = undefined;


  onMount(() => {
    let clearInt = setInterval(() => {
      try {
        window.jarallax(elem, {
          speed: 0.3,
          imgPosition: '50% -100%'
        });

        clearInterval(clearInt);
      } catch (e) {}
    }, 300)

    return () => {
      window.jarallax(elem, 'destroy');
    }
  })

</script>

<section class="features-section jarallax" bind:this={elem} id="masterclass">
	<enhanced:img decoding="async" src="$lib/images/background/nazee-consult-pm-masterclass.jpg" class="jarallax-img" alt=""/>
	<div class="auto-container">
		<div class="content-box">
			<h2>Unlock your career potential<span>.</span></h2>
			<div class="features clearfix">
				<div class="feature-block">
					<div class="inner">
						<div class="icon-box pb-20">{@html svgIcons.engineer()}</div>
						<h6>Project <br />management <br /> methodologies</h6>
					</div>
				</div>
				<div class="feature-block">
					<div class="inner">
						<div class="icon-box pb-20">{@html svgIcons.overview()}</div>
						<h6>Overview <br /> of a live <br /> project</h6>
					</div>
				</div>
				<div class="feature-block">
					<div class="inner">
						<div class="icon-box pb-20">{@html svgIcons.phases()}</div>
						<h6>Project <br />management <br /> phases</h6>
					</div>
				</div>
			</div>
      <div class="fz-32 mb-54">
        Master project management foundations by joining our masterclass and gain access to our PM hub community
      </div>
			<div class="link-box">
				<a class="theme-btn btn-style-one" target="_blank" rel="noreferrer" referrerpolicy="no-referrer" href="https://pmmasterclass.my.canva.site/">
					<i class="btn-curve"></i>
					<span class="btn-title">Grab a Seat</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  .jarallax-img{
    filter: grayscale(100%);
    opacity: .3;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
  }

  // .features-section .feature-block .inner{
  //   padding-right: 50px;
  //   margin-right: 50px;
  // }

  .features-section .content-box{
    max-width: 780px;
  }

  .features-section .content-box h2{
    font-size: 120px;
    margin-bottom: 100px;
  }

  .features-section .feature-block h6{
    font-size: 30px;
  }
</style>
