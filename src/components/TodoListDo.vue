// TodoListDo 
// do 리스트를 구성
// - 타이틀 요소
// - ul li 리스트 요소
  
<template>
<!-- Todo 제목부분-->
<div class="listBox do">
  <p class="listBox__Title">Todo</p>
  <ul class="listBox__list scroll">
    <li v-for="todo in this.$store.getters['tododata/doList']" :key="todo.id">
        <TodoListItem :isCheck="false" :item="todo"/>
    </li>
  </ul>
  <div class="emptyMsg" v-if='this.$store.getters["tododata/doList"].length<1'>
      <span>오늘 하루 준비 완료</span>
      <img src="/images/sunglasses.png" alt="😎">
  </div>
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

