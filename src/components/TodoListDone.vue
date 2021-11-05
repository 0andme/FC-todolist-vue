// TodoListDone
// done리스트를 구성
// - 타이틀 요소
// - ul li 리스트 요소

<template>
<!-- done 제목부분-->
<div class="listBox done">
  <p class="listBox__Title">Done</p>
  <!-- todo List -->
  <ul class="listBox__list scroll">
    <li class="listBox__listItem" v-for="todo in this.$store.getters['tododata/doneList']" :key="todo.id">
      <TodoListItem :isCheck="true" :item="todo"/>
    </li>
  </ul>
</div>


</template>
<script>
import TodoListItem from '~/components/TodoListItem'

export default {
  components:{
    TodoListItem
  }
}
</script>

