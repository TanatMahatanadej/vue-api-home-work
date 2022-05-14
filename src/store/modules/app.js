const state = () => ({
    id: '',
    firstname: '',
    lastname: '',
    age: ''

})

const mutations = {
    SET_ID(state,loadid) {
        state.id = loadid
    },
    SET_FIRSTNAME(state,loadfirstname) {
        state.firstname = loadfirstname
    },
    SET_LASTNAME(state,loadlastname) {
        state.lastname = loadlastname
    },
    SET_AGE(state,loadage) {
        state.age = loadage
    }




}

const actions = {
    setId ({commit},loadid) { 
        commit('SET_ID', loadid)
    },
    setFirstname ({commit},loadfirstname) { 
        commit('SET_FIRSTNAME', loadfirstname)
    },
    setLastname ({commit},loadlastname) { 
        commit('SET_LASTNAME', loadlastname)
    },
    setAge ({commit},loadage) { 
        commit('SET_AGE', loadage) 
    },
    
}

const getters = {

    Id: (state) => state.id ,
    Firstname: (state) => state.firstname , 
    Lastname: (state) => state.lastname,
    Age: (state) => state.age




}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}