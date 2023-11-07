<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import Home from '../../index.vue';
export default {
  data() {
    return {
      pointResult: '0',
      pointBefore: '0'
    }
  },
  components: {
    Home
  },
  async asyncData({ params }) {
    const pointResult = (+params.point_result).toFixed(2);
    const pointBefore = (+params.point_before).toFixed(2);
    return {pointBefore, pointResult};
  },
  head() {
    return {
      title: 'Kết quả', // Use the data variable in the title
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getTitle(this.pointResult) // Use the data variable in the meta description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.getDescription(this.pointResult, this.pointBefore) // Use the data variable in the meta description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.getImageUrl(this.pointResult) // Use the data variable in the meta description
        },
      ]
    };
  },
  methods: {
    formatNumber(number) {
      return +(number).toFixed(2);
    },
    getTitle(pointResult) {
      if (pointResult <= 10) {
        return `Bạn đã kiêng nhựa thành công với số điểm ${pointResult}, thật xuất sắc!`
      }
      if (pointResult <= 20 && pointResult > 10) {
        return `Điểm kiêng nhựa của bạn là ${pointResult}`
      }
      if (pointResult <= 30 && pointResult > 20) {
        return `Điểm kiêng nhựa của bạn là ${pointResult}`
      }
      if (pointResult > 30) {
        return `Điểm kiêng nhựa của bạn là ${pointResult}`
      }
    },
    getDescription(pointResult, pointBefore) {
      if (pointResult <= 10) {
        return `Trước khi kiêng nhựa, mức ảnh hưởng môi trưởng của bạn là ${pointBefore}`
      }
      if (pointResult <= 20 && pointResult > 10) {
        return `Thêm chút nỗ lực, bạn sẽ kiêng nhựa tốt hơn cả số điểm này đó!. Trước khi kiêng nhựa, mức ảnh hưởng môi trường môi trường của bạn là ${pointBefore}`
      }
      if (pointResult <= 30 && pointResult > 20) {
        return `Còn rất nhiều sản phẩm thay thế cho hành lý của bạn “xanh” hơn. Trước khi kiêng nhựa, mức ảnh hưởng môi trường môi trường của bạn là ${pointBefore}`
      }
      if (pointResult > 30) {
        return `Hãy “kiêng nhựa” ngay và luôn để giảm mức ảnh hưởng môi trường môi trường!`
      }
    },
    getImageUrl(pointResult) {
      if (pointResult <= 10) {
        return 'https://i.ibb.co/djLMMg7/review-WWF-Thumbnail-Lv4.png';
      }
      if (pointResult <= 20 && pointResult > 10) {
        return 'https://i.ibb.co/qn2VHHZ/review-WWF-Thumbnail-Lv3.png';
      }
      if (pointResult <= 30 && pointResult > 20) {
        return 'https://i.ibb.co/5hqNKJ7/review-WWF-Thumbnail-Lv2.png';
      }
      if (pointResult > 30) {
        return 'https://i.ibb.co/0hQNj8G/review-WWF-Thumbnail-Lv1.png';
      }
    }
  }
}
</script>





