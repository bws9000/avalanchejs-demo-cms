<template>
  <div class="loading_small"/>
</template>
<style scoped>
.loading_small {
  font-size: 0.5rem;
  border: .4em solid black;
  border-top-color: rgba(255,255,255,.5);
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: loading-spinner 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  box-sizing: border-box;
}
@keyframes loading-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
