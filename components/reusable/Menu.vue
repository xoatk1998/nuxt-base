<template>
    <div class="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-20 bg-cyan1">
        <div class="flex w-full justify-center cursor-pointer mt-7">
            <img class="mx-5 w-6 h-6" @click="$emit('closeMenu')" src="~/static/img/info/close_btn.png" alt="close_btn">
        </div>
        <div class="container mx-auto flex flex-col items-center px-4 mt-40">
            <a class="py-2 px1 text-white1 font-phu-du normal-case font-bold tracking-wide focus:text-blue1 focus:underline" href="/soando">SOẠN ĐỒ NÀO!</a>
            <a class="py-2 px1 text-white1 font-phu-du normal-case font-bold tracking-wide focus:text-blue1 focus:underline" href="/camket">TÔI CAM KẾT KIÊNG NHỰA</a>
            <a class="py-2 px1 text-white1 font-phu-du normal-case font-bold tracking-wide focus:text-blue1 focus:underline" href="/valimau">VALI MẪU</a>
            <a class="py-2 px1 text-white1 font-phu-du normal-case font-bold tracking-wide focus:text-blue1 focus:underline" href="/">TRỞ VỀ TRANG CHỦ</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>
