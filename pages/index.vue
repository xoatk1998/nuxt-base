<script>
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { Button },
};
</script>

<template>
  <div class="flex flex-col items-center font-phu-du">
    <div class="mt-7 h-14 w-14"><img class="w-full h-auto" alt="home-logo" src="~/static/img/1x/home_logo.png"></div>
    <img class="mx-5 scale-90 image-header" src="~/static/img/earth_in_home.png">

    <h3 class="text-blue1 font-phu-du font-black leading-10 text-xl"> <span class="py-2 px-1">GIẢM "ĐIỂM NHỰA"
        -
        TĂNG ĐIỂM XANH</span> </h3>
    <div class="font-livic text-blue1 w-80 text-center text-base leading-1">Mọi vật phẩm bạn cầm tay trong
      chuyến du lịch của mình đều ảnh hưởng ít nhiều tới môi trường xung quanh. Hãy cùng
      đo “mức hại” của nhựa dùng một lần cho hành lý của bạn và chuẩn bị cho một chuyến đi gắn kết với thiên nhiên nhé.
    </div>

    <button @click="routeTo('/soando')"
      class="bg-button w-full bg-center h-12 bg-no-repeat bg-contain mt-10 mb-3 hover:opacity-60 mx-2">
      <span class="py-2 px1 text-white1 font-phu-du normal-case font-black tracking-wide">Soạn đồ nào!</span>

    </button>
    <button @click="routeTo('/camket')"
      class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain mb-3 hover:opacity-60">
      <span class="text-blue1 tracking-wide font-phu-du normal-case font-black">TÔI CAM KẾT "KIÊNG NHỰA"</span>
    </button>
    <button @click="routeTo('/valimau')"
      class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain mb-5 hover:opacity-60">
      <span class="text-blue1 tracking-wide font-phu-du normal-case font-black">VALI Mẫu</span>
    </button>
      <iframe class="mx-auto" width="375px" height="210px" src="https://www.youtube.com/embed/rvBz2wLoDOI?si=MZD0jCJs_yeOPNDo"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

    <div class="bg-cyan1 flex flex-col items-center w-full py-5 px-1">
      <div class="font-phu-du font-bold text-white1 w-80 text-center text-on-mobile">
        <span class="text-xl leading-1 px-1 py-2 font-black">NHỰA KHÔNG XẤU,</span> <br>
        <span class="text-xl leading-1 px-1 py-2 font-black">CHO TỚI KHI CHÚNG TA</span> <br>
        <span class="text-xl leading-1 px-1 py-2 font-black">DÙNG NHỰA THIẾU TRÁCH NHIỆM</span>
      </div>
      <div class="font-phu-du font-bold text-white1 text-center text-on-desktop">
        <span class="text-xl leading-1 px-1 py-2 font-black">NHỰA KHÔNG XẤU, CHO TỚI KHI CHÚNG TA DÙNG NHỰA THIẾU TRÁCH NHIỆM</span>
      </div>
      <div class="font-livic text-blue1 text-center font-bold mx-6 mt-3 text-base">
        <div>Nằm trong khuôn khổ dự án “Giảm thiểu Rác thải nhựa đại dương tại Việt Nam” do Bộ Môi trường, Bảo tồn Thiên
          nhiên và An toàn Hạt nhân CHLB Đức
        </div>
        <div>
          thông qua Tổ chức Quốc tế về Bảo tồn thiên nhiên WWF - Việt Nam tài trợ, trang web “Kiêng Nhựa" giúp bạn định lượng mức độ hại môi trường của từng đồ nhựa sử
          dụng một lần, để từ đó điều chỉnh hành vi dùng đồ nhựa có trách nhiệm hơn trong mỗi chuyến du lịch của mình.
        </div>
        <div class="mt-2">Cùng học cách hành trang du lịch “xanh
          qua hướng dẫn dưới đây.</div>
      </div>
      <button @click="routeTo('/valimau')"
        class="bg-button-border-white w-full bg-center h-12 bg-no-repeat bg-contain mb-3 mt-5 hover:opacity-60">
        <span class="text-blue1 tracking-wide font-phu-du normal-case font-black">VALI Mẫu</span>
      </button>
    </div>

  </div>
</template>

<script>
// import { getIdFromURL } from "vue-youtube-embed";
// let videoId = getIdFromURL("https://www.youtube.com/watch?v=24C8r8JupYY");

export default {
  name: 'Home',
  methods: {
    routeTo(path) {
      this.$router.push(path);
    },
    toggleInfo(value) {
      this.openInfo = !!value
    },
    toggleMenu(value) {
      this.openMenu = !!value
    }
  }
}
</script>

<style scoped>
.mt-40p {
  margin-top: 40%;
}

.w-45p {
  width: 45%;
}

.w-80p {
  width: 80%;
}

.w-85p {
  width: 85%;
}

.w-150px {
  width: 150px;
}

.top-2px {
  top: 2px;
}

.image-header {
  width: 40vh;
}

@media screen and (max-width: 768px) {
  .text-on-mobile {
    display: block;
  }

  .text-on-desktop {
    display: none;
  }
}

.text-on-mobile {
    display: none;
  }

.text-on-desktop {
  display: block;
}

@media screen and (max-width: 768px) {
  .text-on-mobile {
    display: block;
  }

  .text-on-desktop {
    display: none;
  }
}
</style>
