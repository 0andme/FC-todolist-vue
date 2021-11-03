// TodoListController 
// 기능 : 받아온 리스트 항목 삭제
// 받아온 리스트가 dolist, donelist 일 수 있음
// ClearAll버튼이 눌리면 받아온 리스트 항목의 id를 통해 항목을 삭제

<template>
<!-- 정렬 -->
<!-- 리스트 전부 삭제 -->
<button @click="clearAllListItem">ClearAll</button>
  
</template>
<script>
import {deleteAllTodo} from '~/utils/index'

export default {
  props:{
    controlList:{
      type:Array,
      required : true 
    }
  },
  methods:{
    clearAllListItem(){
      if(this.controlList.length>0)
      { 
        // console.log("test1")
        
        deleteAllTodo(this.controlList)
        .then((msg)=>{
          console.log('end')
        })
      // console.log("test2")
      }
    }
  }
}
</script>
