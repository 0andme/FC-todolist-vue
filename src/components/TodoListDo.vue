// TodoListDo 
// do리스트를 구성
// - TodoItemInput 항목 추가 기능 
// - TodoListController 항목 컨트롤 기능
// - TodoListItem 항목 아이템 
  

<template>
<!-- Todo 제목부분-->
<p>Todo</p>
<!-- input부분 -->
<TodoItemInput :todoNum="doList.length"/>
<!-- controller 부분 -->
<TodoListController :controlList="doList"/>
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
import TodoListController from '~/components/TodoListController'



export default {
  components:{
    TodoItemInput,
    TodoListItem,
    TodoListController
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