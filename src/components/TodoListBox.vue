// TodoListBox
// getTodoList 함수로 받아온 리스트 항목을
// 항목의 done속성을 이용하여 두개의 리스트로 필터링
// 리스트를 각각 TodoListDo,TodoListDone 컴포넌트로 보냄
<template>

<TodoItemInput />
<div class="listBoxWrap">
  <TodoListDo /> 
 <TodoListDone/> 
</div>
<!-- 페이지 새로고침 버튼 -->
<!-- <button class="reloadBtn" @click="reload">
  <i class="fas fa-redo-alt"></i>
</button> -->
</template>

<script>
import TodoListDo from "~/components/TodoListDo"
import TodoListDone from "~/components/TodoListDone"
import TodoItemInput from '~/components/TodoItemInput'

export default {
  components:{
    TodoItemInput,
    TodoListDo,
    TodoListDone
  }
}
</script>