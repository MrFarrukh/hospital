<template>
  <div class="home">
    <div class="h-inputs">
        <div class="head">
            <div class="in">
              <input  class="h-input" placeholder="Qidiruv" type="text">
              <img src="../assets/Vector.png" class="vector" alt="">
            </div>
            <div class="h-notif">
              <img class="zvonok" src="../assets/zvonok.png" alt="">
              <img class="man" src="../assets/man.png" alt="">
            </div>
      </div>
  </div>
  <div class="blocks">
        <div class="row">
          <div class="block">
            <div class="block-img">
              <img src="../assets/medicine.png" alt="">
            </div>
            <div class="block-text">
              <h4>Hodimlar</h4>
              <p>217</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/bemor.png" alt="">
            </div>
            <div class="block-text">
              <h4>Bemorlar</h4>
              <p>217</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/nur.png" alt="">
            </div>
            <div class="block-text">
              <h4>Xonalar</h4>
              <p>217</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/bank.png" alt="">
            </div>
            <div class="block-text">
              <h4>Budjet</h4>
              <p>217</p>
            </div>
          </div>
        </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>
<style  scoped>
   
   @font-face {
    font-family: 'lato';
    src: url(../fonts/Lato-Regular.ttf);
}

body,*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
}
  .right{
    width: 100%;
    padding: 0px 36px;
}
 
.head {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
}
.h-input {
    width: 300px;
    height: 33px;
    border-radius: 20px;
    padding-left: 40px;
    border: 0;
}
.h-input:focus {
    outline: 0;
}
  .notif {
    margin-right: 36px;
  }
 
  .zvonok {
    margin-bottom: 8px;
    margin-right: 11px;
  }
  .vector {
    margin-left: -286px;
  }
  .block {
    width: 272px;
    height: 88px;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
  }
  .block-img img {
    padding: 26px 28px 0px 30px;
  }
 
  .block-text p {
    margin-top: 4px;
    font-family: 'lato';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #336CFB;
  }
 
  .block-text h4 {
    font-weight: normal;
    margin-top: 22px;
    font-family: 'lato';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #25282B;
  }
  .row{
      display: flex;
      justify-content: space-between;
  }
</style>