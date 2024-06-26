<template>
  <div class="category">
    <div id="container">
      <p style="float: left">Categories</p>
      <span id="create-category"> O</span>

    </div>
  </div>
</template>

<style scoped>
.category{
  position: relative;
  width: 100;
  height: 100px;
  margin: 25px;
  border: 3px solid white;
  background-color: green;
}

#container{
  position: inherit;
  top : 50%;
  margin-top: -25px;
  padding: 15px;
}

#create-category{
  float: right
}

</style>
