<template>
  <div class="loading mt-6">
    <div class="circle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  text-align: center !important;
}
.loading .circle {
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
  text-align: center;
}
.loading .circle div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  border: 0.3rem solid #fff;
  border-radius: 50%;
  animation: circle 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #48c78e transparent transparent transparent;
}
.loading .circle div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading .circle div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading .circle div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
