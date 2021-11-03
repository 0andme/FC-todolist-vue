<template>
<!-- 수정을 위한 입력과 버튼 -->
<!-- Extraneous non-emits event listeners warning 해결을 위한 div-->
<div> 
  <input
  type="text"
  placeholder="Edit Todo"
  v-model="editTodoTitle"
  @keyup.enter="editTodoItem"/>
  <button class="doList__btn--edit"  @click="editedItem" >완료</button>
  <button class="doList__btn--edit" @click="this.$emit('cancelEditMode',false)">취소</button>
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
<style lang="scss" scoped>

</style>