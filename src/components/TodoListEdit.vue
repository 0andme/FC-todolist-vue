<template>
<!-- 수정을 위한 입력과 버튼 -->
<!-- Extraneous non-emits event listeners warning 해결을 위한 div-->
<div class="editBox"> 
  <input
  type="text"
  :placeholder="placeholder"
  v-model="editTodoTitle"
  @keyup.enter="editedItem"/>
  <button class="listItem__btn edited"  @click="editedItem" >
    <i class="fas fa-check"></i>
  </button>
  <button class="listItem__btn cancel" @click="this.$emit('cancelEditMode',false)">
    <i class="fas fa-times"></i>
  </button>
</div>
</template>
<script>

export default {
  props:{
    item:{
      type:Object,
      required : true 
      
    }
  },
  data(){
    return{
      editTodoTitle:'',
      placeholder:'Edit Todo'
    }
  },

  methods:{
    editedItem(){
      if(this.editTodoTitle.length>0){
        this.item.title=this.editTodoTitle
        this.$store.dispatch('tododata/editTodoItem',this.item)
        this.$emit('cancelEditMode',false)

      }
      else{
        this.placeholder='1자 이상 입력 필수'

      }
      

    }

  }
  
}
</script>
