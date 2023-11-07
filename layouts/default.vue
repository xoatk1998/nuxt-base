<template>
  <main class="max-w-full mx-auto bg-black-200 min-h-screen flex flex-col relative">
    <div v-if="!isDesktop">
      <div class="fixed top-7 flex justify-between w-full z-20 px-5 max-w-screen">
        <img @click="toggleMenu(true)" class="h-4 w-6 cursor-pointer" src="~/static/img/1x/back_to_home.png"
          alt="back_to_home">
        <img @click="toggleInfo(true)" class="h-6 w-6 cursor-pointer" src="~/static/img/info/info.png" alt="info">
      </div>
      <Info v-if="!!openInfo" @closeInfo="toggleInfo(false)" />
      <Menu v-if="!!openMenu" @closeMenu="toggleMenu(false)"></Menu>
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </div>
    <div v-else class="flex flex-row p-10 bg-white1 min-h-screen">
      <div class="logo-container">
        <div class="h-16 w-16 absolute"><img class="w-full h-auto" alt="home-logo" src="~/static/img/1x/home_logo.png">
        </div>
        <img class="mx-5 earth-img" src="~/static/img/earth_in_home.png">
      </div>
      <div class="text-blue1 content-container">
        <p class="font-livic-bold text-3xl mb-5">GIẢM "ĐIỂM NHỰA"<br />TĂNG ĐIỂM XANH</p>
        <p class="content-detail font-livic mb-5">Mọi vật phẩm bạn cầm tay trong chuyến du lịch của mình đều ảnh hưởng ít
          nhiều
          tới môi trường xung quanh. Hãy cùng
          đo “mức hại” của nhựa dùng một lần cho hành lý của bạn và chuẩn bị cho|một chuyến đi gắn kết với thiên nhiên
          nhé.
        </p>
        <!-- <youtube class="youtube-container" :video-id="videoId" @ready="ready" @playing="playing">
        </youtube> -->
        <iframe class="youtube-container"
          src="https://www.youtube.com/embed/xZifi9FI_w0?si=qndE39Pk6hLKOLYv" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <!-- <div class="youtube-container">
      </div> -->
        <div class="flex flex-rows mt-5">
          <img class="qr-image mr-5" src="~/static/img/qr_image.png">
          <p class="font-livic-bold text-xl text-scan tracking-wide">SCAN QR CODE<br />ĐỂ BẮT ĐẦU<br />HÀNH
            TRÌNH<br />"KIÊNG NHỰA"</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import feather from "feather-icons";
import BackToTop from "../components/BackToTop.vue";
import Info from '../components/reusable/Info.vue'
import Menu from '../components/reusable/Menu.vue'
export default {
  data: () => {
    return {
      openInfo: false,
      openMenu: false,
      isDesktop: false
    };
  },
  created() {
    this.isDesktop = this.checkIsDesktop(this.$nuxt.context);
  },
  mounted() {
    feather.replace();
  },
  methods: {
    checkIsDesktop(context) {
      if (process.server) {
        // Server-side rendering
        const userAgent = context.req.headers['user-agent'];
        return !/mobile/i.test(userAgent);
      } else {
        // Client-side rendering
        return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      }
    },
    toggleInfo(value) {
      this.openInfo = !!value
    },
    toggleMenu(value) {
      this.openMenu = !!value
    }
  },
  components: { BackToTop, Info, Menu },
};
</script>

<style>
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.max-w-screen {
  max-width: 100vw;
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

.font-livic-bold {
  font-family: 'LivvicBold';
}

.font-phu-du {
  font-family: 'LivvicRegular';
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

.logo-container {
  flex-basis: 58%;
}

.content-container {
  flex-basis: 52%;
}

.earth-img {
  max-width: 93%;
  max-height: 95%;
}

.bg-white1 {
  background-color: #FDFAF3;
}

.content-detail {
  width: 83%;
}

.qr-image {
  height: 100px;
  padding-top: 7px;
}

.text-scan {
  line-height: 1.6rem;
}
.youtube-container {
  width: 83% !important;
  height: 300px !important;
}
</style>
