// TodoListDo 
// do리스트를 구성
// - TodoItemInput 항목 추가 기능 
// - TodoListController 항목 컨트롤 기능
// - TodoListItem 항목 아이템 
  

<template>
<!-- Todo 제목부분-->
<div class="listBox do">
  <p class="listBox__Title">Todo</p>
  <!-- input부분 -->
  <!-- <TodoItemInput /> -->
  <!-- controller 부분 -->
  <!-- <TodoListController :controlList="doList"/> -->
  <!-- todo List -->
  <ul class="listBox__list">
    <li class="listBox__listItem" v-for="todo in this.$store.getters['tododata/doList']" :key="todo.id">
      <TodoListItem :isCheck="false" :item="todo"/>
    </li>
  </ul>
</div>


</template>
<script>
import TodoListItem from '~/components/TodoListItem'
import TodoListController from '~/components/TodoListController'

export default {
  components:{
    TodoListItem,
    TodoListController
  }
}
</script>

