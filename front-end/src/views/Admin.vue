<template>
  <div class="admin">
  <h1>Idea Creation</h1>
  <div class="heading">
    <div class="circle">+</div>
    <h2>Create a new item</h2>
  </div>
  <div class="add">
    <div class="form">
      <input v-model="part1" placeholder="Enter part 1">
      <input v-model="part2" placeholder="Enter part 2">
      <input v-model="part3" placeholder="Enter part 3">
      <p><em>Note that parts will be shuffled to generate random ideas</em></p>
      <button @click="upload">Add to database</button>
    </div>
    <div class="upload" v-if="addItem">
      <h2>{{addItem.title}}</h2>
      <img :src="addItem.path" />
    </div>
  </div>
  <div class="heading">
    <div class="circle">-</div>
    <h2>Edit/Delete items in database</h2>
  </div>
  <div class="edit">
    <div class="form">
      <input v-model="findTitle" placeholder="Search">
      <div class="suggestions" v-if="suggestions.length > 0">
        <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.part1}} {{s.part2}} {{s.part3}}
        </div>
      </div>
    </div>
    <div class="upload" v-if="findItem">
      <input v-model="findItem.part1">
      <input v-model="findItem.part2">
      <input v-model="findItem.part3">
      <p></p>
      <img :src="findItem.path" />
    </div>
    <div class="actions" v-if="findItem">
      <button @click="deleteItem(findItem)">Delete</button>
      <button @click="editItem(findItem)">Save</button>
    </div>
  </div>



</div>
</template>


<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #2F3061;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 100%;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

</style>



<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
  return {
    items: [],
    findTitle: "",
    findItem: null,
    part1: "",
    part2: "",
    part3: "",
    file: null,
    addItem: null,
  }
},
computed: {
  suggestions() {
    let items = this.items.filter(item => item.part1.toLowerCase().startsWith(this.findTitle.toLowerCase()));
    return items.sort((a, b) => a.part1 > b.part1);
  }
},

created() {
  this.getItems();
},
methods: {
  fileChanged(event) {
    this.file = event.target.files[0]
  },
  async upload() {
    console.log("upload admin");
  try {
  //  const formData = new FormData();
  //  formData.append('photo', this.file, this.file.name)
  //  let r1 = await axios.post('/api/photos', formData);
    let r2 = await axios.post('/api/items', {
      part1: this.part1,
    //  path: r1.data.path,
      part2: this.part2,
      part3: this.part3,
    });
    this.addItem = r2.data;
  } catch (error) {
    error;
  }
},
async getItems() {
  try {
    let response = await axios.get("/api/items");
    this.items = response.data;
    return true;
  } catch (error) {
    error;
  }
},
selectItem(item) {
  this.findTitle = "";
  this.findItem = item;
},
async deleteItem(item) {
  try {
    await axios.delete("/api/items/" + item._id);
    this.findItem = null;
    this.getItems();
    return true;
  } catch (error) {
    error;
  }
},
async editItem(item) {
  try {
    await axios.put("/api/items/" + item._id, {
      part1: this.findItem.part1,
      part2: this.findItem.part2,
      part3: this.findItem.part3,
    });
    this.findItem = null;
    this.getItems();
    return true;
  } catch (error) {
    error;
  }
},

}
}
</script>
