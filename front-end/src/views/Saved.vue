<template>
<div class="home">
<div class="main">
<h1>My Saved Ideas</h1>
<div class="savedString" v-for="product in products" :key="product.id">
</div>

</div>
</template>

<script>
export default {
  props: {
    products: this.$root.$data.savedIdeas,
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
