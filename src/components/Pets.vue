<template>
  <div class="pets">
    <div class="pets__title">
      Our friends who <br>
      are looking for a house
    </div>
    <div class="container">
      <swiper
          :breakpoints="{
        '320':{
          slidesPerView: 1,
          spaceBetween: 100,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 120,
          },
        '768': {
          slidesPerView: 2,
          spaceBetween: 90,
          },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 90,
          },
          }"
          :slides-per-view="3"
          :space-between="90"
          :loop="true"
          :modules="modules"
          class="swiper-wrapper"
          @swiper="onSwiper"
      >
        <swiper-slide v-for="content in slides" :key="content.id">
          <Card>
            <img :src="content.image" alt="">
            <p>{{ content.name }}</p>
            <Button class="unfilled" @click="openModal(content)">Learn more</Button>
          </Card>
        </swiper-slide>
        <SwiperBtn class="arrow__left arrow" @click="slider.slidePrev()"> ⬅</SwiperBtn>
        <SwiperBtn class="arrow__right arrow" @click="slider.slideNext()"> ➡</SwiperBtn>
      </swiper>
      <div v-if="showModal" class="backdrop"></div>
      <Modal v-if="showModal" @close="closeModal" class="modal" :show="showModal">
        <img :src="selectedPet.image" alt="" style="height: 500px; width: 500px">
        <div class="modal__info">
          <div class="pet__name">{{ selectedPet.name }}</div>
          <div class="pet__type">{{ selectedPet.type }}</div>
          <div class="pet__description">{{ selectedPet.description }}</div>
          <ul class="pet__list">
            <li class="paragraph_s"><strong>Age:</strong> 2 months</li>
            <li class="paragraph_s"><strong>Inoculations:</strong> none</li>
            <li class="paragraph_s"><strong>Diseases:</strong> none</li>
            <li class="paragraph_s"><strong>Parasites:</strong> none</li>
          </ul>
        </div>
      </Modal>
    </div>
    <Button class="filled" style="width: 261px; margin-top: 85px; margin-bottom: 100px">Get to know the rest</Button>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import {Pagination, Navigation} from 'swiper';
import Card from "@/ui/Card.vue";
import Button from "@/ui/Button.vue";
import SwiperBtn from "@/ui/SwiperBtn.vue";
import {onMounted, ref} from 'vue';
import Modal from "@/ui/Modal.vue";

import slide1 from '@/images/pets/pets-katrine.png';
import slide2 from '@/images/pets/woddy.png';
import slide3 from '@/images/pets/jennifer.png';
import slide4 from '@/images/pets/sophia.png';
import slide5 from '@/images/pets/timmy.png';
import slide6 from '@/images/pets/charlie.png';
import slide7 from '@/images/pets/freddie.png';
import slide8 from '@/images/pets/scarlet.png';

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

const modules = [Pagination, Navigation];
const slider = ref(null);
const selectedPet = ref(null);
const showModal = ref(false);

const onSwiper = (swiper) => {
  slider.value = swiper;
};

const openModal = (pet) => {
  selectedPet.value = pet;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const swiperOptions = {
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
};

</script>

<style scoped lang="scss">
@import "@/assets/styles/pets";

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
