// TodoListController 
// - 버튼 요소
// - 클릭 이벤트 발생시 todo항목 전부 제거 

<template>
<!-- 정렬 기능 미구현-->
<!-- 리스트 전부 삭제 -->
<div class="controlBox">
<button class="clearBtn" @click="clearAllListItem">ClearAll</button>
</div>
</template>
<script>

export default {
  methods:{
    clearAllListItem(){
      this.$store.dispatch('tododata/deleteAllTodo')


    }
  }
  
  

}
</script>
