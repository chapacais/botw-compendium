<template>
    <div @click="onClick(this.dataObject)">
        <p>{{ objectName }}</p>
        <img :src="objectImage" :alt="objectName">
    </div>
</template>

<script>
export default {
    name: 'GridItem',
    props: {
        dataObject: Object,
        objectName: String,
        objectImage: String
    },
    methods: {
        onClick(dataObject) {
            this.$emit('open-modal', dataObject);
        }
    }
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 3px solid rgba(184, 184, 184, 0.5);
        padding: 10px;
        box-sizing: border-box;
        width: 250px;
        height: 225px;
        cursor: pointer;
        margin: 0 auto;
    }

    img {
        width: 150px;
    }

    p {
        font-size: 18px;
        text-transform: capitalize;
        margin-bottom: 10px;
        padding-bottom: 2px;
        width: 75%;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .modal {
        position: fixed;
    }
</style>