<template>
    <Header class="container" sectionTitle="(almost) Everything there is in Hyrule."/>
    <div>
        <img class="splash-art" src="https://gadhagod.github.io/Hyrule-Compendium-API/assets/light_logo.png" alt="Splash art of Link using a bow">
        <article>
            <h2>About</h2>
            <p>Hello! This is a compendium web app that contains a lot of in-game information about <strong>The Legend of Zelda: Breath of the Wild</strong>, like enemies and equipment. It's built with the <a href="https://github.com/gadhagod/Hyrule-Compendium-API" target="_blank">Hyrule Compendium API</a>.</p>
            <br>
            <p>You can access all the different information through the navigation bar on the top (or clicking the hamburger button if you're on mobile).</p>
        </article>
    </div>
    <Footer />
</template>

<script>
import Header from '../header/Header.vue';
import Footer from '../footer/Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    div {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
    }
    
    .splash-art {
        width: 230px;
    }

    article {
        width: 768px;
        background-color: #eee;
        border: 10px solid rgba(184, 184, 184, 0.5);
        padding: 15px;
        box-sizing: border-box;
        margin-top: 20px;
    }

    h2 {
        font-weight: bold;
        font-size: 58px;
        margin-bottom: 15px;
        margin-left: 25px;
    }

    p {
        font-size: 22px;
        color: #3d3d3d;
        line-height: 1.5;
        text-align: justify;
    }

    strong {
        font-weight: bold;
    }

    a {
        color: #7396c0;
    }

    @media screen and (max-width: 768px) {
        article {
            width: 100vw;
            border: 5px solid rgba(184, 184, 184, 0.5);
        }

        h2 {
            font-size: 42px;
            margin-left: 15px;
        }

        p {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 501px) {
        .splash-art {
            width: 150px;
        }
    }
</style>