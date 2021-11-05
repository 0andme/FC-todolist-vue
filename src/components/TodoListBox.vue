// TodoListBox
// 구성
// -입력 요소
// -리스트 요소
// -컨트롤 버튼 요소
<template>

<div class="listBoxWrap">
  <TodoListDo /> 
  <TodoListDone/> 
</div>
  <TodoListController/>
</template>

<script>
import TodoListDo from "~/components/TodoListDo"
import TodoListDone from "~/components/TodoListDone"
import TodoItemInput from '~/components/TodoItemInput'
import TodoListController from '~/components/TodoListController'

export default {
  components:{
    TodoListDo,
    TodoListDone,
    TodoItemInput,
    TodoListController
  }
}
</script>