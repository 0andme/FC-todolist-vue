import axios from "axios"

export default{
  namespaced:true,
  state:()=>({
    todoList:[],
    // doList:[],
    // doneList:[],
  }),
  getters:{
    doList(state){
      return state.todoList.filter(todo=>todo.done===false)
    },
    doneList(state){
      return state.todoList.filter(todo=>todo.done===true)
    }

  },
  mutations:{ // state를 직접 변경하는 함수만 쓸 것
    reloadData(state,todos){ // 데이터 다시 가져오기
      state.todoList=[...todos]
      //state.doList= state.todoList.filter(todo=>todo.done===false)
      //state.doneList= state.todoList.filter(todo=>todo.done===true)
      
    },
    addData(state,newtodo){
      state.todoList.push(newtodo)
    },
    delData(state,todoId){
      const delIndex = state.todoList.findIndex((todo)=>todo.id===todoId)
      state.todoList.splice(delIndex,1) 
      
    },
    editData(state,todo){
      const {id} = todo

      const replaceIndex = state.todoList.findIndex((todo)=>todo.id===id)
      state.todoList.splice(replaceIndex,1,todo) 




    }
    
  },
  actions:{ //비동기로 처리된다

    //- TODO 항목 가져오기
    async getTodoList({commit}) {
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110', //process.env.API_KEY,
          'username':'YouYoungMi'  //process.env.USER_NAME
        }
      })
      commit('reloadData',data)
    },
    //- TODO항목 추가
    async createTodoItem({commit},payload) {
      const {title,order}=payload

      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110', //process.env.API_KEY,
          'username': 'YouYoungMi' //process.env.USER_NAME
        },
        data: {
          title,
          order
        }
      })
      commit('addData',data)  
    },
    //- TODO항목 수정 
    async editTodoItem({commit},payload) {
      const {id,title,done,order}=payload
      const { data } = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110', //process.env.API_KEY,
          'username': 'YouYoungMi' //process.env.USER_NAME
        },
        data: {
          title,
          done,
          order
        }
      })

      commit('editData',data)  
    },
    //- 삭제
    async deleteTodo({commit},payload) {   
      const todoId=payload 
      await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110', //process.env.API_KEY,
          'username': 'YouYoungMi' //process.env.USER_NAME
        }
      })
      commit('delData',todoId)  
    },
    async deleteAllTodo({state,commit,dispatch}){
      state.todoList.map((todo)=>dispatch('deleteTodo',todo.id))
    }

  }

}