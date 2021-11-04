<template>
<!-- 수정을 위한 입력과 버튼 -->
<!-- Extraneous non-emits event listeners warning 해결을 위한 div-->
<div class="editBox"> 
  <input
  type="text"
  placeholder="Edit Todo"
  v-model="editTodoTitle"
  @keyup.enter="editTodoItem"/>
  <button class="listItem__btn edited"  @click="editedItem" >
    <i class="fas fa-check"></i>
  </button>
  <button class="listItem__btn cancel" @click="this.$emit('cancelEditMode',false)">
    <i class="fas fa-times"></i>
  </button>
</div>
</template>
<script>
import {putTodo} from '~/utils/putTodo'

export default {
  props:{
    todo:{
      type:Object,
      required : true 
      
    }
  },
  data(){
    return{
      editTodoTitle:'',
      editedTodo:{title:''}
    }
  },
  created(){
    this.editedTodo={...this.todo}
    this.editTodoTitle=this.todo.title 
  },

  methods:{
    editedItem(){
      this.editedTodo.title=this.editTodoTitle
      putTodo(this.editedTodo)
        .then(()=>{
              location.reload();
            })      
    }

  }
  
}
</script>
