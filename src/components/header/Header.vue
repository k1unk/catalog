<template>
    <div class="header">
        <div class="headerWrapper">
            <div class="list">
                <HeaderListItem
                    v-for="item in list"
                    :key="item.id"
                    :item="item"
                />
            </div>
            <div class="searchForm">
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Поиск по названию картины"
                >
                <div
                    class="button"
                    @click="search"
                >
                    Найти
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./header.scss"></style>

<script>

import HeaderListItem from "./HeaderListItem.vue";

export default {
    name: 'Header',
    components: {
        HeaderListItem
    },
    data() {
        return {
            searchQuery: "",
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
    methods: {
        search() {
            this.$emit('search', this.searchQuery)
        }
    },
}
</script>
