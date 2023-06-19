<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__title-block">
        <p class="header__title">
          <a href="/" class="header__title">Cozy House</a>
        </p>
        <p class="header__subtitle">Shelter for pets in Boston</p>
      </div>
      <div class="btn__wrapper" @click="isMenuOpen = !isMenuOpen">
        <div class="bg__bnt"></div>
        <div class="bg__bnt"></div>
        <div class="bg__bnt"></div>
      </div>

      <div class="burger__menu" v-if="isMenuOpen">

        <span class="header__title" style="margin-top: 30px">Cozy House </span>
        <span class="header__subtitle">Shelter for pets in Boston</span>
        <ul v-if="isMenuOpen" class="burger__header__list">
          <a href="#about" @click="scrollToAnchor('#about')" class="burger__header__list-link"> About the shelter</a>
          <router-link to="/petsList" class="burger__header__list-link">Our pets</router-link>
          <a href="#shelter" @click="scrollToAnchor('#shelter')" class="burger__header__list-link">Help the
            shelter</a>
          <a href="#contact" @click="scrollToAnchor('#contact')" class="burger__header__list-link">Contacts</a>
        </ul>
      </div>


      <ul class="header__list">
        <li><a href="#about" @click="scrollToAnchor('#about')" class="header__list-link"> About the shelter</a></li>
        <router-link to="/petsList" class="header__list-link">Our pets</router-link>
        <li><a href="#shelter" @click="scrollToAnchor('#shelter')" class="header__list-link">Help the shelter</a></li>
        <li><a href="#contact" @click="scrollToAnchor('#contact')" class="header__list-link">Contacts</a></li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import VueScrollTo from 'vue-scrollto';
import {ref} from 'vue';

const isMenuOpen = ref(false);

const scrollToAnchor = (anchor) => {
  VueScrollTo.scrollTo(anchor, 2500);
}


import PetsList from "@/views/PetsList.vue";


defineExpose({
  PetsList
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/header';
</style>


