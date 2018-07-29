var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['apple', 'banana', 'strawberry'],
    show: true
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    }
  },
  created: function() {
    console.log('created');
  },
  mounted: function() {
    console.log('mounted');
  }
})
