<template>
  <div>
    <div v-if="!isShowSlide" class="fixed w-full min-h-full h-screen overflow-auto top-0 left-0 z-20 cursor-pointer bg-white1">
      <div class="flex w-full justify-center cursor-pointer mt-5">
        <img class="mx-5 w-6 h-6" @click="$emit('closeInfo')" src="~/static/img/info/close_btn.png" alt="close_btn">
      </div>
      <div class="w-full mx-auto flex flex-col items-center mt-5">
        <img src="~/static/img/info/kieng_nhua_la_cai_chi.png" title="kieng nhua la cai chi" alt="kieng_nhua_la_cai_chi">
        <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 px-4 !normal-case tracking-tighter leading-5">
          Có thể bạn đã quen thuộc với những vật phẩm nhựa dùng một lần phổ biến nhất. Nhưng bạn có biết mức ảnh hưởng môi trường môi trường của chúng không?</p>
        <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 px-4 !normal-case tracking-tighter leading-5">
          Website Kiêng Nhựa hy vọng có thể giúp bạn dễ dàng tra cứu mức độ ảnh hưởng môi trường của từng món đồ quen dùng, từ đó đề xuất những biện pháp giảm 
          thiểu, tái sử dụng và thay thế bằng các sản phẩm thân thiện môi trường hơn. Bảng tra cứu đưa ra mức độ ảnh hưởng môi trường theo <strong>điểm từ 0 tới
            10</strong>, trong
          đó <strong>0 điểm</strong> là những
          lựa chọn có tác động tiêu cực ít nhất, và <strong>10 điểm</strong> có tác động
          <strong>tiêu
            cực nhiều nhất</strong>.
        </p>
        <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 px-4">Bảng tra cứu này dựa trên báo cáo nghiên cứu
           <strong>The Futouris - “Single-Use Plastic Guidance 2021”</strong>. Tham khảo
          <a class=" underline font-bold" href="https://www.oneplanetnetwork.org/sites/default/files/from-crm/Futouris%2520Plastic%2520Guide_compressed.pdf">tại đây.</a>
        </p>
        <img class="honDao" src="~/static/img/hon_dao.png">
        <div class="w-full flex flex-col items-center justify-center gap-2 mt-3 mb-5 px-4">
          <button class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain" @click="showSlide()">
            <span class="text-blue1 tracking-wide font-livic-bold normal-case font-bold">
              HƯỚNG DẪN "KIÊNG NHỰA"</span></button>
          <button class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain" @click="showSlide()">
            <span class="text-blue1 tracking-wide font-livic-bold normal-case font-bold">
              TRÍCH NGUỒN NGHIÊN CỨU</span></button>
        </div>
      </div>
    </div>
    <div v-else
      class="fixed w-full min-h-full top-0 left-0 z-20 cursor-pointer bg-blue1 bg-no-repeat bg-cover bg-center">
      <div class="fixed top-7 flex justify-between w-full px-3 z-20">
        <img @click="toggleMenu(true)" class="h-4 w-6 cursor-pointer" src="~/static/img/1x/back_to_home_black.png"
          alt="back_to_home">
        <img @click="$emit('closeInfo')" class="h-6 w-6 cursor-pointer" src="~/static/img/info/info_black.png"
          alt="info_close">
      </div>
      <Menu v-if="!!openMenu" @closeMenu="toggleMenu(false)" />
      <h3 class="font-livic-bold text-2xl text-center text-cyan1 mt-16">Bước {{ this.step }}</h3>
      <swiper class="info-swiper-custom" :slides-per-view="1" :pagination="true" :space-between="50" @slideChange="onSlideChange" :navigation="true">
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step1.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step2.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step3.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step4.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step5.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step6.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step7.png">
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg border border-slate-300" src="~/static/img/huongdan/step8.png">
        </swiper-slide>
      </swiper>
      <p class="mt-3 font-livic text-white1 text-center text-sm mx-3 leading-5" v-html="this.stepDescription"></p>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import DescriptionForSteps from "./DescriptionForSteps.json";
import Menu from '../../components/reusable/Menu.vue'

SwiperCore.use([Navigation, Pagination]);
export default {
  name: 'Info',
  components: {
    Swiper,
    SwiperSlide,
    Menu,
  },
  watch: {
    step(newValue) {
      this.stepDescription = DescriptionForSteps[newValue - 1];
    }
  },
  data() {
    return {
      isShowSlide: false,
      step: 1,
      stepDescription: DescriptionForSteps[0],
      openMenu: false
    }
  },
  methods: {
    showSlide() {
      this.isShowSlide = true;
    },
    onSlideChange(swiper) {
      console.log(swiper.realIndex, this.currentSlideIndex, '--index')
      this.step = swiper.realIndex + 1;
    },
    toggleMenu(value) {
      this.openMenu = !!value
    }
  }
}
</script>

<style scoped>
.bg-info {
  background-image: url('~/static/img/info/info_bg.png');
  /* background-image: url('~/static/img/info/info_bg.png'); */
}

.previewImg {
  width: 60%;
  margin-left: 20%;
  margin-top: 5%;
  margin-bottom: 10%;
}

</style>
