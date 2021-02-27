<template>
  <div>
      <h1>Shifokorlar</h1>
      <table>
          <tr>
              <th>N</th>
              <th>Ism-Familya</th>
              <th>Email</th>
              <th>Mutaxassisligi</th>
              <th>Bo`lim</th>
              <th>Qabul kunlari</th>
          </tr>
          <tr v-for="(doctor,index) of doctors" :key="index">
              <td>{{index+1}}</td>
              <td>{{doctor.name}}</td>
              <td>{{doctor.mail}}</td>
              <td>{{doctor.spec}}</td>
              <td>{{doctor.dep}}</td>
              <td>{{doctor.date}}</td>
              <td><button>edit</button><button>delete</button></td>
          </tr>
      </table>
      <div class="card" v-show="isDoctor">
          <p>Yangi shifokorlarni ro`yhatga qo`shish</p>
          <input type="text" placeholder="Ism-familya" v-model="doc.name">
          <input type="text" placeholder="Email" v-model="doc.mail" >
          <input type="text" placeholder="Mutaxassisligi" v-model="doc.spec" >
          <input type="text" placeholder="Bo`lim" v-model="doc.dep" >
          <div class="days">
              <label for="1">Du</label>
              <input type="checkbox" id="1" v-model="doc.date">
              <label for="2">Se</label>
              <input type="checkbox" id="2" v-model="doc.date">
              <label for="3">Chor</label>
              <input type="checkbox" id="3" v-model="doc.date">
              <label for="4">Pay</label>
              <input type="checkbox" id="4" v-model="doc.date">
              <label for="5">Ju</label>
              <input type="checkbox" id="5" v-model="doc.date">
              <label for="6">Shan</label>
              <input type="checkbox" id="6" v-model="doc.date">
          </div>
          <button>Bekor qilish</button>
          <button @click="add">Qo`shish</button>
      </div>
      <button @click="isDoctor=!isDoctor">+</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isDoctor:false,
            doc:{
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:''
            }
        }
    },
    methods:{
        add(){
            this.$store.dispatch('addDoctor',this.doc)
            this.doc = {
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:''
            }
        }
    },
    computed:{
        doctors(){
            return this.$store.getters.getAllDoctors
        }
    }
}
</script>

<style>

</style>