<template>
  <div class="inputTodoItem">
    <!-- 입력창 -->
    <input
      type="text"
      placeholder="Add your new Todo"
      v-model="newTodoItemTitle"
      @keyup.enter="addTodoItem"/>
    <!-- add 버튼-->
    <button @click="addTodoItem" class="inputBtn">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
import {createTodoItem}from "~/utils/createTodoItem"

export default {
  props:{
    todoNum:{
      type:Number,
      required : true 
    }
  },
  data(){
    return{
      newTodoItemTitle:''
    }
  },
  methods:{
    addTodoItem(){
      // 공백이 아닐 때
      if(this.newTodoItemTitle!=='') 
      {
        createTodoItem(this.newTodoItemTitle,this.todoNum)
          .then(()=>{
            location.reload();
          })
        this.newTodoItemTitle="" //입력값 초기화
      }
      //입력받은 값이 공백일때

    }
  }
  
}
</script>
<style lang="scss" scoped>

</style>