<template>
  <div class="doctor">
      <div class="in">
          <input  class="input-doc" placeholder="Qidiruv" type="text">
          <img src="../assets/Vector.png" class="vector" alt="">
      </div>
      <div class="inputs" v-show="yesNo">
        <p class="inputs-p" >Yangi shifokorlarni ro`yhatdan o`tkazish</p>


        <input v-model="name" type="text" class="input" placeholder="Ism-Familya" :class="{'is-valid':$v.name.$error}" >
        <div class="invalid-feedback" v-show="!$v.name.required" >Maydon bo`sh bo`lmasligi kerak!</div>

        <input v-model="mail" type="text" class="input" placeholder="Email" :class="{'is-valid':$v.mail.$error}">
        <div class="invalid-feedback" v-show="!$v.mail.email" >@ dan keyin yozing,masalan: @mail.ru, @gmail.com</div>

        <input v-model="job" type="text" class="input" placeholder="Mutaxassisligi">
        <div class="invalid-feedback" v-show="!$v.job.required" >Maydon bo`sh bo`lmasligi kerak!</div>

        <input v-model="part" type="text" class="input" placeholder="Bo`lim">
        <div class="invalid-feedback" v-show="!$v.part.required" >Maydon bo`sh bo`lmasligi kerak!</div>

        <div class="inputs2">
             <label  for="1">Du</label><input class="val" v-model="week"  id="1" type="checkbox" value="Du">
            <label for="2">Se</label><input class="val" v-model="week" id="2" type="checkbox" value="Se">
            <label for="3">Chor</label><input class="val" v-model="week" id="3" type="checkbox" value="Chor">
            <label for="4">Pay</label><input class="val" v-model="week" id="4" type="checkbox" value="Pay">
            <label for="5">Ju</label><input class="val" v-model="week" id="5" type="checkbox" value="Ju">
            <label for="6">Shan</label><input class="val" v-model="week" id="6" type="checkbox" value="Shan">
        </div>
        <div class="invalid-feedback" v-show="!$v.week.required" >Maydon bo`sh bo`lmasligi kerak!</div>


        <div class="btns">
            <button @click="cancel" class="btn-c">Bekor Qilish</button>
            <button @click="save(saveIndex)" v-show="isSave" class="btn">Saqlash</button>
            <button @click="add" v-show="isDoctor" class="btn">Qo`shish</button>
        </div>
      </div>
      <div class="navbar">
        <h1 class="navbar-h1">Shifokorlar</h1>
        <table border="0" cellspacing="0" width="100%">
          <tr class="navbar-tr">
            <th>N°</th>
            <th>Ism-Familya</th>
            <th>Email</th>
            <th>Mutaxassisligi</th>
            <th>Bo`lim</th>
            <th>Qabul kunlar</th>
            <th>Tahrirlash</th>
          </tr>
          <tr class="navbar-next" v-for="(doctor,index) of doctors" :key="index" >
            <td>{{index+1}}</td>
            <td>{{doctor.name}}</td>
            <td>{{doctor.email}}</td>
            <td>{{doctor.job}}</td>
            <td>{{doctor.part}}</td>
            <td>{{doctor.week.toString()}}</td>
            <td>
              <button class="edit" @click="edit(index)"><img src="../assets/qalam.png" alt=""></button>
              <button class="del" @click="del(doctor.id,index)"><img src="../assets/korzinka.png" alt=""></button>
            </td>
          </tr>
        </table>
      </div>


      <button class="plus"  @click="plus"><img src="../assets/docman.png" alt="a"></button>
  </div>
</template>

<script>
import {required,email} from 'vuelidate/lib/validators'
export default {
  data(){
    return{
      isDoctor:false,
      isSave:false,
      name:'',
      mail:'',
      job:'',
      part:'',
      week:[],
      yesNo:false,
      doctors:[],
      saveIndex:0,
    }
  },
  validations:{
    name:{
      required,
    },
    mail:{
      email,
    },
    job:{
      required,
    },
    part:{
      required,
    },
    week:{
      required,
    }
  },
  methods:{
    plus(){
      this.yesNo = !this.yesNo
      this.isDoctor = true
      this.isSave = false
    },
    add(){
      let doctor = {
        name: this.name,
        mail: this.mail,
        job: this.job,
        part: this.part,
        week: this.week,
      }
      this.$http.post('http://localhost:3000/doctors',doctor)
        .then(response => {return response.json()})
        .then(newDoctor => {this.doctors.push(newDoctor)})
      
      this.name=""
      this.mail=""
      this.job=""
      this.part=""
      this.week=[]
      this.yesNo=false
    },

    cancel(){
      this.yesNo = false
    },
    save(index){
      this.yesNo=false
      
      this.doctors[index].name = this.name 
      this.doctors[index].mail = this.mail 
      this.doctors[index].job = this.job 
      this.doctors[index].part = this.part 
      this.doctors[index].week = this.week 
      this.name=""
      this.mail=""
      this.job=""
      this.part=""
      this.week=[]
    },
    del(id,index){
      this.$http.delete('http://localhost:3000/doctors/'+id)
          this.doctors.splice(index,1);
    },
    edit(index){
      this.yesNo = true
      this.isSave = true
      this.isDoctor = false
      this.name  = this.doctors[index].name 
      this.mail  = this.doctors[index].mail 
      this.job  = this.doctors[index].job 
      this.part = this.doctors[index].part  
      this.week  = this.doctors[index].week 
      this.saveIndex = index
    }
  },
  created(){
    this.$http.get('http://localhost:3000/doctors')
        .then(response => {return response.json()})
        .then(allDoctor => {this.doctors = allDoctor})
  }
}
</script>

<style>

</style>