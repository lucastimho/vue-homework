/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Hangover", "Crazy Rich Asians", "Rush Hour"],
      newMovie: "",
    };
  },
  methods: {
    createMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
  },
});
