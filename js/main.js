var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  $(function(){
    $('.perepel').hover(function(){
      $('.per-sims').toggleClass('block'); 
    })
    $('.shastic-slide').hover(function(){
      $('.shastic-sims').toggleClass('block'); 
    })
    $('.sorok').hover(function(){
      $('.sorok-sims').toggleClass('block'); 
    })
    $('.pluxsch').hover(function(){
      $('.plux').toggleClass('block'); 
    })
    $('.lab').hover(function(){
      $('.labocki').toggleClass('block'); 
    })
    $('.urcha__wrapper').hover(function(){
      $('.yurcha-sims').toggleClass('block'); 
    })
    $('.sherb__wrapper').hover(function(){
      $('.sherb-sims').toggleClass('block'); 
    })
    $('.pavlova__wrapper').hover(function(){
      $('.pavlova-sims').toggleClass('block'); 
    })
    $('.gvaeva__wrapper').hover(function(){
      $('.gvaeva-sims').toggleClass('block'); 
    })
    $('.sharkova__wrapper').hover(function(){
      $('.sharkova-sims').toggleClass('block'); 
    })
    $('.zhurko__wrapper').hover(function(){
      $('.zhurko-sims').toggleClass('block'); 
    })
});