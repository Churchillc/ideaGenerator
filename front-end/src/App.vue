<template>
<div id="app">
  <div class="header">

    <div class="title">
      <router-link to="/">
        <h1>Website Idea Generator</h1>
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">

    <a href="https://github.com/BYUCS260/museum-Churchillc">GitHub</a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #2F3061;
  color: #F7FFF7;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

a:link {
  text-decoration: none;
  color: #F7FFF7;
}
/* visited link */
a:visited {
  color: #F7FFF7;
}

/* mouse over link */

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #343434;
  font-size: 12px;
}

.footer a {
  color: white;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
