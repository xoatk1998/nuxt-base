<template>
  <div>
    <h1>Result for Param pointResult: {{ pointResult }}</h1>
    <h1>Result for Param pointBefore: {{ pointBefore }}</h1>
    <!-- <h1>Result for Param Two: {{ this.params.point_before }}</h1> -->
    
    <!-- Your page content here -->
    In this example, $route.params.param_one and $route.params.param_two retrieve the dynamic parameters param_one and
    param_two from the URL, respectively. You can use these parameters to customize the content of the page based on the
    dynamic values provided in the route.

    By following this structure, you can handle routes with two parameters, each containing multiple words, in your
    Nuxt.js application.
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
    const pointResult = params.point_result;
    const pointBefore = params.point_before;
    return {pointBefore, pointResult};
  },
  head() {
    return {
      title: this.pointBefore, // Use the data variable in the title
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getTitle(this.pointBefore) // Use the data variable in the meta description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.getDescription(this.pointBefore) // Use the data variable in the meta description
        },
      ]
    };
  },
  methods: {
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
        return `Trước khi kiêng nhựa, điểm hại môi trường của bạn là ${pointBefore}`
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





