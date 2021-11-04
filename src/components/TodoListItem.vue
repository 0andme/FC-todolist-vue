<template>
<label v-if="!isEditMode">
  <input type="checkbox"  class="listItem__checkBox" :checked="isCheck" @change="todochecked(todo)">
  <span class="listItem__content" >{{todo.title}}</span>
</label>
<!-- 수정 삭제 버튼 -->
<button class="listItem__btn edit" v-if="!isEditMode" @click="isEditMode=true">
  <i class="fas fa-pen"></i>
</button>
<button class="listItem__btn delete" v-if="!isEditMode" @click="delTodoItem(todo.id)">
  <i class="fas fa-trash-alt"></i>
</button>
<!-- 수정 입력 컴포넌트 -->
  <TodoListEdit v-if="isEditMode" :todo="todo" @cancelEditMode="cancelEditMode"/>

</template>

<script>
import {deleteTodo,putTodo }from "~/utils/index"
import TodoListEdit from '~/components/TodoListEdit.vue'

export default {
  components:{
    TodoListEdit
  },
  props:{
    isCheck:{
      type:Boolean,
      required:true
      
    },
    todo:{
      type:Object,
      required : true 
      
    }
  },
  data(){
    return{
      isEditMode:false
      
    }
  },
  methods:{
    todochecked(todo){
      todo.done=!todo.done
      putTodo(todo)
        .then(()=>{
              location.reload();
            })  
      
    },
    delTodoItem(todoId){
      deleteTodo(todoId)
        .then(()=>{
              location.reload();
            })
    },
    cancelEditMode(state){
      this.isEditMode=state
    }
  }
  
}
</script>
