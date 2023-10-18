<template>
    <div class="fixed w-full min-h-full top-0 left-0 z-20 cursor-pointer bg-white1 bg-no-repeat bg-cover bg-center bg-info">
        <div class="flex w-full justify-center cursor-pointer mt-7">
            <img class="mx-5 w-6 h-6" @click="$emit('closeInfo')" src="~/static/img/info/close_btn.png" alt="close_btn">
        </div>
        <div class="container flex flex-col items-center px-4 mt-10">
            <img src="~/static/img/info/kieng_nhua_la_cai_chi.png" title="kieng nhua la cai chi"
                alt="kieng_nhua_la_cai_chi">
            <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5 !normal-case">Website Kiêng Nhựa liệt kê
                những
                vật phẩm nhựa dùng một lần phổ biến nhất và định lượng
                mức hại môi trường của chúng dựa trên từng thang điểm khoa học, từ đó đề xuất những sản phẩm thay thế thân
                thiện môi trường hơn. Bảng định lượng đo mức hại môi trường của từng vật phẩm theo <strong>điểm từ 0 tới
                    10</strong>, trong
                đó <strong>0 điểm</strong> là những
                lựa chọn có <strong>tác động tiêu cực ít nhất</strong>, và <strong>10 điểm</strong> có tác động <strong>tiêu
                    cực nhiều nhất</strong>. </p>
            <p class="break-words text-center text-blue1 font-livic text-base font-normal mt-5">Định lượng này được dựa
                trên nghiên cứu từ <strong>The Futouris - “Single-Use Plastic Guidance 2021”</strong>. Download nghiên cứu
                <a class=" underline font-bold" href="#">tại đây.</a> </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Info'
}
</script>

<style scoped>
.bg-info {
    background-image: url('~/static/img/info/info_bg.png');
}
</style>
  