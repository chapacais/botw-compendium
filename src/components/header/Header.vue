<template>
    <header>
        <div class="header__top">
            <h1><router-link class="menu-link" to="/">BotW Compendium</router-link></h1>
            <i @click="showNav()" class="fa-solid fa-bars hamburger-btn"></i>
            <nav v-show="visible">
                <i @click="showNav()" class="fa-solid fa-xmark nav-close-btn"></i>
                <ul>
                    <li><router-link class="menu-link" to="/">home</router-link></li>
                    <li><router-link class="menu-link" to="/creatures">creatures</router-link></li>
                    <li><router-link class="menu-link" to="/equipment">equipment</router-link></li>
                    <li><router-link class="menu-link" to="/materials">materials</router-link></li>
                    <li><router-link class="menu-link" to="/monsters">monsters</router-link></li>
                    <li><router-link class="menu-link" to="/treasure">treasure</router-link></li>
                </ul>
            </nav>
        </div>
        <h2>{{ sectionTitle }}</h2>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        sectionTitle: String,
    },
    data() {
        return {
            visible: Boolean,
        }
    },
    methods: {
        showNav() {
            this.visible = !this.visible;
        }
    },
    created() {
        if(window.innerWidth <= 768) {
            this.visible = false;
        } else {
            this.visible = true;
        }
    }
}
</script>

<style scoped>
    header {
        background-color: #091A28;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .nav-close-btn {
        color: #091A28;
        font-size: 30px;
        cursor: pointer;
        display: none;
    }

    .hamburger-btn {
        color: #eee;
        font-size: 24px;
        cursor: pointer;
        display: none;
    }

    .header__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    h1 .menu-link, h1 .router-link-active {
        color: #5E81AC;
        font-size: 24px;
        font-weight: initial;
    }

    ul {
        display: flex;
        gap: 10px;
    }

    .menu-link {
        color: #7396c0;
        text-decoration: none;
    }

    .router-link-active {
        color: #8aa9cf;
        font-weight: bold;
    }

    h2 {
        color: #f5f5f5;
        font-weight: bold;
        font-size: 36px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 768px) {
        header {
            position: relative;
        }

        nav {
            position: fixed;
            background: #eee;
            top: 0;
            right: 0;
            box-sizing: border-box;
            width: 100vw;
            height: 100vh;
            padding: 20px;
            border: 20px solid rgba(184, 184, 184, 0.5);
        }

        .hamburger-btn {
            display: block;
        }

        .nav-close-btn {
            display: block;
        }

        ul {
            flex-direction: column;
            height: 50%;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .menu-link {
            font-size: 30px;
        }

        h2 {
            font-size: 30px;
        }
    }
</style>