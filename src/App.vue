<template>
    <div class="app">
        <Header @search="search"/>
        <Content
            :items="searchedItems"
            @changeInCart="changeInCart"
            :isLoading="isLoading"
        />
        <Footer/>
    </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Content from "./components/content/Content.vue";
import Footer from "./components/footer/Footer.vue";

import i1 from "./assets/image/i1.png";
import i2 from "./assets/image/i2.png";
import i3 from "./assets/image/i3.png";
import i4 from "./assets/image/i4.png";

export default {
    name: "App",
    components: {Footer, Content, Header},
    data() {
        return {
            searchQuery: '',
            items: [
                {
                    id: 1,
                    img: i1,
                    title: "«Рождение Венеры»",
                    author: "Сандро Боттичелли",
                    price: "2 000 000 $",
                    priceDiscount: "1 000 000 $",
                    inCart: false,
                    isSold: false,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    imagesAbout: ["https://static.kulturologia.ru/files/u4456/44560278.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc3HRSzDVFy37wVBUQz6zl32TCpuE1ODvOg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUAvYgBk3RaR_ZSwvtjFyzGRrHPwEAtk8FQ&usqp=CAU", "https://cf2.ppt-online.org/files2/slide/u/UsazmdQ58w1BcujnVTtKP3JCpx7figOZ0hbeLSkI4r/slide-0.jpg"]
                },
                {
                    id: 2,
                    img: i2,
                    title: "«Тайная вечеря»",
                    author: "Леонардо Да Винчи",
                    price: "3 000 000 $",
                    priceDiscount: "3 000 000 $",
                    inCart: false,
                    isSold: false,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    imagesAbout: ["https://static.kulturologia.ru/files/u4456/44560278.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc3HRSzDVFy37wVBUQz6zl32TCpuE1ODvOg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUAvYgBk3RaR_ZSwvtjFyzGRrHPwEAtk8FQ&usqp=CAU", "https://cf2.ppt-online.org/files2/slide/u/UsazmdQ58w1BcujnVTtKP3JCpx7figOZ0hbeLSkI4r/slide-0.jpg"]
                },
                {
                    id: 3,
                    img: i3,
                    title: "«Сотворение Адама»",
                    author: "Микеланджело",
                    price: "6 000 000 $",
                    priceDiscount: "5 000 000 $",
                    inCart: true,
                    isSold: false,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    imagesAbout: ["https://static.kulturologia.ru/files/u4456/44560278.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc3HRSzDVFy37wVBUQz6zl32TCpuE1ODvOg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUAvYgBk3RaR_ZSwvtjFyzGRrHPwEAtk8FQ&usqp=CAU", "https://cf2.ppt-online.org/files2/slide/u/UsazmdQ58w1BcujnVTtKP3JCpx7figOZ0hbeLSkI4r/slide-0.jpg"]
                },
                {
                    id: 4,
                    img: i4,
                    title: "«Урок анатомии»",
                    author: "Рембрандт",
                    price: "1",
                    priceDiscount: "1",
                    inCart: false,
                    isSold: true,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    imagesAbout: ["https://static.kulturologia.ru/files/u4456/44560278.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc3HRSzDVFy37wVBUQz6zl32TCpuE1ODvOg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUAvYgBk3RaR_ZSwvtjFyzGRrHPwEAtk8FQ&usqp=CAU", "https://cf2.ppt-online.org/files2/slide/u/UsazmdQ58w1BcujnVTtKP3JCpx7figOZ0hbeLSkI4r/slide-0.jpg"]
                },
            ],
            isLoading: []
        }
    },
    methods: {
        search(searchQuery) {
            this.searchQuery = searchQuery
        },
        changeInCart(id) {
            this.items = [...this.items].map(e => {
                if (e.id === id) {
                    e.inCart = !e.inCart
                }
                return e
            })
        }
    },
    computed: {
        searchedItems() {
            return this.items.filter(
                e => {
                    return e.title.toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                }
            )
        }
    },
    watch: {
        items: (val, oldVal) => {
            window.localStorage.setItem('catalog', JSON.stringify(val))
        }
    },
    mounted: function () {
        let catalog = window.localStorage.getItem('catalog');
        if (JSON.parse(catalog)) {
            this.items = JSON.parse(catalog)
        }
    },
    created() {
        this.isLoading = [...this.items].map(e => {
            return false
        })
    }
}
</script>

<style lang="scss" scoped>
@import "app.scss";

</style>

