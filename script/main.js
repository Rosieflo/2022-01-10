$(document).ready(function(){

  // 변수선언
  let gnb = $('.gnb > ul > li');

  // 마우스오버/아웃
  gnb.mouseenter(function(){

    // 내가 선택한 메뉴의 자손 나오게
    $(this).find('.sub').stop().slideDown();
  });

  gnb.mouseleave(function(){
    // 모든 서브메뉴 서서히 사라지게
    $('.sub').stop().slideUp();
  });


  
  // 이미지 슬라이드
  let n = 0;

  function fadeInOut(){

    // 1. 보이는 슬라이드 이미지 숨기기
    $('#slide li').stop().fadeOut();

      if(n==2){ // 마지막 이미지라면
        n = 0; // 처음 이미지 나오도록 0 대입
      }else{
        n++; // 그렇지 않다면 다음 이미지 나오도록 +1
      }

    // 2. 그 다음 이미지 나오게
    $('#slide li').eq(n).stop().fadeIn();

  }

  // 3초마다 이미지 서서히 변한다
  let Timer = setInterval(fadeInOut, 3000);

  // 시간객체 setInterval(함수명, 시간)



  // 탭메뉴 컨텐츠
  // 1. 공지사항 박스 보이게
  $('.con01').show();

  // 2. 탭메뉴 클릭시 act서식 적용하고 해당박스 나오게하기
  let tab_mnu = $('#tab_con > ul > li > a');

  tab_mnu.click(function(){
    $('#tab_con > ul > li > a').removeClass('act');
    $(this).addClass('act');

    $('#tab_con div').hide();
    $(this).next().show().css('background','#084fd3');
  });



  // 레이어 팝업띄우기
  let modal = "<div class='modal'><div><img src='./images/popup.jpg' alt=''><a href='#' title=''>닫기</a></div></div>";

 
  $('.con01 > ul > li:first-child a').click(function(){
 
   $('body').append(modal); //본문영역의 뒤쪽에 레이어추가하여 나오게
 
   //닫기 누르면 사라지게
   $('.modal a').click(function(){
     $('.modal').hide();
   });

  });

});