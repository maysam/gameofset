<template>
  <div class="container" :class="{isSelected: selected}" v-on:click="toggle(id)">
    <div class="card" :class="[type, color]">
      <ul id="example-1" v-for="item in msg" :key="item.id">
        <span class="bigger">{{ picture }}</span>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    id: Number,
    msg: Number,
    picture: String,
    color: String,
    type: String,
    selected: Boolean,
  },
  methods: {
    ...mapActions(["toggle"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.yellow {
  color: green;
}

.dashed {
  border: thick dashed;
}

.solid {
  border: thick solid;
}

.dotted {
  border: thick dotted;
}

.card {
  background-color: whitesmoke;
  margin: 5px;
  padding: 5px;
  width: 250px;
  float: left;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.isSelected {
  border-style: double;
  margin: 3px !important;
}

.container {
  background-color: rgb(248, 229, 229);
  display: flex;
  float: left;
  margin: 6px;
}

.bigger {
  font-size: xx-large;
  font-weight: bolder;
  float: left;
}
</style>
