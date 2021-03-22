<template>
<div class="load-home">
  <div class="load-header">
    <div class="load-header-left">
      <img src="../assets/23.55.13.png" alt="">
    </div>
    <div class="load-header-right">
      <h1>Share With Driver</h1>
    </div>
  </div>
  <div class="load-main">
    <div class="load-main-img">
      <img src="../assets/IMG_5126.png" alt="">
    </div>
  </div>
  <div class="load-footer">
      <img src="../assets/23.55.14.png" alt="">
  </div>
</div>

</template>

<style>
.load-home {
  background-color: #5E9B84;
  width: 100%;
  height: 825px;
}

.load-header {
  display: flex;
  justify-content: space-between;
  height: 250px;
}

.load-header-left {
  width: 50%;
}

.load-header-left img {
  width: 100%;
  height: 300px;
}

.load-header-right {
  margin:20px 30px 0 0;
  width: 50%;
}

.load-header-right h1 {
  font-size: 50px;
  text-align: right;
  color: #DE8042;
}

.load-main {
  height: 275px;
}

.load-main-img {
  text-align: center;
  height: 320px;
}

.load-main-img img {
  width: 500px;
  height: auto;
}

.load-footer {
  width: 50%;
  height: 150px;
  float: right;
}

.load-footer img {
  width: 100%;
  height: 300px;
}

@media screen and (max-width: 479px) {
  .load-home {
    width: 100%;
    height: 770px;
    background-color: #5E9B84;
  }

  .load-header-left {
    width: 100%;
  }

  .load-header-right {
    display: none;
  }

  .load-main-img img {
  width: 300px;
  height: auto;
}

.load-footer {
  width: 100%;
  height: 150px;
  float: right;
}
}

</style>