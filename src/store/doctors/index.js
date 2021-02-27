import axios from 'axios'
Vue.use(axios)

export default{
    state:{
        doctors:[],
    },
    actions:{
        doctors(context){
            axios.get('http://localhost:3000/doctors')
                .then(response => {
                   context.commit('allDoctors',response)
                })
        },
        addDoctor(context,payload){
            axios.post('http://localhost:3000/doctors',payload)
              .then(response =>{
                  context.commit('pushDoctor',response)
              })
        }
    },
    mutations:{
        allDoctors(state,payload){
            state.doctors = payload
        },
        pushDoctor(state,payload){
            state.doctors.push = payload
        }
    },
    getters:{
        getAllDoctors(state){
            return state.doctors
        }
    }
}