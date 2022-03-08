import dayjs from "dayjs"
import 'dayjs/locale/ko'
import {getTodo,postTodo,delTodo,putTodo} from '~/utils/index'
export default{
  namespaced:true,
  state:()=>({
    todoList:[]
  }),
  getters:{
    doList(state){
      return state.todoList.filter(todo=>todo.done===false)
    },
    doneList(state){
      return state.todoList.filter(todo=>todo.done===true)
    },
    updateTime:(state)=>(id)=>{
      // - 항목의 속성을 사용하려고 했는데 실제 날짜랑 안 맞는 부분이 있어
      // const todo= state.todoList.find(todo=>todo.id===id)
      // return todo.updatedAt.slice(0,10)
      // - 업데이트 부분만 dayjs를 사용
      dayjs.locale('ko')
      return dayjs().format('YYYY-MM-DD')
      
    },
    delayTime:(state)=>(id)=>{
      //- 시간 차를 구하는 부분이라 dayjs를 사용하지 않고
      //- 항목의 속성값을 이용하는 방향으로 결정 
      //- 투두 리스트니까 1일 이상이면 전부 동일 처리함
      const todo= state.todoList.find(todo=>todo.id===id)
      const day=parseInt(todo.updatedAt.slice(8,10))-parseInt(todo.createdAt.slice(8,10))
      const hour=parseInt(todo.updatedAt.slice(11,13))-parseInt(todo.createdAt.slice(11,13))
      const min=parseInt(todo.updatedAt.slice(14,16))-parseInt(todo.createdAt.slice(14,16))
      const time=day*1440+hour*60+min
      if(time<60)
      {
        return `${time}분`
      }
      else if(time<1440){
        return `${parseInt(time/60)}시간${parseInt(time%60)}분`
      }  
      else{
        return '1일 이상'
      }
    }

  },
  mutations:{ // state를 직접 변경하는 함수만 쓸 것
    reloadData(state,todos){ // 데이터 다시 가져오기
      state.todoList=[...todos]
      
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
    },
    delAllData(state){
      state.todoList=[]

    }
    
  },
  actions:{ //비동기로 처리된다

    //- TODO 항목 가져오기
    async getTodoList({commit}) {
      getTodo().then(data=>{commit('reloadData',data)})
      
    },
    //- TODO항목 추가
    async createTodoItem({commit},payload) {
      const {title,order}=payload

      postTodo(title,order).then((data)=>{commit('addData',data)})
    },
    //- TODO항목 수정 
    async editTodoItem({commit},payload) {
      // payload=todo
      putTodo(payload).then((data)=>{commit('editData',data)  }) 
    },
    //- 삭제
    async deleteTodo({commit},payload) {   
      // payload=todoId
      delTodo(payload).then(()=>{commit('delData',payload)})
        
    },
    //- 전부 삭제
    async deleteAllTodo({state,commit,dispatch}){
      // 비동기함수를 여러 차례에 걸쳐 부르니까 화면상에 항목들이 지워지는 게 아주 천천히 나타남
      // 하나가 지워져야 화면에 하나 사라지고..
      state.todoList.map((todo)=>dispatch('deleteTodo',todo.id))

    }

  }

}