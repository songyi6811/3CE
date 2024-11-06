jQuery(document).ready(function(){

    $('.pc_nav .menu>li').mouseover(function(){
        $('.pc_nav .depth02').stop().slideDown(300);
        $('.bg').stop().slideDown(300);
    }).mouseout(function(){
        $('.pc_nav .depth02').stop().slideUp(300);
        $('.bg').stop().slideUp(300);
    });

   
        let menuBtn = document.querySelector('.menu_btn a:first-child');
        let mobileNav = document.querySelector('.mobile_nav'); //.mobile_nav            

        //menuBtn을 클릭했을 때 이벤트 실행
        menuBtn.addEventListener('click', () => {
            //2. mobileNav한테 클래스명 active 추가/삭제
            mobileNav.classList.toggle('active');
        });

        
    $('.mobile_nav .menu>li').click(function(){
        $('.mobile_nav .depth02').stop().slideToggle(300);
        $('.bg').stop().slideDown(300);
    })
    

     
     
    console.log($('.slidelist > a').width())
    console.log($('.slidelist > a').length)
    let slideWrap = $('.slidelist > a').length;
    let slideWidth = $('.slidelist > a').width();
    let slideWrapWidth = slideWrap * slideWidth;

    $('.slidelist').css('width', slideWrapWidth)
  

   /*  console.log(slideWrapWidth) */
    setInterval(function(){
        /* $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -1920});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -3840});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : 0});
        $('.slidelist').delay(2000); */
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -slideWidth});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -slideWidth * 2});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : 0});
        $('.slidelist').delay(2000);
    });



});