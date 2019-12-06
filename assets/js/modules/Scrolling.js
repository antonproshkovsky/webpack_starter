import $ from 'jquery'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';


export class Scrolling {
  constructor($container, options) {
    this.$container = $container;
    this.options = options;

    this.$parallaxElements = this.$container.find('[data-scroll-speed]');
    this.$scrollToElements = this.$container.find('[data-scroll-to]');
  }

  initParallax(self) {
    const {$parallaxElements} = self;

    let scrollTop = this.mcs.top;

    $parallaxElements.each((index, element) => {
      if($(element).is(':mcsInSight') || $(element).css('transform') == 'none') {
        var scrollSpeed = parseInt($(element).data('scroll-speed')),
          val = -scrollTop * (scrollSpeed / 5);
        $(element).css('transform', 'translateY(' + val + 'px)');
      }
    });
  }

  initScrollTo(){
    const self = this;

    this.$scrollToElements.click(function (e) {
      e.preventDefault();

      const id = $(this).attr('data-scroll-to');
      self.$container.mCustomScrollbar('scrollTo',$(id));
    })
  }

  init() {
    const self = this;
    const {options} = self;

    $(window).on('load',() => {
      this.$container.mCustomScrollbar({
        ...options,
        callbacks: {
          whileScrolling() {
            self.initParallax.apply(this, [self]);
          }
        }
      });

      self.initScrollTo();
    })
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