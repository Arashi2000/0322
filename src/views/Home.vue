<template>
<div class="home">
  <div class="header">
    <h1>ようこそ</h1>
    <h2>Share With Driverへ</h2>
  </div>
  <div class="main">
    <section class="left">
      <div class="call-left">
      <h1>近くの人と話す</h1>
      <div class="button-left">
        <a @click="transition()" href="#" class="btn btn-flat">
          <span>通話開始</span></a>
      </div>
      <p class="caution-left">※位置情報から近くの人と通話を開始します。</p>
      </div>
    </section>
    <section class="right">
      <div class="call-right">
      <h1>遠くの人と話す</h1>
      <div class="button-right">
        <a @click="transition()" href="#" class="btn btn-flat"><span>通話開始</span></a>
      </div>
      <p class="caution-right">※位置情報から遠くの人と通話を開始します。</p>
      </div>
    </section>
  </div>
  <div>
    <button class="idButton" @click="createId"></button>
    <p>あなたのID：{{ randomId }}</p>
  </div>
</div>

</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

/*デスクトップ対応*/
.home {
  margin: 0 auto;
  height: 817px;
  background-color: #5E9B84;
}
.header h1,
.header h2 {
  font-size: 70px;
  text-align: center;
  color: #DE8042;
  font-family: 'Yusei Magic', sans-serif;
  border-color: #57404D;
}

.header h1 {
  padding-top: 30px;
}

.header h2 {
  margin: 20px 0 30px 0;
}

.main {
  display: flex;
  justify-content: space-around;
}

.left,
.right {
  margin-top: 30px;
  width: 600px;
  height: 500px;
  border-radius: 30px;
  background-color: #fff;
}

.call-left,
.call-right {
  vertical-align: middle;
}

.call-left h1,
.call-right h1 {
  font-size: 50px;
  text-align: center;
  margin-top: 15px;
}

.call-left h1 {
  color: #F05E59;
}

.call-right h1 {
  color: #ECAF1F;
}

.button-left,
.button-right {
  margin-top: 50px;
  text-align: center;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}

.btn,
a.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

a.btn-flat {
  overflow: hidden;
  padding: 1.5rem 6rem;
  color: #000;
  background: #DE8042;
  border-radius: 30px;
}

a.btn-flat span {
  position: relative;
    font-size: 60px;
    line-height: 250px;
}

a.btn-flat:before {
  position: absolute;
  top: 0;
  left: 0;

  width: 100px;
  height: 100px;

  content: '';
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-80%) translateY(-25px);
  transform: translateX(-80%) translateY(-25px);

  border-radius: 50%;
  background: #ecaf1f;
}

a.btn-flat:hover:before {
  width: 400px;
  height: 400px;

  -webkit-transform: translateX(-1%) translateY(-175px);

  transform: translateX(-1%) translateY(-175px);
}

.caution-left,
.caution-right {
    font-size: 26px;
    text-align: center;
    color: #000;
    padding-top: 20px;
}

.idButton {
  width: 100px;
  height: 10px;
}

/*スマホ対応*/
@media screen and (max-width: 479px) {
.home {
  width: 100%;
  height: 815px;
  background-color: #5E9B84;
}

  .header h1,
  .header h2 {
    font-size: 40px;
  }

  .header h1 {
    padding-top: 20px;
  }

  .header h2 {
    margin-bottom: 30px;
  }

  .main {
    display: block;
  }

  .left,
  .right {
    display: block;
    margin: 0 auto;
    width: 350px;
    height: 300px;
    margin-bottom: 25px;
    border-radius: 50px;
  }

  .call-left h1,
  .call-right h1 {
    padding-top: 15px;
    text-align: center;
    font-size: 40px;
  }

  .button-left,
  .button-right {
    margin-top: 30px;
    text-align: center;
  }

  .button-left a,
  .button-right a {
    width: 130px;
    height: 80px;
    border-radius: 50px;
  }

  .button-left span,
  .button-right span {
    font-size: 60px;
    line-height: 100px;
    white-space: nowrap;
  }

  .caution-left,
  .caution-right {
    padding: 20px 20px;
    padding-bottom: 10px;
    margin: 0 auto;
    color: #000;
    font-size: 26px;
    text-align: center;
  }


}
</style>

<script>
export default {
  data() {
    return {
      randomId: ""
    };
  },
  methods: {
    transition() {
      this.$router.push({ name: "Load" });
    },
    createId() {
      this.randomId = Math.random();
      console.log( this.randomId );
    }
  }
}
</script>