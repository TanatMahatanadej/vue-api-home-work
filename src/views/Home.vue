<template>
    <div id="home">
        <table id="customers">
            <tr>
                <th> id </th>
                <th> firstname </th>
                <th> lastname </th>
                <th> age</th>
                <th> <button @click="create()">create</button> </th>
            </tr>
            <tr v-for="(item,i) in items" :key="i">
        
                <td>{{item.id}}</td>
                <td>{{item.firstname}}</td>
                <td>{{item.lastname}}</td>
                <td>{{item.age}}</td>
                <td>
                    <button @click="setEdit(item)">edit</button>
                    <button @click="deleteData(item.id)">delete</button>
                </td>
            </tr>
    </table>
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'

export default {
    name:'Home' ,
    data () {
        return {
            form: {
                id: null,
                firstname: '',
                lastname: '',
                age: 0
            },
            items: []
        }
    },
    mounted () {
        this.loadData()
    },
    computed: {
        ...mapGetters({
        id: 'app/Id',
        firstname: 'app/Firstname',
        lastname: 'app/Lastname',
        age: 'app/Age'
        })
    },
    methods: {
        async loadData () {
            try {
                const response = await axios.get('https://626e3316e58c6fabe2dc8f7d.mockapi.io/customer')
                this.items = response.data
            } catch (error) {
                console.error('[ERROR] get data',error)
            }
        },
        ...mapActions({
        setId: 'app/setId',
        setFirstname: 'app/setFirstname',
        setLastname: 'app/setLastname',
        setAge: 'app/setAge'

       }),
      
        setEdit(item) {
        this.form.id = item.id
        this.form.firstname = item.firstname
        this.form.lastname = item.lastname
        this.form.age = item.age

        


        //this.store.app.id = item.id
        this.setId(this.form.id) 

        //store.app.firstname = item.firstname
        this.setFirstname(this.form.firstname)

        //store.app.lastname = item.lastname
        this.setLastname(this.form.lastname)


        //store.app.age = item.age
        this.setAge(this.form.age)
        
       
        
       
        

            this.$router.push({ name: 'EditForm'})
            //ไปหน้าถัดไป
            //ต้องใช้ Vuex ดู pagerouterhomework
            //
        },
        async deleteData(id) {
            try {
                await axios.delete(`https://626e3316e58c6fabe2dc8f7d.mockapi.io/customer/${id}`) 
                this.loadData()
                alert('delete success')
            } catch (error) {
                console.error('[ERROR] delete data',error)
            }
        }

    }

}
</script>

<style scoped>

.form__card {
    width: 200px;
    padding: 16px;
    border: 1px solid black;
    margin-bottom: 16px;
}


  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>