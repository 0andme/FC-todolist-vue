<template>
<!-- 헤더 -->

<div class="todoBox">
  <TodoItemInput />
  <TodoListBox/>
</div>

<!-- footer -->
</template>

<script>
import TodoListBox from '~/components/TodoListBox'
import TodoItemInput from '~/components/TodoItemInput'

export default {
  components:{
    TodoListBox
  },
  created(){
    this.$store.dispatch('tododata/getTodoList')
  }
}
</script>
