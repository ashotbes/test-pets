<script setup>

</script>

<template>
  <button>
    <slot></slot>
  </button>

</template>

<style scoped lang="scss">

.arrow__left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 19px;
  border: 2px solid #F1CDB3;
  border-radius: 100px;
  height: 52px;
  width: 52px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  left: 0px;
  top: 50%;
  position: absolute;
}


</style>