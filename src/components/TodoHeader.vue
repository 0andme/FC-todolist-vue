//TodoHeader
// 헤더 부분을 구성

<template>
<header>
  <p>TODO</p>
  <div class="times">
   <div>{{month}}</div>
   <div>{{day}}</div>
   <div>{{week}}</div>
 </div>
</header>

<!-- <p style="color: #fff; text-shadow: 4px -6px 0 #32cddb, -4px 6px 0 #fb50b3; font-size: 60px; font-weight: bold;">TODO</p> -->
<!-- <p style="color: #fff; text-shadow: 5px 5px 0 #F00, 10px 10px 0 #0F0, 15px 15px 0 #00F; font-size: 60px; font-weight: bold;">TODO</p> -->
  
</template>

<script>
import dayjs from "dayjs";

export default {
  data(){
    return{ 
      month:1,
      day:1,
      week:''
    }
  },
  created(){
    const time = dayjs()
    this.month=time.get('month')+1
    this.day=time.get('day')
    this.week=time.set('d',time.get('d')).format('dddd').toUpperCase()
    this.month=this.month>=10?this.month+'/': '0'+this.month+'/'
    this.day=this.day>=10?this.day+'/': '0'+this.day+'/'

    

  }
  
}
</script>
