<template>
<div class="home">
<div class="main">
  <div class="spacer"></div>
  <h2>{{part1}} {{part2}} {{part3}}</h2>
  <div class="spacer"></div>
  <div class="center">
    <button class="button" @click="generate">Generate Ideas</button>
  </div>
  <div class="center">
    <button v-if="notsaved" class="save-button" @click="uploadSaved">Save to My Ideas</button>
  </div>

  <div class="spacer"></div>

  <div class="center">
    <router-link to="/saved" class="router-box">My Ideas</router-link>
    <div class="whitespace"></div>
    <router-link to="/admin" class="router-box">Add to generator</router-link>
  </div>

</div>

</div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
  return {
   items: [],
   part1: "",
   part2: "",
   part3: "",
   notsaved: true,
  }
},
created() {
   this.getItems();
 },
 methods: {
  async getItems() {
    try {
      let response = await axios.get("/api/items");
      this.items = response.data;
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  generate(){
    var length = this.items.length - 1;
    var min = Math.ceil(0);
    var max = Math.floor(length);
    var index1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var index2 = Math.floor(Math.random() * (max - min + 1)) + min;
    var index3 = Math.floor(Math.random() * (max - min + 1)) + min;
    this.part1 = this.items[index1].part1;
    this.part2 = this.items[index2].part2;
    this.part3 = this.items[index3].part3;
    console.log("Generate!");
    this.notsaved = true;
  },
  async uploadSaved() {
    this.notsaved = false;
    console.log("uploadSaved called from home");
  try {
    await axios.post('/api/saved', {
      savedString: this.part1 + " " + this.part2 + " " + this.part3,
    });
  } catch (error) {
    error;
  }
},
},
}
</script>

<style scoped>


/*F7FFF7 - white
  343434 - grey
  2F3061 - dark blue
  FFE66D - yellow
  6CA6C1 - light blue*/


h2 {
  font-size: 20px;
}

body{
  background-color: #F7FFF7;
}

.spacer{
  height: 70px;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.button{
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: #2F3061;
  border-width: 0px;
  color: #F7FFF7;
}

.button:hover{
  width: 210px;
  height: 55px;
}

.save-button:hover{
  width: 210px;
  height: 35px;
}

.save-button{
  width: 200px;
  height: 30px;
  font-size: 20px;
  background-color: #6CA6C1;
  color: #F7FFF7;
  border-width: 0px;
}

.whitespace{
  width: 20px;
}

a:link {
  text-decoration: none;
  color: #343434;
}

/* visited link */
a:visited {
  color: #343434;
}

/* mouse over link */
a:hover {
  color: hotpink;
}


h3 {
  font-style: italic;
  font-size: 15px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.home{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main{
  display: block;
  columns: 1;
}


@media only screen and (min-width: 1024px) {
  .image-gallery {

  }
}


@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {

  }
}


@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {

  }
}
</style>
