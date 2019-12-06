import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';


export class Scrolling{
  constructor(){

  }
}


// (function(){
//   $(window).on("load",function(){
//
//     const $scrollingContent = $(".scrolling-content"),
//       $scrollTo = $('[data-scroll-to]');
//
//     $scrollingContent.mCustomScrollbar({
//       theme:"dark",
//       setHeight: $('.scrolling-content__inner').height() - 100,
//       scrollInertia: 600,
//       callbacks:{
//         whileScrolling:function(){
//
//           var boxes = $('[data-scroll-speed]'),
//             jwindow = this.mcs.content;
//
//           var scrollTop = this.mcs.top;
//
//           boxes.each(function(){
//             var jthis = $(this),
//               scrollspeed = parseInt(jthis.data('scroll-speed')),
//               val = - scrollTop / scrollspeed;
//             jthis.css('transform', 'translateY(' + val + 'px)');
//           });
//
//         },
//         alwaysTriggerOffsets:false
//       }
//     });
//
//     $scrollTo.click(function (e) {
//       e.preventDefault();
//       const id = $(this).attr('data-scroll-to');
//       console.log(id);
//       $scrollingContent.mCustomScrollbar('scrollTo',$(id));
//     });
//
//   });
// })();