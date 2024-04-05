<script>
  export let team = [];
	import Modal from '$lib/components/Modal.svelte';

  import img0 from '$lib/images/team/igbinovia-omonua-naomi-vice-chancellor-nazee.jpg?enhanced&fit=cover&h=720&position=top&w=640;400;200';
  import img1 from '$lib/images/team/miracle-ndikom-head-of-operations-nazee.jpg?enhanced&fit=cover&h=720&position=top&w=640;400;200';
  import img2 from '$lib/images/team/jennifer-zoe-ebade-associate-project-manager-nazee.jpg?enhanced&fit=cover&h=720&position=top&w=640;400;200';
  import img3 from '$lib/images/team/osazee-victor-head-of-institute-nazee.png?enhanced&fit=cover&h=720&position=top&w=640;400;200';

  let img = [ img0, img1, img2, img3];
  let showModal = false, currentDetail = undefined;
</script>

<section class="py-80">
  <div class="auto-container">
    <div class="sec-title centered">
      <h2>Meet the team<span class="dot">.</span></h2>
    </div>
    <div class="row">
      {#each team as detail, idx}
        <div class="col-md-6 col-lg-3">
          <div class="team-card-three">
            <div class="team-card-three__inner">
              <div class="team-card-three__image">
                <enhanced:img loading="lazy" decoding="async" src={img[idx]} class="attachment-linoor_270X270 size-linoor_270X270 wp-post-image" alt=""/>
              </div>

              <div class="team-card-three__content">
                <h5 class="team-card-three__name">{detail.name}</h5>
                <div class="team-card-three__designation">{detail.position}</div>
              </div>

              <div class="team-card-three__hover">
                <h5 class="team-card-three__name">{detail.name}</h5>
                <div class="team-card-three__designation">{detail.position}</div>
                <a href="#/" on:click|preventDefault|stopPropagation={() => {currentDetail = detail; showModal = true}} class="team-card-three__social clearfix m-0 list-unstyled">Details</a>
              </div>

            </div>

          </div>

        </div>
      {/each}
    </div>
  </div>
</section>

<Modal bind:showModal on:close={() => { currentDetail = undefined; showModal = false; }}>
	<h3 slot="header" class="modal-title">About {currentDetail?.name}</h3>

  <div class="modal-text">
    {@html currentDetail?.profile}
  </div>
</Modal>



<style lang="scss">
  .team-card-three {
    margin-bottom: 30px;
    border-radius: 8px;
    transition: all 500ms ease;

    &:hover{
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.04);
    }

    &__inner {
      overflow: hidden;
      border-radius: 8px;
      position: relative;
    }


    &__image {

      img {
        width: 100%;
        filter: grayscale(100%);
      }
    }


    &__hover,
    &__content {
      border: 1px solid #e9ebee;
      text-align: center;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      padding-top: 25px;
      padding-bottom: 25px;
      background-color: #fff;
      transition: opacity 500ms ease, visibility 500ms ease, transform 500ms ease;
    }

    &__content {
      opacity: 1;
      visibility: visible;
      transform: scale(1, 1);
      transform-origin: bottom center;
    }

    &:hover &__content {
      opacity: 0;
      visibility: hidden;
      transform: scale(1, 0);
    }

    &__hover {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      opacity: 0;
      visibility: hidden;
      transform: scale(1, 0);
      transform-origin: bottom center;
    }

    &:hover &__hover {
      opacity: 1;
      visibility: visible;
      transform: scale(1, 1);
    }

    &__social {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f4f5f8;
      border-radius: 8px;
      font-size: 11px;
      text-transform: uppercase;
      padding: 0;
      margin: 10px 70px 0 !important;
      font-weight: bold;

      &:hover {
        background-color: #ffdac7;
        color: #343a40;
      }
    }

    &__name {
      margin: 0;
      text-transform: uppercase;
      color: var(--thm-black);
      letter-spacing: .1em;
      line-height: 1;
      font-family: var(--thm-font);
      font-size: 18px;
    }

    &__designation {
      text-transform: uppercase;
      color: #686a6f;
      font-size: 12px;
      margin: 0;
      line-height: 1;
      letter-spacing: .1em;
      margin-top: 10px;
    }
  }

  .modal-title{
    font-size: 45px;
  }

  .modal-text{
    font-size: 18px;

    :global(p) {
      line-height: 20px;
      color: #555;

      &:first-of-type{
        margin-top: 30px;
      }
    }
  }


  @media (max-width: 435px) {
    .modal-title{
      font-size: 30px;
    }

    .modal-text{
      font-size: 16px;
    }
  }




</style>
