<template>
<!-- 정렬 -->
<!-- 리스트 전부 삭제 -->
<button @click="clearAllListItem">ClearAll</button>
  
</template>
<script>
import {deleteTodo} from '~/utils/deleteTodo'

export default {
  props:{
    controlList:{
      type:Array,
      required : true 
    }
  },
  methods:{
    clearAllListItem(){
      
      console.log(this.controlList)
      this.controlList.map(todo=>deleteTodo(todo.id).then(()=>{location.reload();}))
      // location.reload();
          

    }
  }
  
}
</script>
