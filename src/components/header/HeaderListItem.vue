<template>
    <router-link :to="link" class="item">
     {{name}}
    </router-link>

</template>

<style lang="scss" src="./header.scss"></style>

<script>

export default {
    name: 'HeaderListItem',
    props: {
        item: Object
    },
    data() {
        return {
            id: this.item.id,
            name: this.item.name,
            link: this.item.link
        }
    },
}
</script>
