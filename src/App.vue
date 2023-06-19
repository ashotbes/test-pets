<!--<script setup>-->
<!--import Button from "@/ui/Button.vue";-->
<!--import Card from "@/ui/Card.vue";-->
<!--import Modal from "@/ui/Modal.vue";-->
<!--import Header from "@/components/Header.vue";-->
<!--import Main from "@/components/Main.vue";-->
<!--import About from "@/views/About.vue";-->
<!--import Pets from "@/components/Pets.vue";-->
<!--import SwiperBtn from "@/ui/SwiperBtn.vue";-->
<!--import Shelter from "@/components/Shelter.vue";-->
<!--import Donation from "@/components/Donation.vue";-->
<!--import Footer from "@/components/Footer.vue";-->
<!--import PetsList from "@/views/PetsList.vue";-->

<!--</script>-->

<!--<template>-->
<!--  <div id="app">-->
<!--    <Header/>-->
<!--    <router-view/>-->
<!--    <Main/>-->
<!--    <About/>-->
<!--    <Pets/>-->
<!--    <Shelter/>-->
<!--    <Donation/>-->
<!--    <Footer/>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/styles/includes';-->


<!--</style>-->

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import Header from "@/components/Header.vue";
import PetsList from "@/views/PetsList.vue";

const showPetsList = ref(false);
const router = useRouter();

const handlePetsClick = () => {
  showPetsList.value = true;
  router.push('/pets');
}
</script>

<template>
  <div id="app">
    <router-view name="header" />
    <router-view/>
    <router-view name="main" />
    <router-view name="about" />
    <router-view name="pets" />
    <router-view name="shelter" />
    <router-view name="donation" />
    <router-view name="footer" />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/includes';
</style>