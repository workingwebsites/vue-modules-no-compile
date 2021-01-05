// Import what's needed
import Vue from "/node_modules/vue/dist/vue.esm.browser.min.js";
import ButtonCounter from "./component.js";
//Note: ButtonCounter = button-counter

new Vue({
  el: "#app",
  components: {
    ButtonCounter,
  },

  data: {
    message: "Hello Vue 2.6.0-beta1 ESM Browser Build!",
  },
});
