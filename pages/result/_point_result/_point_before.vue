<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pointResult: '0',
      pointBefore: '0'
    }
  },
  // async fetch({ params }) {
  //   return { params };
  // },
  async asyncData({ params }) {
    console.log(params, '-----params')
    const pointResult = formatNumber(params.point_result);
    const pointBefore = formatNumber(params.point_before);
    return {pointBefore, pointResult};
  },
  head() {
    return {
      title: this.pointBefore, // Use the data variable in the title
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getTitle(this.pointResult, pointBefore) // Use the data variable in the meta description
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
    getTitle(pointResult, pointBefore) {
      if (pointResult <= 10) {
        return `Bạn đã kiêng nhựa thành công với số điểm ${pointResult}, thật xuất sắc!`
      }
      if (pointResult <= 20 && pointResult > 10) {
        return `Điểm kiêng nhựa của bạn là ${pointResult}. Thêm chút nỗ lực, bạn sẽ kiêng nhựa tốt hơn cả số điểm này đó!. Trước khi kiêng nhựa, mức ảnh hưởng môi trường môi trường của bạn là ${pointBefore}`
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
        return `Trước khi kiêng nhựa, điểm hại môi trường của bạn là ${pointBefore}`
      }
      if (pointResult <= 20 && pointResult > 10) {
        return '';
        // return `Thêm chút nỗ lực, bạn sẽ kiêng nhựa tốt hơn cả số điểm này đó!. Trước khi kiêng nhựa, mức ảnh hưởng môi trường môi trường của bạn là ${pointBefore}`
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
        return 'https://i.ibb.co/zxBBxYX/review-Artboard-2.png';
      }
      if (pointResult <= 20 && pointResult > 10) {
        return 'https://i.ibb.co/zJxtXKS/review-Artboard-7.png';
      }
      if (pointResult <= 30 && pointResult > 20) {
        return 'https://i.ibb.co/302r5hB/review-Artboard-8.png';
      }
      if (pointResult > 30) {
        return 'https://i.ibb.co/51fjg6j/review-Artboard-9.png';
      }
    }
  }
}
</script>





