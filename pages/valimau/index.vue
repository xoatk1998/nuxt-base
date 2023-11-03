<template>
  <div class="min-h-screen bg-white1">
    <div v-if="isChooseVali" class="flex flex-col items-center min-h-screen">
      <div class="flex flex-col items-center">
        <div class="flex justify-center mx-10 mt-20">
          <img src="~/static/img/luyen_cach_kieng_nhua.png" title="hoc cach kieng nhua">
        </div>
        <h3 class="font-black text-2xl text-center font-livic-bold leading-6 tracking-tight text-blue-2 mt-8 mb-2 uppercase">Vì một Phú Quốc xanh, <br>Vì một Côn
          Đảo sạch</h3>
        <h4 class="font-livic text-blue1 w-90p text-center text-md leading-1 font-bold">Phú Quốc và Côn Đảo là những địa điểm nổi tiếng nhờ vào núi non hùng vĩ, ẩm thực địa phương đặc sắc, và vì những địa danh lịch sử với bao câu chuyện về anh hùng dân tộc. Tuy nhiên, những năm gần đây, lượng rác thải từ hoạt động du lịch đã gây ra nhiều áp lực trong nỗ lực giữ gìn môi trường của Phú Quốc và Côn Đảo.</h4>
        <h4 class="font-livic text-blue1 w-90p text-center text-md leading-1 my-3 font-bold">Hãy cùng chung tay “kiêng nhựa” cho hành lý của bạn để trả lại vẻ đẹp tự nhiên cho nơi đây, và giúp cho Trái Đất khoẻ mạnh hơn nhé!</h4>
      </div>
      <div>
        <img class="honDao" src="~/static/img/hon_dao.png">

        <div class="w-full flex flex-col items-center gap-2 mb-20 mt-3">
          <button @click="travelTo('PHU_QUOC')"
            class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain">
            <span class="text-blue1 uppercase font-livic-bold tracking-tighter">Du lịch Phú Quốc <br> "Kiêng
              nhựa"</span>
          </button>
          <button @click="travelTo('CON_DAO')"
            class="bg-button-border w-full bg-center h-12 bg-no-repeat bg-contain">
            <span class="text-blue1 uppercase font-livic-bold tracking-tighter">Du lịch Côn Đảo<br> "Kiêng
              nhựa"</span>
          </button>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-col items-center" v-else>
      <h2 class="font-black text-xl text-center font-livic-bold uppercase text-blue1 mt-14 mb-3 mx-3">Một chiếc hành lý đến {{ this.place
        === places.CON_DAO ? 'Côn Đảo' : 'Phú Quốc' }}
        “khoẻ mạnh” vì kiêng rác nhựa </h2>
      <div class="min-w-screen bg-vali" v-if="this.place === places.CON_DAO">
        <div class="grid grid-cols-2 gap-4">
          <div class="totePosition">
            <img class="toteImg" src="~/static/img/vali_pq/pq_5.png" @click="showItemDetail(5, 'CON_DAO')">
          </div>
          <div class="topRightPosition">
            <img class="itemConDao6" src="~/static/img/vali_con_dao/con_dao_6.png" @click="showItemDetail(6, 'CON_DAO')">
            <!-- <img class="item7" src="~/static/img/vali_pq/pq_7.png" @click="showItemDetail(7)"> -->
            <div class="item78">
              <img class="itemConDao7" src="~/static/img/vali_con_dao/con_dao_7.png" @click="showItemDetail(7, 'CON_DAO')">
              <img class="itemConDao8" src="~/static/img/vali_con_dao/con_dao_8.png" @click="showItemDetail(8, 'CON_DAO')">
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 valiBottom">
          <div class="bottomLeftPosition">
            <img class="itemConDao4" src="~/static/img/vali_con_dao/con_dao_4.png" @click="showItemDetail(4, 'CON_DAO')">
            <img class="itemConDao1" src="~/static/img/vali_pq/pq_1.png" @click="showItemDetail(1, 'CON_DAO')">
          </div>
          <div class="bottomRightPosition">
            <img class="item3" src="~/static/img/vali_pq/pq_3.png" @click="showItemDetail(3, 'CON_DAO')">
            <img class="item2" src="~/static/img/vali_pq/pq_2.png" @click="showItemDetail(2, 'CON_DAO')">
          </div>
        </div>
      </div>
      <div class="min-w-screen bg-vali" v-else>
        <div class="grid grid-cols-2 gap-4">
          <div class="totePosition">
            <img class="toteImg" src="~/static/img/vali_pq/pq_5.png" @click="showItemDetail(5, 'PHU_QUOC')">
          </div>
          <div class="topRightPosition">
            <img class="item6" src="~/static/img/vali_pq/pq_6.png" @click="showItemDetail(6, 'PHU_QUOC')">
            <img class="item7" src="~/static/img/vali_pq/pq_7.png" @click="showItemDetail(7, 'PHU_QUOC')">
            <div class="item89">
              <img class="item8" src="~/static/img/vali_pq/pq_8.png" @click="showItemDetail(8, 'PHU_QUOC')">
              <img class="item9" src="~/static/img/vali_pq/pq_9.png" @click="showItemDetail(9, 'PHU_QUOC')">
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 valiBottom">
          <div class="bottomLeftPosition">
            <img class="item4" src="~/static/img/vali_pq/pq_4.png" @click="showItemDetail(4, 'PHU_QUOC')">
            <img class="item1" src="~/static/img/vali_pq/pq_1.png" @click="showItemDetail(1, 'PHU_QUOC')">
          </div>
          <div class="bottomRightPosition">
            <img class="item3" src="~/static/img/vali_pq/pq_3.png" @click="showItemDetail(3, 'PHU_QUOC')">
            <img class="item2" src="~/static/img/vali_pq/pq_2.png" @click="showItemDetail(2, 'PHU_QUOC')">
          </div>
        </div>
      </div>
      <div class="itemDetail mt-8" v-if="item?.name">
        <h3 class="uppercase text-lg text-center text-blue1 font-black font-livic-bold">{{ item.name }}</h3>
        <h5 class="text-sm text-center text-blue1 font-livic mx-4 normal-case" v-html="item.description"></h5>
        <h2 class="uppercase text-xl font-bold text-center mt-3 mb-2 text-blue1 font-livic-bold">MỨC ẢNH HƯỞNG MÔI TRƯỜNG
        </h2>
        <h2 class="uppercase text-4xl text-center text-cyan1 font-livic-bold font-black">{{ item.point }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import listItemExample from './listItemExample.json';
export default {
  components: {
  },
  name: 'ValiExample',

  data() {
    return {
      isChooseVali: true,
      place: 'CON_DAO',
      places: {
        CON_DAO: 'CON_DAO',
        PHU_QUOC: 'PHU_QUOC',
      },
      item: {},
    }
  },
  methods: {
    showItemDetail(itemIndex, place) {
      this.item = listItemExample[place][itemIndex - 1];
    },
    travelTo(place) {
      window.scrollTo(0,0);
      switch (place) {
        case this.places.CON_DAO:
          this.place = this.places.CON_DAO;
          break;
        case this.places.PHU_QUOC:
          this.place = this.places.PHU_QUOC;
          break;
      }
      if (!this.place) return;
      this.isChooseVali = false;
    }
  }
}
</script>

<style scoped>

.bg-button-border {
  background-image: url('~/static/img/button/button_border.png')
}
.bg-vali {
  background-image: url("~/static/img/vali_bg.png");
  width: 45vh;
  height: 58vh;
  background-size: cover;
}

.topRightPosition {
  height: 30vh;
  position: relative;
}

img.toteImg {
  transform: scale(0.8);
  margin-left: 18%;
}

.item6 {
  transform: scale(0.5);
  margin-left: -25%;
}

.item7, .itemConDao6 {
  transform: scale(0.6);
  margin-top: -52%;
}

/* NEW CSS */
.grid.grid-cols-2.gap-4.vali-container {
  height: 50%;
}

.item89, .item78 {
  margin-top: -14%;
  display: flex;
  padding-top: 7%;
}

img.item8, .itemConDao7 {
  width: 40%;
  margin-right: 3%;
  height: 50%;
  margin-left: 11%;
}

img.item9, .itemConDao8 {
  width: 15%;
}

img.item4,
img.itemConDao10 {
  transform: scale(0.8);
  margin-left: 16%;
}

.grid.grid-cols-2.gap-4 {
  height: 50%;
}


img.item1, .itemConDao1 {
  transform: scale(0.75);
  margin-top: -11%;
  margin-left: 11%;
}
.bottomRightPosition{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

img.item3 {
  width: 50px;
}

img.item2 {
  transform: scale(0.6);
  margin-top: -31%;
  margin-left: -9%;
}

img.itemConDao4 {
  transform: scale(0.6);
  margin-top: 23%;
  margin-left: 9%;
}

.text-blue-2 {
  color: #2346d7;
}

.itemConDao1 {
  margin-top: -20%;
  margin-left: 17%;
}

.itemConDao6 {
  margin-top: 26%;
}
</style>
