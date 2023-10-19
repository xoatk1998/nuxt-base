<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, Button },
};
</script>

<template>
  <div class="flex flex-col items-center font-phu-du">
    <div class="mt-7 h-14 w-14"><img class="w-full h-auto" alt="home-logo" src="~/static/img/1x/home_logo.png"></div>
    <img class="mx-5 scale-90" src="~/static/img/earth_in_home.png">

    <h3 class="text-blue1 font-phu-du font-bold leading-10 "> <span class="py-2 px-1">GIẢM "ĐIỂM NHỰA"
        -
        TĂNG ĐIỂM XANH</span> </h3>
    <div class="font-livic text-blue1 w-80 text-center text-base leading-1">Mọi vật phẩm bạn cầm tay trong
      chuyến du lịch của mình đều ảnh hưởng ít nhiều tới môi trường xung quanh. Hãy cùng
      đo “mức hại” của nhựa dùng một lần cho hành lý của bạn và chuẩn bị cho một chuyến đi gắn kết với thiên nhiên nhé.
    </div>

    <button @click="routeTo('/soando')"
      class="bg-button w-full bg-center h-12 bg-no-repeat bg-contain mt-10 mb-3 hover:opacity-60 mx-2">
      <span class="py-2 px1 text-white1 font-phu-du normal-case font-bold tracking-wide">Soạn đồ nào!</span>

    </button>
    <button @click="routeTo('/camket')"
      class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain mb-3 hover:opacity-60">
      <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">TÔI CAM KẾT "KIÊNG NHỰA"</span>
    </button>
    <button @click="routeTo('/valimau')"
      class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain mb-3 hover:opacity-60">
      <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">VALI Mẫu</span>
    </button>
      <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/rvBz2wLoDOI?si=MZD0jCJs_yeOPNDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <div class="bg-cyan1 flex flex-col items-center w-full py-5 px-1">
      <div class="font-phu-du font-bold text-white1 w-80 text-center ">
        <span class="text-base leading-1 px-1 py-2">NHỰA KHÔNG XẤU,</span> <br>
        <span class="text-base leading-1 px-1 py-2">CHO TỚI KHI CHÚNG TA</span> <br>
        <span class="text-base leading-1 px-1 py-2">DÙNG NHỰA THIẾU TRÁCH NHIỆM</span>
      </div>
      <div class="font-livic text-blue1 text-center font-bold mx-5 mt-3">
        <div>Nằm trong khuôn khổ dự án “Giảm thiểu Rác thải nhựa đại dương tại Việt Nam” do Bộ Môi trường, Bảo tồn Thiên
          nhiên và An toàn Hạt nhân CHLB Đức thông qua Tổ chức Quốc tế về Bảo tồn thiên nhiên
        </div>
        <div>
          WWF - Việt Nam tài trợ, trang web “Kiêng Nhựa" giúp bạn định lượng mức độ hại môi trường của từng đồ nhựa sử
          dụng một lần, để từ đó điều chỉnh hành vi dùng đồ nhựa có trách nhiệm hơn trong mỗi chuyến du lịch của mình.
        </div>
        <div class="mt-2">Cùng học cách hành trang du lịch “xanh
          qua hướng dẫn dưới đây.</div>
      </div>
      <button @click="routeTo('/valimau')"
        class="bg-button-border-white w-full bg-center h-12 bg-no-repeat bg-contain mb-3 mt-5 hover:opacity-60">
        <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">VALI Mẫu</span>
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
.bg-button-border {
  background-image: url('~/static/img/button/button_border.png');
}
.bg-button {
  background-image: url('~/static/img/button/button.png');
}
.bg-button-border-white {
  background-image: url('~/static/img/button/button_border_white.png');
}
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
.w-90p {
  width: 90%;
}
.w-150px {
  width: 150px;
}
.top-2px {
  top: 2px;
}
</style>
