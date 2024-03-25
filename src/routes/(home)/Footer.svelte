<script>
  import Icons from "$lib/svgIcons";
  import { PUBLIC_APP_NAME, PUBLIC_APP_PHONE, PUBLIC_APP_EMAIL, PUBLIC_APP_ADDRESS, PUBLIC_APP_DESCRIPTION, PUBLIC_APP_INSTAGRAM, PUBLIC_APP_FACEBOOK, PUBLIC_APP_TWITTER, PUBLIC_APP_LINKEDIN } from "$env/static/public";
</script>

<footer class="main-footer">
  <div class="auto-container">
    <div class="widgets-section">
      <div class="row clearfix">
        <div class="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="footer-widget logo-widget">
            <div class="widget-content">
              <div class="logo">
                <a href="/"><enhanced:img id="fLogo" src="$lib/images/nazee-consult-logo-large.png" alt="{PUBLIC_APP_NAME} logo" /></a>
              </div>
              <div class="text">{PUBLIC_APP_DESCRIPTION}.</div>
              <ul class="social-links clearfix">
                <li><a href="{ PUBLIC_APP_INSTAGRAM }" target="_blank" rel="noreferrer" referrerpolicy="no-referrer">{@html Icons.instagram({color: 'currentColor'})}</a></li>
                <li><a href="{ PUBLIC_APP_FACEBOOK }" target="_blank" rel="noreferrer" referrerpolicy="no-referrer">{@html Icons.facebook()}</a></li>
                <li><a href="{ PUBLIC_APP_TWITTER }" target="_blank" rel="noreferrer" referrerpolicy="no-referrer">{@html Icons.twitter()}</a></li>
                <li><a href="{ PUBLIC_APP_LINKEDIN }" target="_blank" rel="noreferrer" referrerpolicy="no-referrer">{@html Icons.linkedIn({color: 'currentColor'})}</a></li>
              </ul>
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

        <!-- <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
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
        </div> -->
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
