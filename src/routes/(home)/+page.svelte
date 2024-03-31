<script>
  import CTA from '$lib/components/home/CTA.svelte';
  import AboutUs from '$lib/components/home/AboutUs.svelte';
  import VideoCTA from '$lib/components/home/VideoCTA.svelte';
  import Slideshow from "$lib/components/home/Slideshow.svelte";
	import PmFunFacts from '$lib/components/home/PMFunFacts.svelte';
  import Testimonial from '$lib/components/home/Testimonial.svelte';
	import MasterClass from '$lib/components/home/MasterClass.svelte';
  import AdvisoryCall from '$lib/components/home/AdvisoryCall.svelte';
  import LatestPMPNews from '$lib/components/home/LatestPMPNews.svelte';
  import ServicesSummary from '$lib/components/home/ServicesSummary.svelte';
  import DiplomaProgramme from '$lib/components/home/DiplomaProgramme.svelte';
  import DiplomaScholarship from '$lib/components/home/DiplomaScholarship.svelte';
  import GlobalCertAndTemplates from '$lib/components/home/GlobalCertAndTemplates.svelte';
	import AboutProjectManagement from '$lib/components/home/AboutProjectManagement.svelte';

  export let data;

  /**
	 * @param {string | any[]} arr
	 * @param {number} n
	 */
  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len) return []
        // throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
</script>

<Slideshow />
<ServicesSummary />
<VideoCTA />
<AboutUs />
<AboutProjectManagement />
<PmFunFacts />
<AdvisoryCall />
<DiplomaProgramme />
<DiplomaScholarship />
<GlobalCertAndTemplates />
<!-- <MasterClass /> -->
<Testimonial />
<LatestPMPNews news={getRandom(data.news, 3)}/>
<CTA />
