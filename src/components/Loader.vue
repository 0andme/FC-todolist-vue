<template>
  <div class="loader">
    <div class="loader__item"></div>
  </div>
</template>
<style lang="scss" scoped>
.loader{
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50;
  transform: translate(25%,25%);
  display: flex;
  justify-content: center;
.loader__item {
  $loaderSize: 80px;
  width: $loaderSize;
  height: $loaderSize;
  left: 50%;

  margin-top: calc(-#{$loaderSize}/2);
  margin-left: calc(-#{$loaderSize}/2);

  z-index: 1;
  border-width: 20px;
  border-style: solid;
  border-color: #f03e3e;
  border-radius: 50%;
  border-top-color: transparent;

  animation: loading-spin .8s linear infinite;

}

@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
}
</style>
