<template>
<!-- 헤더 -->
<TodoHeader/>

<Loader v-if='!fetched'/>
<div v-else class="todoBox">
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
    mounted(){
      this.$store.dispatch('tododata/getTodoList').then(()=>{
      //로딩 애니메이션이 너무 빨리 사라져서 딜레이 줌
      setTimeout(()=>{this.fetched=true},500)
      
    })
  }
}
</script>
