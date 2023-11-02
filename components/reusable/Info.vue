<template>
  <div>
    <div
      v-if="!isShowSlide && infoNumber === 1"
      class="fixed w-full min-h-full h-screen overflow-auto top-0 left-0 z-20 bg-white1"
    >
      <div class="flex w-full justify-center mt-5">
        <img
          class="mx-5 w-6 h-6 cursor-pointer"
          @click="$emit('closeInfo')"
          src="~/static/img/info/close_btn.png"
          alt="close_btn"
        />
      </div>
      <div class="w-full mx-auto flex flex-col items-center mt-5">
        <img
          src="~/static/img/info/kieng_nhua_la_cai_chi.png"
          title="kieng nhua la cai chi"
          alt="kieng_nhua_la_cai_chi"
        />
        <p
          class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 px-4 !normal-case tracking-tighter leading-5"
        >
          Có thể bạn đã quen thuộc với những vật phẩm nhựa dùng một lần phổ biến
          nhất. Nhưng bạn có biết mức ảnh hưởng môi trường môi trường của chúng
          không?
        </p>
        <p
          class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 px-4 !normal-case tracking-tighter leading-5"
        >
          Website Kiêng Nhựa hy vọng có thể giúp bạn dễ dàng tra cứu mức độ ảnh
          hưởng môi trường của từng món đồ quen dùng, từ đó đề xuất những biện
          pháp giảm thiểu, tái sử dụng và thay thế bằng các sản phẩm thân thiện
          môi trường hơn. Bảng tra cứu đưa ra mức độ ảnh hưởng môi trường theo
          <strong>điểm từ 0 tới 10</strong>, trong đó <strong>0 điểm</strong> là
          những lựa chọn có tác động tiêu cực ít nhất, và
          <strong>10 điểm</strong> có tác động
          <strong>tiêu cực nhiều nhất</strong>.
        </p>
        <p
          class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 px-4"
        >
          Bảng tra cứu này dựa trên báo cáo nghiên cứu
          <strong>The Futouris - “Single-Use Plastic Guidance 2021”</strong>.
          Tham khảo
          <a
            class="underline font-bold"
            href="https://www.oneplanetnetwork.org/sites/default/files/from-crm/Futouris%2520Plastic%2520Guide_compressed.pdf"
            >tại đây.</a
          >
        </p>
        <img class="honDao" src="~/static/img/hon_dao.png" />
        <div
          class="w-full flex flex-col items-center justify-center gap-2 mt-3 mb-20 px-4"
        >
          <button
            class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain"
            @click="showSlide()"
          >
            <span
              class="text-blue1 tracking-wide font-livic-bold normal-case font-bold"
            >
              HƯỚNG DẪN "KIÊNG NHỰA"</span
            >
          </button>
          <button
            class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain"
            @click="setInfoNumber(2)"
          >
            <span
              class="text-blue1 tracking-wide font-livic-bold normal-case font-bold"
            >
              TRÍCH NGUỒN NGHIÊN CỨU</span
            >
          </button>
        </div>
      </div>
    </div>
    <div
      v-else-if="infoNumber === 2"
      class="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-20 bg-cyan1 overflow-auto"
    >
      <div class="flex w-full justify-center mt-7">
        <img
          class="mx-5 w-6 h-6 cursor-pointer"
          @click="setInfoNumber(1)"
          src="~/static/img/info/close_btn.png"
          alt="close_btn"
        />
      </div>
      <div class="container mx-auto flex flex-col items-center px-4 pb-8">
        <p
          class="mt-7 mb-6 text-lg font-livic-bold leading-5 text-center normal-case font-black text-blue1 focus:underline"
        >
          WEBSITE “KIÊNG NHỰA"<br />
          ĐƯỢC DỰA TRÊN <br />
          NHỮNG NGHIÊN CỨU SAU
        </p>
        <div
          class="text-center mb-3 mx-6"
          v-for="(item, index) in refer"
          :key="index"
        >
          <div class="text-blue1 font-bold text-base font-livic-bold">{{ item.title }}</div>
          <span class="text-white1 mx-3 font-livic leading-5"
            >"{{ item.content }}" - {{ item.author }}.</span
          >
        </div>
      </div>
    </div>
    <div
      v-else
      class="fixed w-full min-h-full top-0 left-0 z-20 bg-blue1 bg-no-repeat bg-cover bg-center h-full overflow-auto"
    >
      <div class="fixed top-7 flex justify-between w-full px-3 z-20">
        <img
          @click="toggleMenu(true)"
          class="h-4 w-6 cursor-pointer"
          src="~/static/img/1x/back_to_home_black.png"
          alt="back_to_home"
        />
        <img
          @click="$emit('closeInfo')"
          class="h-6 w-6 cursor-pointer"
          src="~/static/img/info/info_black.png"
          alt="info_close"
        />
      </div>
      <Menu v-if="!!openMenu" @closeMenu="toggleMenu(false)" />
      <h3 class="font-livic-bold text-2xl text-center text-cyan1 mt-16">
        Bước {{ this.step }}
      </h3>
      <swiper
        class="info-swiper-custom"
        :slides-per-view="1"
        :pagination="true"
        :space-between="50"
        @slideChange="onSlideChange"
        :navigation="true"
      >
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step1.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step2.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step3.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step4.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step5.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step6.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="previewImg" src="~/static/img/huongdan/step7.png" />
        </swiper-slide>
        <swiper-slide>
          <img
            class="previewImg border border-slate-300"
            src="~/static/img/huongdan/step8.png"
          />
        </swiper-slide>
      </swiper>
      <p
        class="m-3 mb-7 font-livic text-white1 text-center text-sm leading-5"
        v-html="this.stepDescription"
      ></p>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import DescriptionForSteps from "./DescriptionForSteps.json";
import Menu from "../../components/reusable/Menu.vue";

SwiperCore.use([Navigation, Pagination]);
export default {
  name: "Info",
  components: {
    Swiper,
    SwiperSlide,
    Menu,
  },
  watch: {
    step(newValue) {
      this.stepDescription = DescriptionForSteps[newValue - 1];
    },
  },
  data() {
    return {
      isShowSlide: false,
      infoNumber: 1,
      step: 1,
      stepDescription: DescriptionForSteps[0],
      openMenu: false,
      refer: [
        {
          title: "Báo điện tử VTC News",
          content:
            "Chỉ 20% được tái chế sau sử dụng, còn triệu tấn rác thải nhựa mỗi năm đi về đâu?",
          author: "Thành Lâm, Nguyễn Yến, Minh Đức, 11/10/2023",
        },
        {
          title: "The World Counts 2023",
          content: "How many plastic bags are used each year?",
          author: "www.theworldcounts.com",
        },
        {
          title: "www.ibanet.org",
          content:
            "The negative environmental effects of plastic shopping bags",
          author: "Chidi Ujeh, K 2018",
        },
        {
          title: "Simply Plastic Free",
          content: "The Environmental Impact of Styrofoam",
          author: "Kuersch, A 2023",
        },
        {
          title: "Ocean Plastics Pollution",
          content: "Center for biological diversity 2019",
          author: "Biologicaldiversity.org",
        },
        {
          title: "Outlery",
          content:
            "Plastic cutlery is killing our water animals & it must stop",
          author: "Erin, E 2021",
        },
        {
          title: "National Geographic",
          content:
            "How bringing your own cutlery helps solve the plastic crisis, Environment",
          author: "Root, T 2019",
        },
        {
          title: "WWF 2021",
          content:
            "The lifecycle of plastics | WWF-Australia | The lifecycle of plastics | WWF Australia",
          author: "wwf.org.au",
        },
        {
          title: "Statista",
          content:
            "Infographic: Billions of Discarded Straws, Statista Infographics",
          author: "Loesche, D 2018",
        },
        {
          title: "National Geographic",
          content:
            "Your plastic toothbrush is a bigger problem than you releize, Environment",
          author: "BORUNDA, A 2019",
        },
        {
          title: "Tạp chí Công nghiệp Môi trường điện tử",
          content:
            "Dép tông có khả năng tự phân hủy, không làm ô nhiễm môi trường",
          author: "Mai Hoa, 2020",
        },
      ],
    };
  },
  methods: {
    showSlide() {
      this.isShowSlide = true;
    },
    setInfoNumber(number) {
      this.infoNumber = number;
    },
    onSlideChange(swiper) {
      console.log(swiper.realIndex, this.currentSlideIndex, "--index");
      this.step = swiper.realIndex + 1;
    },
    toggleMenu(value) {
      this.openMenu = !!value;
    },
  },
};
</script>

<style scoped>
.bg-info {
  background-image: url("~/static/img/info/info_bg.png");
  /* background-image: url('~/static/img/info/info_bg.png'); */
}

.previewImg {
  width: 60%;
  margin-left: 20%;
  margin-top: 5%;
  margin-bottom: 10%;
}
</style>
