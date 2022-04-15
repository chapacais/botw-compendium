<template>
    <Header class="container" :sectionTitle="this.$options.name" />
    <div class="creatures-food">
        <h3>Creatures that <span>can</span> be used as food</h3>
        <GridList :categoryUrl="this.$options.name.toLowerCase()" creatures="food"/>
    </div>
    <div class="creatures-nonfood">
        <h3 class="creatures-nonfood__title">Creatures that <span>cannot</span> be used as food</h3>
        <GridList :categoryUrl="this.$options.name.toLowerCase()" creatures="non_food"/>
    </div>
    <Footer />
</template>

<script>
import Header from '../header/Header.vue';
import GridList from '../shared/grid-list/GridList.vue';
import Footer from '../footer/Footer.vue';

export default {
    name: 'Creatures',
    components: {
        Header,
        GridList,
        Footer
    }
}
</script>

<style scoped>
    h3 {
        font-size: 24px;
        margin-top: 20px;
        text-align: center;
        text-decoration: underline;
    }

    span {
        font-weight: bold;
        text-transform: uppercase;
    }

    .creatures-food {
        margin-bottom: 40px;
    }

    .creatures-nonfood {
        border-top: 2px solid rgba(0, 0, 0, 0.3);
    }

    .creatures-nonfood__title {
        margin-top: 40px;
    }
</style>