<script setup>

import Card from "@/ui/Card.vue";
import Button from "@/ui/Button.vue";
import {SwiperSlide} from "swiper/vue";
import slide1 from "@/images/pets/pets-katrine.png";
import slide2 from "@/images/pets/woddy.png";
import slide3 from "@/images/pets/jennifer.png";
import slide4 from "@/images/pets/sophia.png";
import slide5 from "@/images/pets/timmy.png";
import slide6 from "@/images/pets/charlie.png";
import slide7 from "@/images/pets/freddie.png";
import slide8 from "@/images/pets/scarlet.png";
import Header from "@/components/Header.vue";

const slides = [
  {
    image: slide1,
    id: 1,
    name: 'Katrine',
    type: 'Cat - British Shorthair',
    description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.'
  },
  {
    image: slide2,
    id: 2,
    name: 'Jennifer',
    type: 'Dog - Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.'
  },
  {
    image: slide3,
    id: 3,
    name: 'Woody',
    type: 'Dog - Golden Retriever',
    description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.'
  },
  {
    image: slide4,
    id: 4,
    name: 'Sophia',
    type: 'Dog - Shih tzu',
    description: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.'
  },
  {
    image: slide5,
    id: 5,
    name: 'Charly',
    type: 'Cat - British Shorthair ',
    description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.'
  },
  {
    image: slide6,
    id: 6,
    name: 'Freddie',
    type: 'Dog',
    description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.'
  },
  {
    image: slide7,
    id: 7,
    name: 'Scarlett',
    type: 'Cat',
    description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.'
  },
  {
    image: slide8,
    id: 8,
    name: 'Timmy',
    type: 'Cat - British Shorthair',
    description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.'
  },
];

</script>

<template>
  <div class="pets__list">
    <header class="header">
      <div class="header__title-block">
        <p class="header__title">
          <a href="/" class="header__title">Cozy House</a>
        </p>
        <p class="header__subtitle">Shelter for pets in Boston</p>
      </div>
      <ul class="header__list">
        <router-link to="/about" class="header__list-link"> About the shelter</router-link>
        <router-link to="/petsList" class="header__list-link">Our pets</router-link>
        <router-link to="/shelter" class="header__list-link">Help the shelter</router-link>
        <router-link to="/contact" class="header__list-link">Contacts</router-link>
      </ul>
    </header>

    <div class="pets__title ">
      Our friends who <br>
      are looking for a house
    </div>
    <div class="container__pets-list">
      <div v-for="content in slides" :key="content.id">
        <Card style="background: #FAFAFA">
          <img :src="content.image" alt="">
          <p>{{ content.name }}</p>
          <Button class="unfilled">Learn more</Button>
        </Card>
      </div>
    </div>
    <div class="buttons">
      <button class="left__arrow_btn">&lt&lt</button>
      <button class="left__arrow_btn">&lt</button>
      <button class="first">1</button>
      <button class="right__arrow_btn"> >></button>
      <button class="right__arrow_btn"> ></button>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/pets";
@import "@/assets/styles/pets__list";
@import "@/assets/styles/header";

.header__title {
  color: #545454;
}

.header__subtitle {
  color: #292929;
}

.header__list-link {
  color: #545454;

}
</style>