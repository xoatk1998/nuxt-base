<template>
    <div>
        <div v-if="!isShowSlide"
            class="fixed w-full min-h-full top-0 left-0 z-20 cursor-pointer bg-white1 bg-no-repeat bg-cover bg-center bg-info">
            <div class="flex w-full justify-center cursor-pointer mt-7">
                <img class="mx-5 w-6 h-6" @click="$emit('closeInfo')" src="~/static/img/info/close_btn.png" alt="close_btn">
            </div>
            <div class="container flex flex-col items-center px-4 mt-10">
                <img src="~/static/img/info/kieng_nhua_la_cai_chi.png" title="kieng nhua la cai chi"
                    alt="kieng_nhua_la_cai_chi">
                <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 !normal-case">Website
                    Kiêng Nhựa liệt kê
                    những
                    vật phẩm nhựa dùng một lần phổ biến nhất và định lượng
                    mức hại môi trường của chúng dựa trên từng thang điểm khoa học, từ đó đề xuất những sản phẩm thay thế
                    thân
                    thiện môi trường hơn. Bảng định lượng đo mức hại môi trường của từng vật phẩm theo <strong>điểm từ 0 tới
                        10</strong>, trong
                    đó <strong>0 điểm</strong> là những
                    lựa chọn có <strong>tác động tiêu cực ít nhất</strong>, và <strong>10 điểm</strong> có tác động
                    <strong>tiêu
                        cực nhiều nhất</strong>.
                </p>
                <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5">Định lượng này được dựa
                    trên nghiên cứu từ <strong>The Futouris - “Single-Use Plastic Guidance 2021”</strong>. Download nghiên
                    cứu
                    <a class=" underline font-bold" href="#">tại đây.</a>
                </p>
                <button @click="showSlide()">HƯỚNG DẪN "KIÊNG NHỰA"</button>
            </div>
        </div>
        <div v-else
            class="fixed w-full min-h-full top-0 left-0 z-20 cursor-pointer bg-blue1 bg-no-repeat bg-cover bg-center bg-info">
            <div class="flex w-full justify-center cursor-pointer mt-7">
                <img class="mx-5 w-6 h-6" @click="$emit('closeInfo')" src="~/static/img/info/close_btn.png" alt="close_btn">
            </div>
            <h3 class="font-bold text-2xl text-center font-phu-du text-cyan1 mt-1">Bước {{ this.step }}</h3>
            <swiper :slides-per-view="1" :space-between="50" @slideChange="onSlideChange" :navigation="true">
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
            <p class="descriptionAtStep">{{ this.stepDescription }}</p>
        </div>
    </div>
</template>
  
<script>
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import DescriptionForSteps from "./DescriptionForSteps.json";

SwiperCore.use([Navigation, Pagination]);
export default {
    name: 'Info',
    components: {
        Swiper,
        SwiperSlide,
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
            stepDescription: DescriptionForSteps[0]
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
    }
}
</script>

<style scoped>
.bg-info {
    background-image: url('~/static/img/info/info_bg.png');
    /* background-image: url('~/static/img/info/info_bg.png'); */
}

.previewImg {
    width: 50%;
    margin-left: 25%;
    margin-top: 5%;
}
</style>
  