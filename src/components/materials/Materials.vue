<template>
    <Header class="container" :sectionTitle="this.$options.name" />
    <GridList :categoryUrl="this.$options.name.toLowerCase()"/>
    <Footer />
</template>

<script>
import Header from '../header/Header.vue';
import GridList from '../shared/grid-list/GridList.vue';
import Footer from '../footer/Footer.vue'

export default {
    name: 'Materials',
    components: {
        Header,
        GridList,
        Footer
    }
}
</script>

<style scoped>

</style>