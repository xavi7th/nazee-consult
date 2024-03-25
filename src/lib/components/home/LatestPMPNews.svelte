<script>
	import svgIcons from '$lib/svgIcons';

  export let news
</script>

<section class="news-section">
  <div class="auto-container">
    <div class="sec-title centered">
      <h2>Latest news & articles<span class="dot">.</span></h2>
    </div>

    <div class="row clearfix">
      {#each news as article}
         <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
           <div class="inner-box">
             <div class="image-box">
               <a href="{article.url}" target="_blank"><img height="250" src="{article.img}" alt="{article.title}" /></a>
             </div>
             <div class="lower-box">
               <div class="post-meta">
                 <ul class="clearfix">
                   <li>
                    {@html svgIcons.calender()}
                    {new Date(article.date).getDate()} {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date(article.date).getMonth()]}
                  </li>
                   <li>{@html svgIcons.user()} {article.author}</li>
                 </ul>
               </div>
               <h5><a href="{article.url}" target="_blank" title="{article.title}">{article.title.split('-')[0].split(' ').splice(0, 10).join(' ')} ... </a></h5>
               <div class="text">{article.description}</div>
               <div class="link-box">
                 <a class="theme-btn" href="{article.url}" target="_blank">{@html svgIcons.chevronRight({color: 'currentColor'})}</a>
               </div>
             </div>
           </div>
         </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .news-block .image-box img{
    height:250px;
    object-fit: cover;
  }
</style>
