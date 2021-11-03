// TodoListBox로부터 받아온 doneList길이만큼 TodoListItem컴포넌트 생성

<template>
<!-- done 제목부분-->
<p>Done</p>
<!-- todo List -->
<ul class="doneList">
  <li class="doneList__item" v-for="(todo,index) in doneList" :key="todo.id">
    <TodoListItem :isCheck="true" :todo="doneList[index]"/>
  </li>
</ul>


</template>
<script>
import TodoListItem from '~/components/TodoListItem'



export default {
  components:{
    TodoListItem
  },
  props:{
    doneList:{
      type:Array
    }
  },
  data(){
    return {
      todo:{}
    }
  }
  
  
}
</script>


<style lang="scss" scoped>

</style>