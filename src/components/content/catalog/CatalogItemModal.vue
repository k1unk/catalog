<template>
    <div class="modal">
        <div class="description">{{ description }}</div>
        <div class="price">Price: {{ priceDiscount }}</div>
        <vueper-slides>
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image">
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<style lang="scss" src="./catalog.scss"></style>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'CatalogItemModal',
    props: {
        description: String,
        priceDiscount: String,
        imagesAbout: Array
    },
    components: {VueperSlides, VueperSlide},
    data() {
        return {
            description: this.description,
            priceDiscount: this.priceDiscount,
            imagesAbout: this.imagesAbout,
        }
    },
    computed: {
        slides() {
            return [...this.imagesAbout].map(e => {
                return {image: e}
            })
        }
    },
}
</script>
