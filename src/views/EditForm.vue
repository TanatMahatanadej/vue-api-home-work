<template>
    <div id="editCustomers" >
        <label for="id"> id: </label>
        <input type="text" v-model="form.id" id="id"> <br><br>

        <label for="firstname"> firstname: </label>
        <input type="text" v-model="form.firstname" id="firstname"> <br><br>

        <label for="lastname"> lastname: </label>
        <input type="text" v-model="form.lastname" id="lastname"> <br><br>

        <label for="age"> age: </label>
        <input type="number" v-model="form.age" id="age"> <br><br>

        <h1>Id: {{Id}} </h1>
        <h1>Firstname: {{Firstname}} </h1>
        <h1>Lastname: {{Lastname}} </h1>
        <h1>Age: {{Age}} &nbsp;&nbsp;&nbsp;<button @click="goToHome()">กลับสู่หน้าแรก</button> </h1>

        <button  @click="update()"> update </button>
        
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name:'EditForm',
    data () {
        return {
        form: {
            id:null,
            firstname:'',
            lastname:'',
            age:0
        },
        items: [],
        isUpdate: false
        }
    },
    mounted () {
        this.loadData()
    },
    computed: mapState({
      Id: store => store.app.id,
      Firstname: store => store.app.firstname,
      Lastname: store => store.app.lastname,
      Age: store => store.app.age

    }),
    methods: {
    
    goToHome() {
        this.$router.push({name:'Home'})
      },

    async update() {
      try {
        await axios.put(`https://626e3316e58c6fabe2dc8f7d.mockapi.io/customer/${this.form.id}`,this.form)
        alert('update success')
         
        this.loadData()
        this.clearForm()
        
        
        
      } catch (error) {
        console.error('[ERROR]update data',error)
      }
    },
    clearForm () {
      this.form = {
        id: null,
        firstname: '',
        lastname: '',
        age: 0

        
      }
    }
    }
    
}
</script>

<style>
    .editCustomers{
    margin: 20%;
    padding: 5%;
    margin-top: 15%;
    border: 1px solid red;
  }
</style>