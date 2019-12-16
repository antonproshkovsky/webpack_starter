import {Scrolling} from "./modules/Scrolling";
import $ from "jquery";

const sc = new Scrolling($('.scrolling-content'), {
  theme:"dark",
  scrollInertia: 700,
  scrollEasing:"easeInOut",
  snapAmount: 70,
  advanced: {
    updateOnContentResize: true
  },
});

sc.init();