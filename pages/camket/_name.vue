<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import Home from '../index.vue';
export default {
  data() {
    return {
      name: ''
    }
  },
  components: {
    Home
  },
  async asyncData({ params }) {
    const name = params.name
    return {name};
  },
  head() {
    return {
      title: 'Cam kết',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getTitle(this.name) // Use the data variable in the meta description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://i.ibb.co/qxpZVKj/review-Artboard-10.png'
        },
      ]
    };
  },
  methods: {
    formatNumber(number) {
      return +(number).toFixed(2);
    },
    getTitle(name) {
      return `Từ nay! Hãy gọi ${name} là cao thủ “KIÊNG NHỰA”`;
    },
  }
}
</script>





