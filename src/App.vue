<template>
<!-- 헤더 -->
<TodoHeader/>
<Loader v-if='!fetched'/>
<div v-if='fetched' class="todoBox">
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
import Loader from '~/components/Loader'

export default {
  components:{
    TodoListBox,
    TodoHeader,
    TodoItemInput,
    TodoFooter,
    Loader
  },
  data(){
    return {
      fetched:false
    }
  },
  created(){
    this.$store.dispatch('tododata/getTodoList').then(()=>{
      this.fetched=true
    })
  }
}
</script>
