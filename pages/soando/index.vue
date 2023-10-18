<template>
  <div class="flex flex-col items-center bg-white1 min-h-screen justify-between">
    <!-- Screen Prepare Vali -->
    <div class="pickItem flex flex-col justify-between" v-if="this.screenIsShowing === listScreen?.listItems">
      <div class="flex flex-col justify-between items-center">
        <h3 class="font-bold text-2xl text-center font-phu-du text-blue1 mt-12">ĐIỂM HẠI MÔI TRƯỜNG</h3>
        <h3 class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-cyan1">{{ formatNumber(this.totalPoint) }}</h3>
        <img class="" src="~/static/img/good_point_preparation.png">
        <p class="text-center text-blue1 mx-5 my-2">Bạn đang mang theo những sản phẩm nhựa dùng một lần nào dưới đây?</p>
        <swiper :mousewheel="{ releaseOnEdges: false }" :loop="false" direction="horizontal"
          :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
          v-if="this.listItemPaginate?.length">
          <swiper-slide v-for="n in   3  " :key="n" class="test" :class="{ w_100: true }">
            <!-- list item in a page -->
            <div class="grid grid-cols-2 gap-4 my-3">
              <div v-if="listItemPaginate[0]" class="card-border bg-no-repeat bg-contain flex justify-center relative w-[150px]"
                :class="{
                  'card-border-selected':
                    !!listItemPaginate[0].isPicked
                }">
                <img v-if="!listItemPaginate[0].notUsePlastic" @click="fetchItemDetail(listItemPaginate[0].id, 0)"
                  class="w-30 h-40 scale-75" :src="require(`~/static/img/${listItemPaginate[0].image}`)">
                <img v-else class="w-30 h-40 scale-75"
                  :src="require(`~/static/img/${listItemPaginate[0].imageOfItemReplace}`)">
                <div @click="unpickItem(0)" class="right-2 top-[2px] w-4 h-4 mt-2 absolute">
                </div>
              </div>
              <div v-if="listItemPaginate[1]" class="card-border bg-no-repeat bg-contain flex justify-center relative w-[150px]"
                :class="{
                  'card-border-selected':
                    !!listItemPaginate[1].isPicked
                }">
                <img v-if="!listItemPaginate[1].notUsePlastic" @click="fetchItemDetail(listItemPaginate[1].id, 1)"
                  class="w-30 h-40 scale-75" :src="require(`~/static/img/${listItemPaginate[1].image}`)">
                <img v-else class="w-30 h-40 scale-75"
                  :src="require(`~/static/img/${listItemPaginate[1].imageOfItemReplace}`)">
                <div @click="unpickItem(1)" class="right-2 top-[2px] w-4 h-4 mt-2 absolute">
                </div>
              </div>
              <div v-if="listItemPaginate[2]" class="card-border bg-no-repeat bg-contain flex justify-center relative w-[150px]"
                :class="{
                  'card-border-selected':
                    !!listItemPaginate[2].isPicked
                }">
                <img v-if="!listItemPaginate[2].notUsePlastic" @click="fetchItemDetail(listItemPaginate[2].id, 2)"
                  class="w-30 h-40 scale-75" :src="require(`~/static/img/${listItemPaginate[2].image}`)">
                <img v-else class="w-30 h-40 scale-75"
                  :src="require(`~/static/img/${listItemPaginate[2].imageOfItemReplace}`)">
                <div @click="unpickItem(2)" class="right-2 top-[2px] w-4 h-4 mt-2 absolute">
                </div>
              </div>
              <div v-if="listItemPaginate[3]" class="card-border bg-no-repeat bg-contain flex justify-center relative w-[150px]"
                :class="{
                  'card-border-selected':
                    !!listItemPaginate[3].isPicked
                }">
                <img v-if="!listItemPaginate[3].notUsePlastic" @click="fetchItemDetail(listItemPaginate[3].id, 3)"
                  class="w-30 h-40 scale-75" :src="require(`~/static/img/${listItemPaginate[3].image}`)">
                <img v-else class="w-30 h-40 scale-75"
                  :src="require(`~/static/img/${listItemPaginate[3].imageOfItemReplace}`)">
                <div @click="unpickItem(3)" class="right-2 top-[2px] w-4 h-4 mt-2 absolute">
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="mb-8 w-full flex justify-center">
        <button @click="completePrepare()"
          class="bg-[url('~/static/img/button/button_border.png')] bg-center w-full h-12 bg-no-repeat bg-contain">
          <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">ĐÃ SOẠN XONG</span>
        </button>
      </div>
    </div>

    <!-- Screen show item picked detail to choose replace item or not -->
    <div class="itemDetail flex flex-col items-center bg-[#000000] text-white min-h-screen z-50 justify-between"
      v-if="this.screenIsShowing === listScreen?.itemDetail">
      <div class="fixed top-7 flex justify-between w-full px-3 z-20">
        <img @click="toggleMenu(true)" class="h-4 w-6 cursor-pointer" src="~/static/img/1x/back_to_home_black.png"
          alt="back_to_home">
        <img @click="toggleInfo(true)" class="h-6 w-6 cursor-pointer" src="~/static/img/info/info_black.png"
          alt="back_to_home">
      </div>
      <Info v-if="!!openInfo" @closeInfo="toggleInfo(false)" />
      <Menu v-if="!!openMenu" @closeMenu="toggleMenu(false)" />
      <div class="flex flex-col items-center">
        <h3 class="font-bold text-2xl text-center font-phu-du text-white1 mt-12">ĐIỂM HẠI MÔI TRƯỜNG</h3>
        <h3 class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-white1">{{ this.itemChosen.point }}</h3>
        <img class="w-1/4 my-6" :src="require(`~/static/img/${itemChosen.image}`)">
        <h5 class="font-bold text-2xl text-center font-phu-du text-white1">{{ this.itemChosen.name }}</h5>
        <h5 class="text-white1 font-livic mt-3 text-center w-[90%]">{{ this.itemChosen.description }}</h5>
      </div>

      <div class="mb-5 w-full flex items-center flex-col">
        <button @click="showItemReplace()"
          class="bg-[url('~/static/img/button/button_fill_white.png')] w-full bg-center h-12 bg-no-repeat bg-contain mb-3 mt-5">
          <span class="text-[#000000] tracking-wide font-phu-du normal-case font-bold">THAY LỰA CHỌN "XANH" HƠN</span>
        </button>
        <button @click="usePlastic()"
          class="bg-[url('~/static/img/button/button_border_white.png')] w-full h-12 bg-center bg-no-repeat bg-contain">
          <span class="text-white1 tracking-wide font-phu-du normal-case font-bold">TÔI THÍCH DÙNG "NHỰA" CƠ!</span>
        </button>
      </div>
    </div>

    <!-- Screen show item replace -->
    <div class="itemDetail flex flex-col items-center min-h-screen"
      v-if="this.screenIsShowing === listScreen?.itemReplace">
      <div class="flex flex-col items-center">
        <h3 class="font-bold text-2xl text-center font-phu-du text-blue1 mt-12">ĐIỂM HẠI MÔI TRƯỜNG</h3>
        <h3 class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-cyan1">{{ this.itemChosen.pointOfItemReplace }}</h3>
        <img class="w-1/4 my-10" :src="require(`~/static/img/${itemChosen.imageOfItemReplace}`)">
        <h5 class="font-bold text-2xl text-center font-phu-du text-blue1">{{ this.itemChosen.nameOfItemReplace }}</h5>
        <h5 class="text-blue1 font-livic mt-3 text-center w-[90%]">{{ this.itemChosen.descriptionOfItemReplace }}</h5>
      </div>
      <div class="mb-5 w-full flex items-center flex-col">
        <button @click="chooseItemReplace()"
          class="bg-[url('~/static/img/button/button.png')] bg-center w-full h-12 bg-no-repeat bg-contain mb-3 mt-5">
          <span class="text-white1 tracking-wide font-phu-du normal-case font-bold">DÙNG LỰA CHỌN NÀY</span>
        </button>
        <button @click="usePlastic()"
          class="bg-[url('~/static/img/button/button_border.png')] bg-center w-full h-12 bg-no-repeat bg-contain mb-3">
          <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">TÔI THÍCH DÙNG "NHỰA" CƠ!</span>
        </button>
      </div>
    </div>

    <!-- Screen list item picked -->
    <div class="itemDetail flex flex-col items-center min-h-screen justify-between"
      v-if="this.screenIsShowing === listScreen?.itemsPicked">
      <div class="flex flex-col items-center">
        <h3 class="font-bold text-2xl text-center font-phu-du text-blue1 mt-12">ĐIỂM HẠI MÔI TRƯỜNG</h3>
      <h3 class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-cyan1">{{ (this.totalPoint.toFixed(2)) }}</h3>
      <div class="flex flex-row justify-between w-[90%] mt-5">
        <h3 class="uppercase font-bold text-lg text-center font-phu-du text-blue1">Sản phẩm đã chọn</h3>
        <h3 class="uppercase font-bold text-lg text-center font-phu-du text-blue1">Mức hại</h3>
      </div>
      <div class="w-[90%] flex justify-center my-3">
        <img src="~/static/img/hr_blue.png" alt="hr">
      </div>
      <table class="table-auto w-[90%]">
        <tbody>
          <tr class=" h-10" v-for="(  item, index  ) in   listItemChosen  " :key="index">
            <td>
              <div class="relative w-8 h-8 bg-[url('~/static/img/1x/checkbox.png')] bg-no-repeat bg-contain">
                <img class="zoom-out absolute" :src="require(`~/static/img/${item.imageOfItemReplace}`)"
                  v-if="item.notUsePlastic">
                <img class="zoom-out absolute" :src="require(`~/static/img/${item.image}`)" v-else>
              </div>
            </td>

            <td class="pl-2 font-livic text-blue1" v-if="item.notUsePlastic">{{ item.nameOfItemReplace }}</td>
            <td class="pl-2 font-livic text-blue1" v-else>{{ item.name }}</td>
            <td class="font-livic text-blue1" v-if="item.notUsePlastic">{{ item.pointOfItemReplace }}</td>
            <td class="font-livic text-blue1" v-else>{{ item.point }}</td>
          </tr>
        </tbody>
      </table>
      <div class="w-[90%] flex justify-center my-3">
        <img src="~/static/img/hr_blue.png" alt="hr">
      </div>
      <h5 class="font-livic text-blue1 text-center mx-8">Bạn đang mang theo <strong>{{ this.itemChosen.nameOfItemReplace
        || 0
      }} sản phẩm</strong> nhựa
        dùng một lần. Bạn chắc chắn với lựa chọn trên?</h5>
      </div>
      <div class="mb-5 w-full flex items-center flex-col">
        <button @click="backToPreparation()"
          class="bg-[url('~/static/img/button/button_border.png')] bg-center w-full h-12 bg-no-repeat bg-contain mb-3">
          <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">ĐỂ TÔI CÂN NHẮC THÊM!</span>
        </button>

        <button @click="showResult()"
          class="bg-[url('~/static/img/button/button_border.png')] bg-center w-full h-12 bg-no-repeat bg-contain mb-3">
          <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">TÔI CHẮC CHẮN VỚI LỰA CHỌN NÀY</span>
        </button>
      </div>
    </div>

    <!-- Screen result of preparation -->
    <div class="itemDetail flex flex-col items-center justify-between min-h-screen bg-blue1 relative pt-16 z-50"
      v-if="this.screenIsShowing === listScreen?.result">
      <div class="fixed top-7 flex justify-between w-full px-3 z-20">
        <img @click="backToPreparation()" class="h-4 w-6 cursor-pointer" src="~/static/img/1x/back_to_home_black.png"
          alt="back_to_home">
        <img @click="toggleInfo(true)" class="h-6 w-6 cursor-pointer" src="~/static/img/info/info_black.png"
          alt="back_to_home">
      </div>
      <Info v-if="!!openInfo" @closeInfo="toggleInfo(false)" />
      <div class="flex flex-col items-center justify-center">
        <div v-show="this.totalPoint <= 10">
        <img :src="require(`~/static/img/level1.svg`)">
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Bạn đã "kiêng nhựa" thành công với điểm
          hại môi trường là</h4>
        <h4 class="font-phu-du text-cyan1 text-5xl text-center font-bold mt-2 mb-5">{{ formatNumber(this.totalPoint) }}
        </h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Trước khi "kiêng nhựa", điểm hại môi
          trường của bạn là</h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 font-bold text-3xl">{{ formatNumber(this.totalPointBefore) }}
        </h4>
      </div>
      <div v-show="this.totalPoint > 10 && this.totalPoint <= 20">
        <div class="w-[85%] h-auto"><img class="w-full" :src="require(`~/static/img/level2.svg`)"></div>
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Thêm chút nỗ lực, bạn sẽ "kiêng nhựa" tốt
          hơn cả điểm bên dưới</h4>
        <h4 class="font-phu-du text-cyan1 text-5xl text-center font-bold mt-2 mb-5">{{ formatNumber(this.totalPoint) }}
        </h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Trước khi "kiêng nhựa", điểm hại môi
          trường của bạn là</h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 font-bold text-3xl">{{ formatNumber(this.totalPointBefore) }}
        </h4>
      </div>
      <div v-show="this.totalPoint > 20 && this.totalPoint <= 30">
        <img :src="require(`~/static/img/level3.svg`)">
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Còn rất nhiều sản phẩm thay thế cho hành
          lý của bạn "xanh" hơn</h4>
        <h4 class="font-phu-du text-cyan1 text-5xl text-center font-bold mt-2 mb-5">{{ formatNumber(this.totalPoint) }}
        </h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Trước khi "kiêng nhựa", điểm hại môi
          trường của bạn là</h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 font-bold text-3xl">{{ formatNumber(this.totalPointBefore) }}
        </h4>
      </div>
      <div v-show="this.totalPoint > 30 && this.totalPoint <= 40">
        <img :src="require(`~/static/img/level4.svg`)">
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Hãy "kiêng nhựa" ngay và luôn để giảm điểm
          hại môi trường dưới đây</h4>
        <h4 class="font-phu-du text-cyan1 text-5xl text-center font-bold mt-2 mb-5">{{ formatNumber(this.totalPoint) }}
        </h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 mt-4 font-semibold">Trước khi "kiêng nhựa", điểm hại môi
          trường của bạn là</h4>
        <h4 class="font-phu-du text-white1 text-center mx-8 font-bold text-3xl">{{ formatNumber(this.totalPointBefore) }}
        </h4>
      </div>
      </div>
      <div class="mb-5 w-full flex items-center flex-col">
        <button @click="shareFB()"
          class="bg-[url('~/static/img/button/button_fill_white.png')] bg-center w-full h-12 bg-no-repeat bg-contain mb-3 mt-5">
          <span class="text-blue1 tracking-wide font-phu-du normal-case font-bold">Chia sẻ thành quả "kiêng nhựa"</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import itemsData from '~/static/listItem.json';
import { Navigation, Pagination } from "swiper";
import Info from '../../components/reusable/Info.vue'
import Menu from '../../components/reusable/Menu.vue'
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const listScreen = {
  listItems: 'LIST_ITEM',
  itemDetail: 'ITEM_DETAIL',
  itemReplace: 'ITEM_REPLACE',
  itemsPicked: 'ITEMS_PICKED',
  result: 'RESULT',
}
export default {
  head: {
    title: 'Cam ket',
    meta: [
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Custom description'
      }
    ],
  },
  components: {
    Swiper,
    SwiperSlide,
    Info,
    Menu,
  },
  name: 'Prepare',
  watch: {
    page(newPage) {
      if (newPage >= 3) return;
      let startIndex = newPage * this.itemPerPage;
      console.log()
      let endIndex = (newPage + 1) * this.itemPerPage > this.listItem.items.length ? this.listItem.items.length : (newPage + 1) * this.itemPerPage;
      this.listItemPaginate = this.listItem.items.slice(startIndex, endIndex);
      console.log(this.listItemPaginate, '-list item', startIndex, endIndex);
    },
    itemChosen() {
      localStorage.setItem('items', JSON.stringify(this.listItem));
    },
    totalPoint(newValue) {
      this.listItem.totalPoint = newValue;
      localStorage.setItem('items', JSON.stringify(this.listItem));
    },
    totalPointBefore(newValue) {
      this.listItem.totalPointBefore = newValue;
      localStorage.setItem('items', JSON.stringify(this.listItem));
    },
    screenIsShowing(newValue) {
      if (newValue === listScreen.listItems && !localStorage.getItem('items')) {
        this.loadData();
      }
    }
  },

  data() {
    return {
      modules: [Pagination],
      listItem: {},
      listScreen,
      totalPoint: 0.0,
      totalPointBefore: 0,
      itemPerPage: 4,
      screenIsShowing: listScreen.listItems,
      itemChosen: {},
      listItemPaginate: [],
      page: 0,
      indexOfItemChosen: null,
      listItemChosen: [],
      currentSlideIndex: 0,
      openInfo: false,
      openMenu: false
    }
  },

  mounted() {
    // this.setup()
    this.loadData();
  },
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    onSwiper(swiper) {
      console.log("on swiper", swiper);
    },
    onSlideChange(swiper) {
      console.log(swiper.realIndex, this.currentSlideIndex, '--index')
      if (swiper.realIndex > this.currentSlideIndex) {
        this.page += Math.abs(this.currentSlideIndex - swiper.realIndex);
      } else {
        this.page -= Math.abs(this.currentSlideIndex - swiper.realIndex);
      }
      this.currentSlideIndex = swiper.realIndex;
    },
    fetchItemDetail(itemId, index) {
      this.itemChosen = this.listItem.items.find(item => item.id === itemId);
      if (this.itemChosen && !this.itemChosen.isPicked) {
        this.totalPoint += +this.itemChosen.point;
        console.log(index, this.listItemPaginate[index], '--inde')
        this.listItemPaginate[index].isPicked = true;
        this.itemChosen.isPicked = true;
        this.indexOfItemChosen = index;
        this.screenIsShowing = listScreen.itemDetail;
      }
    },

    unpickItem(index) {
      if (!this.listItemPaginate[index].isPicked) return;
      if (this.listItemPaginate[index].notUsePlastic) {
        this.totalPoint -= this.listItemPaginate[index].pointOfItemReplace;
      } else {
        this.totalPoint -= this.listItemPaginate[index].point;
      }
      this.listItemPaginate[index].isPicked = false;
      this.listItemPaginate[index].notUsePlastic = false;
    },

    completePrepare() {
      this.listItemChosen = this.listItem.items.filter(item => item.isPicked);
      this.screenIsShowing = listScreen.itemsPicked;
    },

    showItemReplace() {
      this.screenIsShowing = listScreen.itemReplace;
    },
    chooseItemReplace() {
      this.listItemPaginate[this.indexOfItemChosen].notUsePlastic = true;
      this.itemChosen.notUsePlastic = true;
      this.totalPoint = this.totalPoint - this.itemChosen.point + this.itemChosen.pointOfItemReplace;
      this.backToPreparation();
    },
    usePlastic() {
      this.listItemPaginate[this.indexOfItemChosen].notUsePlastic = false;
      this.itemChosen.notUsePlastic = false;
      this.backToPreparation();
    },
    formatNumber(number) {
      return +(number).toFixed(2);
    },
    backToPreparation() {
      this.screenIsShowing = listScreen.listItems;
    },
    shareFB() {
      // eslint-disable-next-line no-undef
      FB.ui({
        method: 'share_open_graph',
        href: 'https://zing.vn/',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': window.location.href,
            'og:title': 'My Title',
            'og:description': 'Some description here',
            'og:image': 'img url'
          }
        })
        // method: 'share',
        // quote: 'Check out this awesome post!',
        // href: 'https://zing.vn/',
      }, function () { });
    },
    showResult() {
      this.totalPointBefore = this.listItem.items.reduce((accumulator, currentItem) => {
        if (currentItem.isPicked && currentItem.notUsePlastic) {
          return accumulator + currentItem.point;
        }
        return accumulator;
      }, 0);
      this.screenIsShowing = listScreen.result;
      localStorage.removeItem('items')
    },
    loadData() {
      const itemFromLocalStorage = localStorage.getItem('items');
      if (itemFromLocalStorage) {
        this.listItem = JSON.parse(itemFromLocalStorage);
      } else {
        this.listItem = JSON.parse(JSON.stringify(itemsData));
        localStorage.setItem('items', JSON.stringify(itemsData));
      }
      this.totalPoint = this.listItem.totalPoint || 0;
      this.totalPointBefore = this.listItem.totalPointBefore || 0;
      this.page = 0;
      this.listItemPaginate = this.listItem.items.slice(this.page, this.page + this.itemPerPage);
      this.listItemChosen = [],
        this.itemChosen = {};
      this.currentSlideIndex = 0;
      this.indexOfItemChosen = null;

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
.card-border {
  background-image: url('~/static/img/card_border.png');
}

.card-border-selected {
  background-image: url('~/static/img/card_border_selected.png') !important;
}

.zoom-out {
  height: 16px;
  width: auto;
  top: 10px;
  left: 10px;
}

.width-150 {
  width: 150px;
  /* min-width: 150px; */
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #FDFAF3;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-container {
  padding-bottom: 20px;
}

.swiper-pagination {
  margin-bottom: -15px;
}

.unpick {
  margin-right: 2%;
}

.w_100 {
  width: 100% !important;
}
</style>