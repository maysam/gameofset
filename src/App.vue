<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld v-bind:msg=score />
    <ul id="example-1" v-for="item in cards" :key="item.id">
      <Card
        v-bind:id="item.id"
        v-bind:msg="item.message"
        v-bind:color="item.color"
        v-bind:picture="item.picture"
        v-bind:type="item.border"
        v-bind:selected="item.selected"
      />
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    HelloWorld,
    Card,
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
    score() {
      return "Your score is " + this.$store.state.score;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
