<template>
    <div class="content">
        <router-view
            :items="items"
            @changeInCart="changeInCart"
            :isLoading="isLoading"
        />
    </div>
</template>

<style lang="scss" src="./content.scss"></style>

<script>

export default {
    name: 'Content',
    props: {
        items: Object,
        isLoading: Array
    },
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
}
</script>
