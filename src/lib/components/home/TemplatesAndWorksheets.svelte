<section class="process-one">
  <div class="auto-container">
    <div class="row">
      <div class="col-md-12 col-lg-6 process-one__image__column">
        <div class="process-one__image wow fadeInLeft" data-wow-duration="1500ms">
          <img decoding="async" src="https://linoorwp.pixydrops.com/wp-content/uploads/2021/11/grow-1-1.png" alt="" />
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="process-one__content">
          <div class="sec-title">
            <h2>
              got an new idea<span class="dot">.</span>
            </h2>
          </div>
          <p class="process-one_summary">
            Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry has been the industry's standard dummy text ever. Vivamus semper nulla quis ipsum maximus, vulputate volutpat augue varius.
            Aliquam rhoncus ullamcorper est.
          </p>
          <ul class="list-unstyled process-one__list ml-0">
            <li>
              <i class="flaticon-check"></i>
              Suspe ndisse suscipit sagittis leo.
            </li>
            <li>
              <i class="flaticon-check"></i>
              Entum estibulum dignissim posuere.
            </li>
            <li>
              <i class="flaticon-check"></i>
              If you are going to use a passage.
            </li>
            <li>
              <i class="flaticon-check"></i>
              Nulla quis ipsum maximus.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
.process-one {
  counter-reset: processCount;
  padding-top: 90px;

  @media (min-width: 992px) {
    padding-top: 120px;
  }

  .row {
    margin-bottom: 90px;

    @media (min-width: 992px) {
      margin-bottom: 120px;
    }

    @media (min-width: 992px) {
      &:nth-child(even) {
        flex-direction: row-reverse;

        .process-one__image__column {
          display: flex;
          justify-content: flex-end;
        }

        .process-one__image::before,
        .process-one__image::after {
          left: auto;
          right: 0;
          -webkit-transform: translate(50%, -50%);
          transform: translate(50%, -50%);
        }
      }
    }
  }

  .sec-title {
    margin-bottom: 0;
  }
}

.process-one__image {
  counter-increment: processCount;
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  border-radius: 8px;
  background-color: var(--thm-black);

  @media (min-width: 992px) {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    border-radius: 50%;
    background-color: #f4f5f8;
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media (min-width: 992px) {
      width: 387px;
      height: 387px;
      top: 50%;
      left: 0%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  &::after {
    content: counters(processCount, ".", decimal-leading-zero);
    background-color: var(--thm-base);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    position: absolute;
    border-radius: 50%;
    color: var(--thm-black);
    font-family: var(--thm-font);
    font-size: 30px;
    padding-top: 5px;
    width: 60px;
    height: 60px;
    top: 20%;
    left: 20%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media (min-width: 992px) {
      width: 128px;
      height: 128px;
      top: 50%;
      left: 0;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      font-size: 50px;
      padding-top: 12px;
    }
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    position: relative;
    mix-blend-mode: luminosity;
  }
}

.process-one_summary {
  margin: 0;
  font-size: 20px;
  color: var(--thm-text);
  line-height: 1.7em;
  font-weight: 300;
  margin-top: 34px;
  margin-bottom: 36px;
  font-family: var(--thm-font);
  letter-spacing: 0.1em;
}

.process-one__list {

  li {
    position: relative;
    padding-left: 30px;
    font-size: 20px;
    color: var(--thm-text);
    font-weight: 300;
    font-family: var(--thm-font);
    letter-spacing: 0.1em;

    & > i {
      position: absolute;
      top: 8px;
      left: 0;
      color: var(--thm-base);
      font-size: 20px;
    }
  }
}
</style>
