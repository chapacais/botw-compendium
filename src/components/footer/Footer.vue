<template>
    <footer>
        <div class="footer">
            <p>Developed by <a href="https://github.com/chapacais" target="_blank">Pedro Chapacais</a>, using the <a class="footer__link" href="https://github.com/gadhagod/Hyrule-Compendium-API" target="_blank">Hyrule Compendium API</a></p>
            <div class="footer__icons">
                <a href="https://www.linkedin.com/in/pedro-chapacais/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/chapacais" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </footer>
    <ScrollUpBtn />
</template>

<script>
import ScrollUpBtn from '../shared/scrollup-btn/ScrollUpBtn.vue'

export default {
    name: 'Footer',
    components: {
        ScrollUpBtn
    }
}
</script>

<style scoped>
    .footer {
        background: #eeeeee;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 0 5%;
    }

    p {
        font-size: 12px;
    }

    a {
        color: #7396c0
    }

    .footer__icons {
        display: flex;
        gap: 15px;
    }

    .fa-brands {
        font-size: 22px;
        color: #7396c0;
        transition: all 0.2s;
    }

    .fa-brands:hover {
        color: #31619b;
    }

    @media screen and (max-width: 768px) {
        .footer {
            flex-direction: column;
            justify-content: space-evenly;
            padding: 5px 0;
            gap: 0;
        }

        p {
            font-size: 9px;
        }

        .footer__icons {
            gap: 10px;
        }

        .fa-brands {
            font-size: 16px;
        }
    }
</style>