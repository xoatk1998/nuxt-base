<template>
  <div
    class="flex flex-col items-center bg-white1 min-h-screen justify-between"
  >
    <!-- Screen Prepare Vali -->
    <div
      class="pickItem flex flex-col justify-between"
      v-show="this.screenIsShowing === listScreen?.listItems"
    >
      <div class="flex flex-col justify-between items-center">
        <h3
          class="font-black text-xl text-center font-livic-bold text-blue1 mt-20"
        >
          MỨC ẢNH HƯỞNG MÔI TRƯỜNG
        </h3>
        <h3 class="mx-4 mt-2 mb-5 font-bold text-center text-5xl text-cyan1">
          {{ formatNumber(this.totalPoint) }}
        </h3>
        <img
          v-if="this.totalPoint <= 10"
          src="~/static/img/image_header_lv1.png"
        />
        <img
          v-if="this.totalPoint > 10 && this.totalPoint <= 20"
          src="~/static/img/image_header_lv2.png"
        />
        <img
          v-if="this.totalPoint > 20 && this.totalPoint <= 30"
          src="~/static/img/image_header_lv3.png"
        />
        <img
          v-if="this.totalPoint > 30"
          src="~/static/img/image_header_lv4.png"
        />
        <p class="font-livic text-center text-blue1 mx-5 my-2">
          Bạn đang mang theo những sản phẩm nhựa dùng một lần nào dưới đây?
        </p>
        <swiper
          :mousewheel="{ releaseOnEdges: false }"
          :loop="false"
          direction="horizontal"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          v-if="this.listItemPaginate?.length"
        >
          <swiper-slide
            v-for="n in 3"
            :key="n"
            class="test"
            :class="{ w_100: true }"
          >
            <!-- list item in a page -->
            <div class="grid grid-cols-2 gap-4 my-3">
              <div
                v-if="listItemPaginate[0]"
                class="card-border bg-no-repeat bg-contain flex justify-center items-center relative w-full h-auto p-5"
                :class="{
                  'card-border-selected': !!listItemPaginate[0].isPicked,
                }"
              >
                <img
                  v-if="!listItemPaginate[0].notUsePlastic"
                  @click="fetchItemDetail(listItemPaginate[0].id, 0)"
                  class="w-auto h-24 max100"
                  :src="require(`~/static/img/${listItemPaginate[0].image}`)"
                />
                <img
                  v-else
                  class="w-auto h-24 max100"
                  :src="
                    require(`~/static/img/${listItemPaginate[0].itemReplace.imageOfItemReplace}`)
                  "
                />
                <div
                  @click="unpickItem(0)"
                  class="right-2 top-2 w-4 h-4 mt-2 absolute"
                ></div>
              </div>
              <div
                v-if="listItemPaginate[1]"
                class="card-border bg-no-repeat bg-contain flex justify-center items-center relative w-full h-auto p-5"
                :class="{
                  'card-border-selected': !!listItemPaginate[1].isPicked,
                }"
              >
                <img
                  v-if="!listItemPaginate[1].notUsePlastic"
                  @click="fetchItemDetail(listItemPaginate[1].id, 1)"
                  class="w-auto h-24 max100"
                  :src="require(`~/static/img/${listItemPaginate[1].image}`)"
                />
                <img
                  v-else
                  class="w-auto h-24 max100"
                  :src="
                    require(`~/static/img/${listItemPaginate[1].itemReplace.imageOfItemReplace}`)
                  "
                />
                <div
                  @click="unpickItem(1)"
                  class="right-2 top-2 w-4 h-4 mt-2 absolute"
                ></div>
              </div>
              <div
                v-if="listItemPaginate[2]"
                class="card-border bg-no-repeat bg-contain flex justify-center items-center relative w-full h-auto p-5"
                :class="{
                  'card-border-selected': !!listItemPaginate[2].isPicked,
                }"
              >
                <img
                  v-if="!listItemPaginate[2].notUsePlastic"
                  @click="fetchItemDetail(listItemPaginate[2].id, 2)"
                  class="w-auto h-24 max100"
                  :src="require(`~/static/img/${listItemPaginate[2].image}`)"
                />
                <img
                  v-else
                  class="w-auto h-24 max100"
                  :src="
                    require(`~/static/img/${listItemPaginate[2].itemReplace.imageOfItemReplace}`)
                  "
                />
                <div
                  @click="unpickItem(2)"
                  class="right-2 top-2 w-4 h-4 mt-2 absolute"
                ></div>
              </div>
              <div
                v-if="listItemPaginate[3]"
                class="card-border bg-no-repeat bg-contain flex justify-center items-center relative w-full h-auto p-5"
                :class="{
                  'card-border-selected': !!listItemPaginate[3].isPicked,
                }"
              >
                <img
                  v-if="!listItemPaginate[3].notUsePlastic"
                  @click="fetchItemDetail(listItemPaginate[3].id, 3)"
                  class="w-auto h-24 max100"
                  :src="require(`~/static/img/${listItemPaginate[3].image}`)"
                />
                <img
                  v-else
                  class="w-auto h-24 max100"
                  :src="
                    require(`~/static/img/${listItemPaginate[3].itemReplace.imageOfItemReplace}`)
                  "
                />
                <div
                  @click="unpickItem(3)"
                  class="right-2 top-2 w-4 h-4 mt-2 absolute"
                ></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="mb-8 mt-8 w-full flex justify-center">
        <button
          @click="completePrepare()"
          class="bg-button-border bg-center w-full h-12 bg-no-repeat bg-contain"
        >
          <span
            class="text-blue1 tracking-wide font-livic-bold normal-case font-bold"
            >ĐÃ SOẠN XONG</span
          >
        </button>
      </div>
    </div>

    <!-- Screen show item picked detail to choose replace item or not -->
    <div
      class="itemDetail flex flex-col items-center bg-black text-white min-h-screen z-50 justify-between"
      v-if="this.screenIsShowing === listScreen?.itemDetail"
    >
      <div class="fixed top-7 flex justify-between w-full px-3 z-20">
        <img
          @click="toggleMenu(true)"
          class="h-4 w-6 cursor-pointer"
          src="~/static/img/1x/back_to_home_black.png"
          alt="back_to_home"
        />
        <img
          @click="toggleInfo(true)"
          class="h-6 w-6 cursor-pointer"
          src="~/static/img/info/info_black.png"
          alt="back_to_home"
        />
      </div>
      <Info v-if="!!openInfo" @closeInfo="toggleInfo(false)" />
      <Menu v-if="!!openMenu" @closeMenu="toggleMenu(false)" />
      <div class="flex flex-col items-center">
        <h3
          class="font-bold text-xl text-center font-livic-bold text-white1 mt-12"
        >
          MỨC ẢNH HƯỞNG MÔI TRƯỜNG
        </h3>
        <h3 class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-white1">
          {{ this.itemChosen.point }}
        </h3>
        <img
          class="w-1/4 my-6"
          :src="require(`~/static/img/${itemChosen.image}`)"
        />
        <h5 class="font-bold text-2xl text-center font-phu-du text-white1">
          {{ this.itemChosen.name }}
        </h5>
        <h5 class="text-white1 font-livic mt-3 text-center w-90">
          {{ this.itemChosen.description }}
        </h5>
      </div>

      <div class="mb-5 w-full flex items-center flex-col">
        <button
          @click="showItemReplace()"
          class="bg-button-fill-white w-full bg-center h-12 bg-no-repeat bg-contain mb-3 mt-5"
        >
          <span class="text-black tracking-wide normal-case font-bold"
            >THAY LỰA CHỌN "XANH" HƠN</span
          >
        </button>
        <button
          @click="usePlastic()"
          class="bg-button-border-white w-full h-12 bg-center bg-no-repeat bg-contain"
        >
          <span class="text-white1 tracking-wide normal-case font-bold"
            >TÔI THÍCH DÙNG "NHỰA" CƠ!</span
          >
        </button>
      </div>
    </div>

    <!-- Screen show item replace -->
    <div
      class="itemDetail flex flex-col items-center min-h-screen"
      v-if="this.screenIsShowing === listScreen?.itemReplace"
    >
      <div class="flex flex-col items-center">
        <h3
          class="font-bold text-xl text-center font-livic-bold text-blue1 mt-12"
        >
          MỨC ẢNH HƯỞNG MÔI TRƯỜNG
        </h3>
        <swiper
          class="swipperReplace"
          :mousewheel="{ releaseOnEdges: false }"
          :loop="false"
          direction="horizontal"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :navigation="true"
          @slideChange="onSlideChangeItemReplace"
        >
          <swiper-slide
            v-for="n in itemChosen.listItemReplace.length"
            :key="n"
            :class="{ w_100px: true }"
          >
            <div class="flex flex-col items-center !w-full">
              <h3
                class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-cyan1"
              >
                {{ itemChosen.listItemReplace[n - 1].pointOfItemReplace }}
              </h3>
              <img
                class="imageReplace my-10"
                :src="
                  require(`~/static/img/${
                    itemChosen.listItemReplace[n - 1].imageOfItemReplace
                  }`)
                "
              />
              <h5 class="font-bold text-2xl text-center font-phu-du text-blue1 w-90">
                {{ itemChosen.listItemReplace[n - 1].nameOfItemReplace }}
              </h5>
              <h5 class="text-blue1 font-livic mt-3 text-center w-90">
                {{ itemChosen.listItemReplace[n - 1].descriptionOfItemReplace }}
              </h5>
              <button
                @click="chooseItemReplace(n - 1)"
                class="bg-button bg-center h-12 bg-no-repeat bg-contain mb-3 mt-5"
              >
                <span class="text-white1 tracking-wide normal-case font-bold"
                  >DÙNG LỰA CHỌN NÀY</span
                >
              </button>
              <button
                @click="usePlastic()"
                class="bg-button-border bg-center w-full h-12 bg-no-repeat bg-contain mb-8"
              >
                <span class="text-blue1 tracking-wide normal-case font-bold"
                  >TÔI THÍCH DÙNG "NHỰA" CƠ!</span
                >
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Screen list item picked -->
    <div
      class="itemDetail flex flex-col items-center min-h-screen justify-between"
      v-if="this.screenIsShowing === listScreen?.itemsPicked"
    >
      <div class="flex flex-col items-center">
        <h3
          class="font-bold text-xl text-center font-livic-bold text-blue1 mt-12"
        >
          MỨC ẢNH HƯỞNG MÔI TRƯỜNG
        </h3>
        <h3 class="mx-4 mt-2 mb-4 font-bold text-center text-5xl text-cyan1">
          {{ this.totalPoint.toFixed(2) }}
        </h3>
        <div class="flex flex-row justify-between w-90 mt-5">
          <h3
            class="uppercase font-bold text-lg text-center font-phu-du text-blue1"
          >
            Sản phẩm đã chọn
          </h3>
          <h3
            class="uppercase font-bold text-lg text-center font-phu-du text-blue1"
          >
            Mức hại
          </h3>
        </div>
        <div class="w-90 flex justify-center my-3">
          <img src="~/static/img/hr_blue.png" alt="hr" />
        </div>
        <table class="table-auto w-90">
          <tbody>
            <tr
              class="h-10"
              v-for="(item, index) in listItemChosen"
              :key="index"
            >
              <td>
                <div
                  class="relative w-8 h-8 bg-checkbox bg-no-repeat bg-contain"
                >
                  <img
                    class="zoom-out absolute"
                    :src="
                      require(`~/static/img/${item.itemReplace.imageOfItemReplace}`)
                    "
                    v-if="item.notUsePlastic"
                  />
                  <img
                    class="zoom-out absolute"
                    :src="require(`~/static/img/${item.image}`)"
                    v-else
                  />
                </div>
              </td>

              <td class="pl-2 font-livic text-blue1" v-if="item.notUsePlastic">
                {{ item.itemReplace.nameOfItemReplace }}
              </td>
              <td class="pl-2 font-livic text-blue1" v-else>{{ item.name }}</td>
              <td class="font-livic text-blue1" v-if="item.notUsePlastic">
                {{ item.itemReplace.pointOfItemReplace }}
              </td>
              <td class="font-livic text-blue1" v-else>{{ item.point }}</td>
            </tr>
          </tbody>
        </table>
        <div class="w-90 flex justify-center my-3">
          <img src="~/static/img/hr_blue.png" alt="hr" />
        </div>
        <h5 class="font-livic text-blue1 text-center mx-8">
          Bạn đang mang theo
          <strong>{{ this.listItemChosen.length || 0 }} sản phẩm</strong> nhựa
          dùng một lần. Bạn chắc chắn với lựa chọn trên?
        </h5>
      </div>
      <div class="mb-5 w-full flex items-center flex-col">
        <button
          @click="backToPreparation()"
          class="bg-button-border bg-center w-full h-12 bg-no-repeat bg-contain mb-3"
        >
          <span class="text-blue1 tracking-wide normal-case font-bold"
            >ĐỂ TÔI CÂN NHẮC THÊM!</span
          >
        </button>

        <button
          @click="showResult()"
          class="bg-button-border bg-center w-full h-12 bg-no-repeat bg-contain mb-3"
        >
          <span class="text-blue1 tracking-wide normal-case font-bold"
            >TÔI CHẮC CHẮN VỚI LỰA CHỌN NÀY</span
          >
        </button>
      </div>
    </div>

    <!-- Screen result of preparation -->
    <div
      class="itemDetail flex flex-col items-center min-h-screen justify-between bg-blue1"
      v-if="this.screenIsShowing === listScreen?.result"
    >
      <div class="flex flex-col items-center justify-center">
        <div>
          <img class="imageHeader" :src="getImageResult(this.totalPoint)" />
          <h4
            class="font-livic-bold text-white1 text-center ml-12 mr-12 mt-10 uppercase tracking-tighter"
            v-html="getResultText(this.totalPoint)"
          ></h4>
          <h4
            class="font-livic-bold text-cyan1 text-7xl text-center font-bold mb-5"
          >
            {{ formatNumber(this.totalPoint) }}
          </h4>
          <h4
            class="font-livic-bold text-white1 text-center ml-24 mr-24 mt-4 uppercase text-sm tracking-tighter"
          >
            Trước khi "kiêng nhựa",
          </h4>
          <h4
            class="font-livic-bold text-white1 text-center ml-18 mr-18 uppercase text-sm tracking-tighter"
          >
            điểm hại môi trường của bạn là
          </h4>
          <h4
            class="font-livic-bold text-white1 text-center mx-8 uppercase text-xl"
          >
            {{ formatNumber(this.totalPointBefore) }}
          </h4>
        </div>
      </div>
      <div class="mb-5 w-full flex items-center flex-col">
        <!-- <button @click="shareFB()" class="bg-button-fill-white bg-center w-full h-12 bg-no-repeat bg-contain mb-3 mt-5">
          <span class="text-blue1 tracking-wide font-livic-bold normal-case font-bold">Chia sẻ thành quả "kiêng nhựa"</span>
        </button> -->
        <button
          class="bg-button-fill-white bg-center w-full share-btn bg-no-repeat bg-contain mb-3 mt-5"
        >
          <ShareNetwork
            network="facebook"
            :url="getSharingUrl()"
            hashtags="kiengnhua"
          >
            <span
              class="text-blue1 tracking-tigher font-livic-bold normal-case font-bold"
              >CHIA SẺ THÀNH QUẢ</span
            >
          </ShareNetwork>
        </button>
        <button
          @click="routeTo('/')"
          class="bg-button-border-white w-full h-12 bg-center bg-no-repeat bg-contain"
        >
          <span class="text-white1 tracking-wide normal-case font-bold"
            >TRỞ VỀ TRANG CHỦ</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import itemsData from "~/static/listItem.json";
import { Navigation, Pagination } from "swiper";
import Info from "../../components/reusable/Info.vue";
import Menu from "../../components/reusable/Menu.vue";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const listScreen = {
  listItems: "LIST_ITEM",
  itemDetail: "ITEM_DETAIL",
  itemReplace: "ITEM_REPLACE",
  itemsPicked: "ITEMS_PICKED",
  result: "RESULT",
};
export default {
  head: {
    meta: [],
  },
  components: {
    Swiper,
    SwiperSlide,
    Info,
    Menu,
  },
  name: "Prepare",
  watch: {
    page(newPage) {
      if (newPage >= 3) return;
      let startIndex = newPage * this.itemPerPage;
      console.log();
      let endIndex =
        (newPage + 1) * this.itemPerPage > this.listItem.items.length
          ? this.listItem.items.length
          : (newPage + 1) * this.itemPerPage;
      this.listItemPaginate = this.listItem.items.slice(startIndex, endIndex);
      console.log(this.listItemPaginate, "-list item", startIndex, endIndex);
    },
    itemChosen() {
      const expireAt = this.addMinute(20);
      localStorage.setItem(
        "items",
        JSON.stringify({ ...this.listItem, expireAt })
      );
    },
    totalPoint(newValue) {
      this.listItem.totalPoint = newValue;
      let expireAt = this.addMinute(20);
      localStorage.setItem(
        "items",
        JSON.stringify({ ...this.listItem, expireAt })
      );
    },
    totalPointBefore(newValue) {
      this.listItem.totalPointBefore = newValue;
      let expireAt = this.addMinute(20);
      localStorage.setItem(
        "items",
        JSON.stringify({ ...this.listItem, expireAt })
      );
    },
    screenIsShowing(newValue) {
      window.scrollTo(0,0);
      let currentItem = localStorage.getItem("items");
      if (newValue === listScreen.listItems && !currentItem) {
        this.loadData();
      }
    },
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
      openMenu: false,
    };
  },

  mounted() {
    // this.setup()
    this.loadData();
  },
  methods: {
    getSharingUrl() {
      return `https://kiengnhua.vn/result/${this.totalPoint}/${this.totalPointBefore}`;
    },
    onSwiper(swiper) {
      console.log("on swiper", swiper);
    },
    addMinute(minute) {
      let date = new Date();
      return +date.setMinutes(date.getMinutes() + minute);
    },
    onSlideChange(swiper) {
      console.log(swiper.realIndex, this.currentSlideIndex, "--index");
      if (swiper.realIndex > this.currentSlideIndex) {
        this.page += Math.abs(this.currentSlideIndex - swiper.realIndex);
      } else {
        this.page -= Math.abs(this.currentSlideIndex - swiper.realIndex);
      }
      this.currentSlideIndex = swiper.realIndex;
    },
    fetchItemDetail(itemId, index) {
      this.itemChosen = this.listItem.items.find((item) => item.id === itemId);
      if (this.itemChosen && !this.itemChosen.isPicked) {
        this.totalPoint += +this.itemChosen.point;
        console.log(index, this.listItemPaginate[index], "--inde");
        this.listItemPaginate[index].isPicked = true;
        this.itemChosen.isPicked = true;
        this.indexOfItemChosen = index;
        this.screenIsShowing = listScreen.itemDetail;
      }
    },

    routeTo(path) {
      this.$router.push(path);
    },

    getImageResult(point) {
      if (point <= 10) {
        return require("~/static/img/level1.png");
      }
      if (point <= 20 && point > 10) {
        return require("~/static/img/level2.png");
      }
      if (point <= 30 && point > 20) {
        return require("~/static/img/level3.png");
      }
      if (point > 30) {
        return require("~/static/img/level4.png");
      }
    },

    getResultText(point) {
      if (point <= 10) {
        return 'Bạn đã "kiêng nhựa" thành công với điểm hại môi trường là';
      }
      if (point <= 20 && point > 10) {
        return 'Thêm chút nỗ lực, bạn sẽ <br> "kiêng nhựa" tốt hơn cả điểm bên dưới';
      }
      if (point <= 30 && point > 20) {
        return 'Còn rất nhiều sản phẩm thay thế cho hành lý của bạn "xanh" hơn';
      }
      if (point > 30) {
        return 'Hãy "kiêng nhựa" ngay và luôn để giảm điểm hại môi trường dưới đây';
      }
    },

    unpickItem(index) {
      if (!this.listItemPaginate[index].isPicked) return;
      if (this.listItemPaginate[index].notUsePlastic) {
        this.totalPoint -=
          this.listItemPaginate[index].itemReplace.pointOfItemReplace;
      } else {
        this.totalPoint -= this.listItemPaginate[index].point;
      }
      this.listItemPaginate[index].isPicked = false;
      this.listItemPaginate[index].notUsePlastic = false;
    },
    onSlideChangeItemReplace() {},

    completePrepare() {
      this.listItemChosen = this.listItem.items.filter((item) => item.isPicked);
      this.screenIsShowing = listScreen.itemsPicked;
    },

    showItemReplace() {
      this.screenIsShowing = listScreen.itemReplace;
    },
    chooseItemReplace(index) {
      this.listItemPaginate[this.indexOfItemChosen].notUsePlastic = true;
      this.itemChosen.notUsePlastic = true;
      this.itemChosen.indexOfItemReplace = index;
      this.itemChosen.itemReplace = this.itemChosen.listItemReplace[index];
      this.totalPoint =
        this.totalPoint -
        this.itemChosen.point +
        this.itemChosen.itemReplace.pointOfItemReplace;
      this.backToPreparation();
    },
    usePlastic() {
      this.listItemPaginate[this.indexOfItemChosen].notUsePlastic = false;
      this.itemChosen.notUsePlastic = false;
      this.itemChosen.indexOfItemReplace = null;
      this.backToPreparation();
    },
    formatNumber(number) {
      return +number.toFixed(2);
    },
    backToPreparation() {
      this.screenIsShowing = listScreen.listItems;
    },
    // shareFB() {
    //   if (this.$fb) {
    //     this.$fb.ui({
    //       method: 'share',
    //       href: 'https://zing.vn' // Replace with the URL you want to share
    //     }, function(response){});
    //   } else {
    //     console.error('Facebook SDK not initialized');
    //   }
    // },
    showResult() {
      this.totalPointBefore = this.listItem.items.reduce(
        (accumulator, currentItem) => {
          if (currentItem.isPicked) {
            return accumulator + currentItem.point;
          }
          return accumulator;
        },
        0
      );
      this.screenIsShowing = listScreen.result;
      localStorage.removeItem("items");
    },
    loadData() {
      const itemFromLocalStorage = localStorage.getItem("items");

      if (
        itemFromLocalStorage &&
        itemFromLocalStorage.expireAt < new Date().valueOf()
      ) {
        this.listItem = JSON.parse(itemFromLocalStorage);
      } else {
        this.listItem = JSON.parse(JSON.stringify(itemsData));
        const expireAt = this.addMinute(20);
        localStorage.setItem(
          "items",
          JSON.stringify({ ...this.listItem, expireAt })
        );
      }
      this.totalPoint = this.listItem.totalPoint || 0;
      this.totalPointBefore = this.listItem.totalPointBefore || 0;
      this.page = 0;
      this.listItemPaginate = this.listItem.items.slice(
        this.page,
        this.page + this.itemPerPage
      );
      (this.listItemChosen = []), (this.itemChosen = {});
      this.currentSlideIndex = 0;
      this.indexOfItemChosen = null;
    },
    toggleInfo(value) {
      this.openInfo = !!value;
    },
    toggleMenu(value) {
      this.openMenu = !!value;
    },
  },
};
</script>

<style scoped>
.w-90 {
  width: 90%;
}

.card-border {
  background-image: url("~/static/img/card_border.png");
}

.card-border-selected {
  background-image: url("~/static/img/card_border_selected.png") !important;
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
  background: #fdfaf3;

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

.max100 {
  max-width: 100px !important;
}

.bg-button-border {
  background-image: url("~/static/img/button/button_border.png");
  width: 300px;
}

.bg-button {
  background-image: url("~/static/img/button/button.png");
  width: 300px;
}

.bg-button-border-white {
  background-image: url("~/static/img/button/button_border_white.png");
  width: 300px;
}

.bg-button-fill-white {
  background-image: url("~/static/img/button/button_fill_white.png");
  width: 300px;
}

.bg-checkbox {
  background-image: url("~/static/img/1x/checkbox.png");
}

a.share-network-facebook {
  width: 100%;
}

/*
.swiper-container {
  position: static !important;
} */

.swipperReplace {
  width: 390px;
}

.swipperReplace > .swiper-pagination {
  top: 48% !important;
}

.swiper-slide-active {
  display: flex;
  flex-direction: column;
}
.imageHeader {
  width: 66%;
  margin-left: 17%;
  margin-top: 22%;
}
.w_100px {
  width: 390px !important;
}
button {
  font-family: "LivvicBold" !important;
}

.share-btn {
  height: 3.25rem;
}

.imageReplace {
  min-width: 50px;
  max-height: 200px;
}
</style>
