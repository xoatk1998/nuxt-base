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
          content: `Kieng thanh cong voi ${this.pointResult} diem, truoc do ${this.pointBefore}` // Use the data variable in the meta description
        }
      ]
    };
  }
  // head: {
  //   title: `Ket qua cua ${this.pointBefore}`,
  //   meta: [
  //     {
  //       hid: 'og:description',
  //       name: 'og:description',
  //       content: `my website description ${this.pointBefore} and before ${this.pointBefore}`
  //     },
  //     // {
  //     //   hid: 'og:title',
  //     //   name: 'og:title',
  //     //   content: `title ${this.params.point_result} and before ${this.params.point_before}`
  //     // }
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  // },
}
</script>





