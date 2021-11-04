// TodoListController 
// 기능 : 받아온 리스트 항목 삭제
// 받아온 리스트가 dolist, donelist 일 수 있음
// ClearAll버튼이 눌리면 받아온 리스트 항목의 id를 통해 항목을 삭제

<template>
<!-- 정렬 기능 미구현-->
<!-- 리스트 전부 삭제 -->
<div class="controlBox">
<button class="clearBtn" @click="clearAllListItem">ClearAll</button>

</div>


  
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
          // location.reload()
          // 위의 코드가 비동기로 잘 작동되지 않아
          // 새로고침 버튼을 화면에 추가 했는데 
          // 동작이 안 되는 이유를 알고 싶어요

        })
      // console.log("test2")
      }
    }
  }
}
</script>
