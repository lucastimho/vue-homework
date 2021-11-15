// index.js
/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Hangover", "Crazy Rich Asians", "Rush Hour"],
      newMovie: "",
    };
  },
  created: function () {
    this.indexActors();
  },
  methods: {
    createMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
    indexActors: function () {
      axios.get("http://localhost:3000/api/actors").then(function (response) {
        var actors = response.data;
        console.log(actors);
      });
    },
  },
});
