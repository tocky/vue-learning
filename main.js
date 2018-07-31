var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['apple', 'banana', 'strawberry'],
    show: true,
    count: 0,
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    },
    increment: function() {
      this.count += 1
    }
  },
  created: function() {
    console.log('created');
  },
  mounted: function() {
    console.log('mounted');
  }
})
