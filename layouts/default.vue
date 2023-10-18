<template>
  <main class="max-w-full mx-auto bg-black-200 min-h-screen flex flex-col relative">
    <div class="fixed top-7 flex justify-between w-full z-20 px-5">
      <img @click="toggleMenu(true)" class="h-4 w-6 cursor-pointer" src="~/static/img/1x/back_to_home.png"
        alt="back_to_home">
      <img @click="toggleInfo(true)" class="h-6 w-6 cursor-pointer" src="~/static/img/info/info.png"
        alt="info">
    </div>
    <Info v-if="!!openInfo" @closeInfo="toggleInfo(false)" />
    <Menu v-if="!!openMenu" @closeMenu="toggleMenu(false)" ></Menu>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </main>
  <!-- <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <div
      class="
        flex
        space-x-2
        mr-8
        mb-6
        right-0
        bottom-0
        z-50
        fixed
        items-center
        sm:space-x-4
      "
    >
      <BackToTop />
    </div>
  </div> -->
</template>

<script>
import feather from "feather-icons";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";
import Info from '../components/reusable/Info.vue'
import Menu from '../components/reusable/Menu.vue'
export default {
  data: () => {
    return {
      openInfo: false,
      openMenu: false
    };
  },
  mounted() {
    feather.replace();
  },
  methods: {
    toggleInfo(value) {
      this.openInfo = !!value
    },
    toggleMenu(value) {
      this.openMenu = !!value
    }
  },
  components: { AppFooter, BackToTop, AppHeader,  Info, Menu, },
};
</script>

<style>
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

.font-livic {
  font-family: 'LivvicRegular';
}

.font-phu-du {
  font-family: 'phudu';
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
