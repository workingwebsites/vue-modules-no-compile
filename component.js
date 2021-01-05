//Export component so it can be imported elsehwere
export default {
  //Component name
  name: "button-counter",

  //The usual stuff
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
};
