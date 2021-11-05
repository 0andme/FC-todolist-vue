<template>
  <div class="inputTodoItem">
    <!-- 입력창 -->
    <input
      type="text"
      :placeholder=placeholder
      v-model="newTodoItemTitle"
      @keyup.enter="addTodoItem"/>
    <!-- add 버튼-->
    <button @click="addTodoItem" class="inputBtn">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      newTodoItemTitle:'',
      placeholder:"Add your new Todo"
    }
  },
  methods:{
    addTodoItem(){
      if(this.newTodoItemTitle.length>0){
        const order=this.$store.state.tododata.todoList.length
        const title=this.newTodoItemTitle
      
        this.$store.dispatch('tododata/createTodoItem',{title,order})
        this.newTodoItemTitle=''
      }
      else{this.placeholder="1자 이상 입력 필수"}

  
  }
  
  }
}
</script>
