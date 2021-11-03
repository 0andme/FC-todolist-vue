// 새로운 todo아이템을 만들기 위한 TodoInput 컴포넌트 연결
// TodoListBox로부터 받아온 doList길이만큼 TodoListItem컴포넌트 생성

<template>
<!-- Todo 제목부분-->
<p>Todo</p>
<!-- input부분 -->
<TodoItemInput :todoNum="doList.length"/>
<!-- todo List -->
<ul class="doList">
  <li class="doList__item" v-for="(todo,index) in doList" :key="todo.id">
    <TodoListItem :isCheck="false" :todo="doList[index]"/>
  </li>
</ul>


</template>
<script>
import TodoItemInput from '~/components/TodoItemInput'
import TodoListItem from '~/components/TodoListItem'



export default {
  components:{
    TodoItemInput,
    TodoListItem
  },
  props:{
    doList:{
      type:Array
    }
  },
  data(){
    return {
      todo:{}
    }
  }
  
  
}
</script>


<style lang="scss" scoped>

</style>