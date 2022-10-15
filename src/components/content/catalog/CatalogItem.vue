<template>
    <div v-bind:class="itemClass">
        <div class="img" @click="openModal">
            <img :src="img" alt="">
        </div>
        <div class="text">
            <div class="title" @click="openModal">{{ title }}</div>
            <div class="author">{{ author }}</div>
            <div class="buying" v-if="!isSold">
                <div class="prices" v-if="price!==priceDiscount">
                    <div class="price1">{{ price }}</div>
                    <div class="price2">{{ priceDiscount }}</div>
                </div>
                <div class="prices" v-else>
                    <div class="price2">{{ priceDiscount }}</div>
                </div>
                <div
                    class="buttonInCart"
                    v-if="inCart && !isLoading"
                    @click="changeInCart"
                >
                    <img :src="inCartImg" alt="">
                    <div class="buttonText">В корзине</div>
                </div>
                <div
                    class="buttonLoading"
                    v-else-if="isLoading"
                >
                    <img :src="loadingImg" alt="">
                    <div class="buttonText">Loading</div>
                </div>
                <div
                    class="button"
                    v-else
                    @click="changeInCart"
                >
                    <img :src="purchaseImg" alt="">
                    <div class="buttonText">Купить</div>

                </div>
            </div>
            <div
                class="sold"
                v-else
            >
                Продана на аукционе
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./catalog.scss"></style>

<script>
import inCart from './../../../assets/image/inCart.png'
import loading from './../../../assets/image/loading.png'
import purchase from './../../../assets/image/purchase.png'
import CatalogItemModal from "./CatalogItemModal.vue";

export default {
    name: 'CatalogItem',
    props: {
        item: Object,
        isLoading: Boolean,
        id: Number,
        img: String,
        title: String,
        author: String,
        price: String,
        priceDiscount: String,
        inCart: Boolean,
        isSold: Boolean,
        description: String,
        imagesAbout: Array
    },
    components: {CatalogItemModal},
    data() {
        return {
            isLoading: this.isLoading,
            inCartImg: inCart,
            loadingImg: loading,
            purchaseImg: purchase,
            id: this.id,
            img: this.img,
            title: this.title,
            author: this.author,
            price: this.price,
            priceDiscount: this.priceDiscount,
            inCart: this.inCart,
            isSold: this.isSold,
            description: this.description,
            imagesAbout: this.imagesAbout
        }
    },
    methods: {
        changeInCart() {
            setTimeout(() => {
                this.isLoading = !this.isLoading
                this.$emit("changeInCart", this.id)
            }, 2000)
            this.isLoading = !this.isLoading
        },
        openModal() {
            const options = {
                description: this.description,
                priceDiscount: this.priceDiscount,
                imagesAbout: this.imagesAbout
            };
            const style = {width: "60%", height: "auto", maxWidth: "1200px"};
            const events = {};
            this.$modal.show(CatalogItemModal, options, style, events);
        }
    },
    computed: {
        itemClass: function () {
            return this.isSold ? 'item itemIsSold' : 'item';
        }
    },
}
</script>
