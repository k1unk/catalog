<template>
    <div class="footer">
        <div class="footerWrapper">
            <div class="list">
                <FooterListItem
                    v-for="item in list"
                    :key="item.id"
                    :item="item"/>
            </div>
            <div class="phoneAndLocation">
                <div class="phone">
                    <img :src="call" alt="">
                    <div class="text">+7 (812) 555-55-55</div>
                </div>
                <div class="location">
                    <img :src="geo" alt="">
                    <div class="text">г. Санкт-Петербург, ул. Ефимова, 3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./footer.scss"></style>

<script>
import FooterListItem from "./FooterListItem.vue";
import geo from './../../assets/image/geo.png'
import call from './../../assets/image/call.png'
export default {
    name: 'Footer',
    components: {FooterListItem},
    data() {
        return {
            geo: geo,
            call: call,
            list: [
                {
                    id: 1,
                    name: "Каталог",
                    link: "/catalog"
                },
                {
                    id: 2,
                    name: "Доставка",
                    link: "/catalog"
                },
                {
                    id: 3,
                    name: "Оплата",
                    link: "/catalog"
                },
                {
                    id: 4,
                    name: "Контакты",
                    link: "/catalog"
                },
                {
                    id: 5,
                    name: "О компании",
                    link: "/catalog"
                },

            ],
        }
    },
}
</script>
