// TodoListBox
// 구성
// -입력 요소
// -리스트 요소
// -컨트롤 버튼 요소
<template>
<!--  -->
<TodoItemInput />

<div class="listBoxWrap">
  <TodoListDo /> 
  <TodoListDone/> 
</div>

  <TodoListController :controlList="doList"/>
</template>

<script>
import TodoListDo from "~/components/TodoListDo"
import TodoListDone from "~/components/TodoListDone"
import TodoItemInput from '~/components/TodoItemInput'
import TodoListController from '~/components/TodoListController'

export default {
  components:{
    TodoItemInput,
    TodoListDo,
    TodoListDone,
    TodoListController
  }
}
</script>