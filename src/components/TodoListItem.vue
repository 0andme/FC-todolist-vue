<template>
<label v-if="!isEditMode">
  <input type="checkbox"  class="listItem__checkBox" :checked="isCheck" @change="todochecked()">
  <span class="listItem__content" >{{item.title}}</span>
</label>
<!-- 수정 버튼 -->
<button class="listItem__btn edit" v-if="!isEditMode" @click="isEditMode=true">
  <i class="fas fa-pen"></i>
</button>
<!-- 삭제 버튼 -->
<button class="listItem__btn delete" v-if="!isEditMode" @click="delTodoItem">
  <i class="fas fa-trash-alt"></i>
</button>
<!-- 수정 입력 컴포넌트 -->
  <TodoListEdit v-if="isEditMode" :item="item" @cancelEditMode="cancelEditMode"/>

</template>

<script>
import TodoListEdit from '~/components/TodoListEdit.vue'

export default {
  components:{
    TodoListEdit
  },
  props:{
    isCheck:{
      type:Boolean,
      required:true
      
    },
    item:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      isEditMode:false
      
    }
  },
  methods:{
    todochecked(){
      this.item.done=!this.item.done
      this.$store.dispatch('tododata/editTodoItem',this.item)



    },
    delTodoItem(){
      console.log('밖',this.item.id)

      this.$store.dispatch('tododata/deleteTodo',this.item.id)

      
    },
    cancelEditMode(state){
      this.isEditMode=state
    }
  }
  
}
</script>
