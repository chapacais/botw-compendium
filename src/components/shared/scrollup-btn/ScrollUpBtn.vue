<template>
    <transition name="fade">
        <button v-show="scY > 300" @click="scrollUp()">
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </transition>
</template>

<script>
export default {
    name: 'ScrollUpBtn',
    data() {
        return {
            scTimer: 0,
            scY: window.scrollY,
        }
    },
    methods: {
        scrollUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        handleScroll() {
            if(this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
    button {
        position: fixed;
        z-index: 10;
        bottom: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eee;
        border: none;
        width: 38px;
        height: 38px;
        font-size: 16px;
        background-color: #091A28;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
}

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>