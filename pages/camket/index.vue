<template>
  <div>
    <div v-if="!isShowCertificte" class="flex flex-col items-center min-h-screen bg-white1">
      <div class="flex flex-col justify-center mt-16 mb-5">
        <img class="mx-3" title="toi cam ket kieng nhua" alt="toi_cam_ket_kieng_nhua"
          src="~/static/img/toi_cam_ket_title.png">
      </div>
      <label for="file-upload">
        <div class="h-16 w-16 rounded-full bg-white flex items-center justify-center bg-black relative">
          <img class="object-cover rounded-full boder-solid" :src="previewImage" :class="{ bgGray950: !previewImage }" />
          <img class="absolute bottom-0 right-0 h-4 w-4" src="~/static/img/button/plus.png" alt="choose">
        </div>
      </label>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input id="file-upload" type="file" @change="handleFileUpload">
      </label>
      <input type="text" :value="userName"
        class="mt-5 border-none bg-white1 text-center font-phudu placeholder:text-cyan1 font-bold placeholder:font-bold text-3xl placeholder:text-3xl focus:border-none focus:outline-none"
        placeholder="TÊN NGƯỜI DÙNG" @input="updateInputText" />
      <div class="w-90 flex justify-center mb-3">
        <img src="~/static/img/hr_blue.png" alt="hr">
      </div>
      <h3 class="font-bold text-2xl text-center font-phu-du text-blue1 mt-5 mb-2">ĐIỂM HẠI MÔI TRƯỜNG</h3>
      <div class="font-livic text-blue1 w-90 text-center text-base leading-1">Vì một trái đất “xanh" và một cơ thể lành
        mạnh,
        tôi cam kết trong chuyến đi này sẽ mang theo
        những vật dụng tái sử dụng, không mua đồ nhựa
        dùng một lần ở khu du lịch và không sử dụng
        đồ dùng một lần trong khách sạn.
      </div>
      <div class="bottom-8 absolute w-full flex justify-center">
        <button @click="showCertificate()"
          class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain">
          <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">Từ nay tôi kiêng nhựa</span>
        </button>
      </div>
    </div>
    <div v-else class="flex flex-col items-center bg-blue1 min-h-screen justify-between">
      <div class="flex flex-col items-center">
        <div class="w-45 mt-20 mb-5 flex justify-center">
        <img src="~/static/img/tu_nay_goi_toi.png">
      </div>
      <div class="h-16 w-16 rounded-full bg-white flex items-center justify-center bg-black relative">
        <img class="object-cover rounded-full boder-solid" :src="previewImage" :class="{ bgGray950: !previewImage }" />
      </div>
      <h3 class="font-phu-du text-3xl text-cyan1 my-3 font-bold">{{ userName || 'Tên người dùng' }}</h3>
      <h4 class="font-phu-du text-2xl text-white1 font-bold mt-2">CAM KẾT MỘT VALI “Kiêng Nhựa"</h4>
      <div class="font-livic text-white1 w-90 text-center text-base leading-1">Vì một trái đất “xanh" và một cơ thể lành
        mạnh,
        tôi cam kết trong chuyến đi này sẽ mang theo
        những vật dụng tái sử dụng, không mua đồ nhựa
        dùng một lần ở khu du lịch và không sử dụng
        đồ dùng một lần trong khách sạn.
      </div>
      <div class="w-32 mt-5">
        <img src="~/static/img/huan_chuong.png">
      </div>
      </div>
      <div class="w-full flex justify-center">
        <button @click="shareFB()"
          class="bg-button-border-white w-full bg-center h-12 bg-no-repeat bg-contain">
          <span class="text-cyan1 tracking-wide font-phu-du normal-case font-bold">Chia sẻ cam kết</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'CommitDiet',
  metaInfo: {
    title: 'Commit Diet',
    meta: [
      { name: 'description', content: 'Commit Diet' },
      { vmid: 'title', property: 'og:title', content: 'Commit diet title' },
      { vmid: 'description', property: 'og:description', content: 'Commit diet descriptionn' },
    ]
  },
  data() {
    return {
      previewImage: null,
      isShowCertificte: false,
      userName: ''
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.previewImage = reader.result;
      };

      reader.readAsDataURL(file);
    },
    showCertificate() {
      this.isShowCertificte = true
    },
    updateInputText(event) {
      this.userName = event.target.value;
    },
    shareFB() {
      // eslint-disable-next-line no-undef
      FB.ui({
        method: 'share',
        quote: 'Check out this awesome post!',
        href: 'https://zing.vn/',
      }, function () { });
    }
  }
}
</script>

<style scoped>
input[type="file"] {
  display: none;
}

.bgGray950 {
  background: rgb(3 7 18 / 1)
}
.bg-button-border {
  background-image: url('~/static/img/button/button_border.png');
}
.bg-button {
  background-image: url('~/static/img/button/button.png');
}
.bg-button-border-white {
  background-image: url('~/static/img/button/button_border_white.png');
}
</style>