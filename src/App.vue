<template>
<!-- 헤더 -->
<TodoHeader/>

<div class="todoBox">
  <TodoItemInput />
  <TodoListBox/>
</div>

<!-- footer -->
</template>

<script>
import TodoListBox from '~/components/TodoListBox'
import TodoItemInput from '~/components/TodoItemInput'
import TodoHeader from '~/components/TodoHeader'

export default {
  components:{
    TodoListBox,
    TodoHeader,
    TodoItemInput
  },
  created(){
    this.$store.dispatch('tododata/getTodoList')
  }
}
</script>
