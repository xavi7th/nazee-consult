<script>
  import Icons from "$lib/svgIcons";
  import closeIcon from '$lib/images/icons/close-1-1.png';
  import { PUBLIC_APP_NAME, PUBLIC_APP_PHONE, PUBLIC_APP_EMAIL, PUBLIC_APP_ADDRESS, PUBLIC_APP_FACEBOOK, PUBLIC_APP_TWITTER, PUBLIC_APP_INSTAGRAM, PUBLIC_APP_LINKEDIN } from "$env/static/public";

</script>

<header class="main-header header-style-one">
  <div class="header-upper">
    <div class="inner-container clearfix">
      <div class="logo-box">
        <div class="logo">
          <a href="/" title="{PUBLIC_APP_NAME} PMP made easy"><enhanced:img src="$lib/images/nazee-consult-logo-large.png" id="thm-logo" alt="{PUBLIC_APP_NAME} logo" title="{PUBLIC_APP_NAME} PMP made easy" /></a>
        </div>
      </div>
      <div class="nav-outer clearfix">

        <div class="mobile-nav-toggler"><span class="icon">{@html Icons.menuHamburger({size: 30})}</span><span class="txt">Menu</span></div>

        <nav class="main-menu navbar-expand-md navbar-light">
          <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
            <ul class="navigation clearfix">
              <li><a href="#about-us">About Us</a></li>

              <li><a href="#about-pm">Project Management</a></li>

              <li><a href="#advisory">Services</a></li>

              <li><a href="#masterclass">PM Masterclass</a></li>

              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="other-links clearfix">
        <div class="link-box">
          <div class="call-us">
            <a class="link" href="tel:{PUBLIC_APP_PHONE}">
              <span class="icon"></span>
              <span class="sub-text">Call Anytime</span>
              <span class="number">{PUBLIC_APP_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


<!--Mobile Menu-->
<div class="side-menu__block">
  <div class="side-menu__block-overlay custom-cursor__overlay">
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
  </div>

  <div class="side-menu__block-inner">
    <div class="side-menu__top justify-content-end">
      <a href="#/" class="side-menu__toggler side-menu__close-btn"><img src={closeIcon} alt="close" /></a>
    </div>


    <nav class="mobile-nav__container">
      <!-- content is loading via js -->
    </nav>
    <div class="side-menu__sep"></div>

    <div class="side-menu__content">
      <p>{@html PUBLIC_APP_ADDRESS}</p>
      <p>
        <a href="mailto:{PUBLIC_APP_EMAIL}">{PUBLIC_APP_EMAIL}</a> <br />
        <a href="tel:{PUBLIC_APP_PHONE}">{PUBLIC_APP_PHONE}</a>
      </p>
      <div class="side-menu__social">
        <a target="_blank" rel="noreferrer" href="{PUBLIC_APP_INSTAGRAM}"><span class="fab">{@html Icons.instagram({color: 'currentColor'})}</span></a>
        <a target="_blank" rel="noreferrer" href="{PUBLIC_APP_FACEBOOK}"><span class="fab">{@html Icons.facebook()}</span></a>
        <a target="_blank" rel="noreferrer" href="{PUBLIC_APP_TWITTER}"><span class="fab">{@html Icons.twitter()}</span></a>
        <a target="_blank" rel="noreferrer" href="{PUBLIC_APP_LINKEDIN}"><span class="fab">{@html Icons.linkedIn({color: 'currentColor'})}</span></a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #thm-logo{
    width: 200px;
    max-height: none;
  }
</style>
