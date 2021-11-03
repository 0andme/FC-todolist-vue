<template>
<!-- 수정을 위한 입력과 버튼 -->
<input
  type="text"
  placeholder="Edit Todo"
  v-model="editTodoTitle"
  @keyup.enter="editTodoItem"/>
<button class="doList__btn--edit"  @click="editedItem" >완료</button>
<button class="doList__btn--edit" @click="$emit('isEditMode',false)">취소</button>
  
</template>
<script>
import {putTodo} from '~/utils/putTodo'

export default {
  props:{
    isEditMode:{
      type:Boolean,
      required : true 

    },
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
<style lang="scss" scoped>

</style>