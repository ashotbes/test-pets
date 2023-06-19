<template>
  <div v-if="show" class="modal">
    <button class="close" @click="$emit('close')">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
        <path
            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
      </svg>
    </button>
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

</script>


<style scoped lang="scss">
@import "@/assets/styles/includes";

li::marker {
  color: #F1CDB3;
}

.modal {

  z-index: 45445;
  position: absolute;
  background: #FAFAFA;
  border-radius: 9px;
  max-width: 900px;
  display: flex;

  // .modal__img
  &__img {
    margin-right: 30px;
  }

  // .modal__info
  &__info {

    @include mobile-large{
      max-width: 240px;
    }
  }
}


.pet {
  // .pet__name
  &__name {
    font-size: 35px;
    line-height: 130%;
    letter-spacing: 0.06em;
    color: #000000;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  // .pet__type
  &__type {
    font-size: 20px;
    line-height: 115%;
    letter-spacing: 0.06em;
    color: #000000;
    margin-bottom: 40px;
  }

  // .pet__description
  &__description {
    font-weight: 400;
    font-size: 15px;
    line-height: 110%;
    letter-spacing: 0.06em;
    color: #000000;
    margin-bottom: 40px;
    margin-right: 20px;
  }

  // .pet__list
  &__list {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
}


.close {
  border: 2px solid #F1CDB3;
  border-radius: 100px;
  width: 52px;
  height: 52px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: -36px;
  top: -50px;

}

.close svg {
  width: 12px;
  height: 12px;
}

</style>