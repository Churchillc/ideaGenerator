<template>
<div class="home">
<div class="main">
<h1>My Saved Ideas</h1>
<div class="idea" v-for="idea in ideas" :key="idea.id">
  <p>{{idea.savedString}}</p>
  <button class="button" @click="deleteIdea(idea)">X</button>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
  return {
   ideas: [],
  }
},
created() {
   this.getIdeas();
 },
  methods: {
   async getIdeas() {
     try {
       let response = await axios.get("/api/saved");
       this.ideas = response.data;
       return true;
     } catch (error) {
       console.log(error);
     }
   },
   async deleteIdea(idea){
     console.log("in delete idea");
     try {
       await axios.delete("/api/saved/" + idea._id);
       this.getIdeas();
       return true;
     } catch (error) {
       error;
     }
   }
 }
}

</script>

<style scoped>


/*F7FFF7 - white
  343434 - grey
  2F3061 - dark blue
  FFE66D - yellow
  6CA6C1 - light blue*/
.idea{
  display: flex;
  align-items: center;
  justify-content:space-between;
}

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
  width: 25px;
  height: 25px;
  font-size: 10px;
  background-color: #343434;
  border-width: 0px;
  color: #F7FFF7;
}

.button:hover{
  width: 30px;
  height: 30px;
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
