// TodoListDone
// do리스트를 구성
// - TodoItemInput 항목 추가 기능 
// - TodoListController 항목 컨트롤 기능
// - TodoListItem 항목 아이템 

<template>
<!-- done 제목부분-->
<p>Done</p>
<!-- controller 부분 -->
<TodoListController :controlList="doneList"/>
<!-- todo List -->
<ul class="doneList">
  <li class="doneList__item" v-for="(todo,index) in doneList" :key="todo.id">
    <TodoListItem :isCheck="true" :todo="doneList[index]"/>
  </li>
</ul>


</template>
<script>
import TodoListItem from '~/components/TodoListItem'
import TodoListController from '~/components/TodoListController'



export default {
  components:{
    TodoListItem,
    TodoListController
  },
  props:{
    doneList:{
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