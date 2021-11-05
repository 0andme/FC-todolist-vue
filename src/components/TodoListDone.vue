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
    <li v-for="todo in this.$store.getters['tododata/doneList']" :key="todo.id">
      <TodoListItem :isCheck="true" :item="todo"/>
    </li>
  </ul>
  <span class="emptyMsg" v-if='this.$store.getters["tododata/doneList"].length<1'>오늘 뭐했지?🤔</span>

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

