<template>
    <div class="catalog">
        <div class="catalogWrapper">
            <div class="headerCatalog">
                Картины эпохи возрождения
            </div>
            <div class="items">
                <CatalogItem
                    v-for="item in items2"
                    :key="item.id"
                    :id="item.id"
                    :img="item.img"
                    :title="item.title"
                    :author="item.author"
                    :price="item.price"
                    :priceDiscount="item.priceDiscount"
                    :inCart="item.inCart"
                    :isSold="item.isSold"
                    :description="item.description"
                    :imagesAbout="item.imagesAbout"
                    :isLoading="isLoading[item.id-1]"
                    @changeInCart="changeInCart"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./catalog.scss"></style>

<script>

import CatalogItem from "./CatalogItem.vue";

export default {
    name: 'Catalog',
    props: {
        items: Object,
        isLoading: Array
    },
    components: {CatalogItem},
    data() {
        return {
            items: this.items,
            isLoading: this.isLoading
        }
    },
    methods: {
        changeInCart(id) {
            this.$emit("changeInCart", id)
        }
    },
    computed: {
        items2() {
            return this.items
        }
    },
}
</script>
