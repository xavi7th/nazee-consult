<script>
  import Icons from "$lib/svgIcons";
  import { PUBLIC_APP_NAME, PUBLIC_APP_PHONE, PUBLIC_APP_EMAIL, PUBLIC_APP_ADDRESS, PUBLIC_APP_DESCRIPTION } from "$env/static/public";
</script>


<!-- Main Footer -->
<footer class="main-footer">
  <div class="auto-container">
    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="row clearfix">
        <!--Column-->
        <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div class="footer-widget logo-widget">
            <div class="widget-content">
              <div class="logo">
                <!-- <a href="/"><img id="fLogo" src="{footerLogo}" alt="" /></a> -->
                <a href="/"><enhanced:img id="fLogo" src="$lib/images/nazee-consult-logo-large.png" alt="{PUBLIC_APP_NAME} logo" /></a>
              </div>
              <div class="text">{PUBLIC_APP_DESCRIPTION}.</div>
              <ul class="social-links clearfix">
                <li><a href="#/">{@html Icons.facebook()}</a></li>
                <li><a href="#/">{@html Icons.twitter()}</a></li>
                <li><a href="#/">{@html Icons.instagram({color: 'currentColor'})}</a></li>
                <li><a href="#/">{@html Icons.linkedIn({color: 'currentColor'})}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div class="footer-widget links-widget">
            <div class="widget-content">
              <h6>Explore</h6>
              <div class="row clearfix">
                <div class="col-md-6 col-sm-12">
                  <ul>
                    <li><a href="#/">About</a></li>
                    <li><a href="#/">Meet Our Team</a></li>
                    <li><a href="#/">Our Portfolio</a></li>
                    <li><a href="#/">Latest News</a></li>
                    <li><a href="#/">Contact</a></li>
                  </ul>
                </div>
                <div class="col-md-6 col-sm-12">
                  <ul>
                    <li><a href="#/">Support</a></li>
                    <li><a href="#/">Privacy Policy</a></li>
                    <li><a href="#/">Terms of Use</a></li>
                    <li><a href="#/">Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div class="footer-widget info-widget">
            <div class="widget-content">
              <h6>Contact</h6>
              <ul class="contact-info">
                <li class="address">
                  {@html Icons.location({fill: '#ff6110'}) } {@html PUBLIC_APP_ADDRESS }
                </li>
                <li> {@html Icons.phone() } <a href="tel:{ PUBLIC_APP_PHONE }">{ PUBLIC_APP_PHONE }</a></li>
                <li> {@html Icons.mail() } <a href="mailto:{ PUBLIC_APP_EMAIL }">{ PUBLIC_APP_EMAIL }</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div class="footer-widget newsletter-widget">
            <div class="widget-content">
              <h6>Newsletter</h6>
              <div class="newsletter-form">
                <form method="post" action="?/contact">
                  <div class="form-group clearfix">
                    <input type="email" name="email" value="" placeholder="Email Address" required />
                    <button type="submit" class="theme-btn">{@html Icons.mailFilled()}</button>
                  </div>
                </form>
              </div>
              <div class="text">Sign up for our latest news & articles. We won’t give you spam mails.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="auto-container">
      <div class="inner clearfix">
        <div class="copyright">&copy; copyright { new Date().getFullYear() } by { PUBLIC_APP_NAME }</div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  #fLogo{
    width: 200px;
    height: auto;
  }
</style>
