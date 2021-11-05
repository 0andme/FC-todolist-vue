<template>
<!-- 헤더 -->
<TodoHeader/>

<div class="todoBox">
  <TodoItemInput />
  <TodoListBox/>
</div>

<!-- footer -->
<TodoFooter/>
</template>

<script>
import TodoListBox from '~/components/TodoListBox'
import TodoItemInput from '~/components/TodoItemInput'
import TodoHeader from '~/components/TodoHeader'
import TodoFooter from '~/components/TodoFooter'

export default {
  components:{
    TodoListBox,
    TodoHeader,
    TodoItemInput,
    TodoFooter
  },
  created(){
    this.$store.dispatch('tododata/getTodoList')
  }
}
</script>
