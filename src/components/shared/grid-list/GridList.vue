<template>
    <div class="container search">
        <label for="search">Search:</label>
        <input type="search" name="search" @input="filter = $event.target.value">
    </div>
    <div class="container grid-list">
        <GridItem @open-modal="openModal" v-for="data of dataItemsFilter" :key="data.id" :dataObject="data" :objectName="data.name" :objectImage="data.image"/>
    </div>
    <Modal @close-modal="closeModal" v-show="visible" :modalObject="modalObject"/>
</template>

<script>
import GridItem from '../grid-item/GridItem.vue'
import Modal from '../modal/Modal.vue'

export default {
    name: 'GridList',
    components: {
        GridItem,
        Modal
    },
    props: {
        categoryUrl: String,
        creatures: String
    },
    data() {
        return {
            dataItems: [],
            filter: '',
            visible: false,
            modalObject: Object
        }
    },
    methods: {
        openModal(dataObject) {
            this.visible = !this.visible;
            this.modalObject = dataObject;
            console.log(this.modalObject);
        },
        closeModal() {
            this.visible = false;
        }
    },
    computed: {
        dataItemsFilter() {
            if(this.filter) {
                let exp = new RegExp(this.filter.trim(), 'i');
                return this.dataItems.filter(data => exp.test(data.name));
            } else {
                return this.dataItems;
            }
        }
    },
    created() {
        fetch('https://botw-compendium.herokuapp.com/api/v2/category/' + this.categoryUrl, { mode: 'cors' })
            .then(res => res.json())
            .then(dados => {
                if(this.creatures) {
                    this.dataItems = dados.data[this.creatures];
                } else {
                    this.dataItems = dados.data;
                }
            })
    }
}
</script>

<style scoped>
    .grid-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 15px;
        margin-bottom: 25px;
        margin-top: 25px;
        min-height: calc(100vh - 360px);
    }

    .search {
        margin-top: 25px;
        display: flex;
        margin-left: 35px;
        align-items: center;
    }

    input {
        border: 1px solid rgba(184, 184, 184, 0.5);
        padding: 10px;
        width: 33%;
        border-radius: 5px;
        margin-left: 10px;
        background-color: #f5f5f5;
    }

    @media screen and (max-width: 1366px) {
        .grid-list {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media screen and (max-width: 1156px) {
        .grid-list {
            grid-template-columns: 1fr 1fr;
        }

        input {
            width: 80%;
        }
    }

    @media screen and (max-width: 575px) {
        .grid-list {
            grid-template-columns: 1fr;
        }

        .search {
            margin-left: 15px;
            margin-right: 15px;
        }
    }
</style>