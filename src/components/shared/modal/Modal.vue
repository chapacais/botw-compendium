<template>
    <div class="modal">
        <div class="modal-content">
            <i @click="closeModalClick()" class="fa-solid fa-xmark modal-close-btn"></i>
            <div class="modal-content__container">
                <p class="modal-content__name">{{ modalObject.name }}</p>
                <img :src="modalObject.image" alt="modalObject.name">
                <p class="modal-content__description">{{ modalObject.description }}</p>
                <p class="modal-content__computed">{{ defenseOrCookingEffect }}</p>
                <p class="modal-content__computed">{{ attackOrHeartsRecovered }}</p>
                <div class="modal-content__common">
                    <div class="modal-content__common-container">
                        <p>Common locations:</p>
                        <ul>
                            <li v-for="location of modalObject.common_locations" :key="location">
                                {{ location }}
                            </li>
                        </ul>
                    </div>
                    <div class="modal-content__common-container" v-show="dropsWhenDefeatedDisplay">
                        <p>Drops when defeated:</p>
                        <ul>
                            <li v-for="drop of modalObject.drops" :key="drop">
                                {{ drop }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        modalObject: Object
    },
    computed: {
        defenseOrCookingEffect() {
            if(this.modalObject.cooking_effect) {
                return `Cooking effect: ${this.modalObject.cooking_effect.toUpperCase()}`
            }
            if(this.modalObject.defense) {
                return `Defense: ${this.modalObject.defense}`
            }
            else {
                return
            }
        },
        attackOrHeartsRecovered() {
            if(this.modalObject.hearts_recovered != undefined) {
                return `Hearts recovered on consumption: ${this.modalObject.hearts_recovered}`
            }
            if(this.modalObject.attack) {
                return `Attack: ${this.modalObject.attack}`
            }
            else {
                return
            }
        },
        dropsWhenDefeatedDisplay() {
            if(this.modalObject.category == 'creatures' || this.modalObject.category == 'monsters') {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        closeModalClick() {
            this.$emit('close-modal');
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: disc;
    }

    li {
        text-transform: capitalize;
    }

    .modal {
        position: fixed;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-close-btn {
        font-size: 24px;
        color: #091A28;
        cursor: pointer;
    }

    .modal-content {
        width: 500px;
        background: #eee;
        border: 10px solid rgba(184, 184, 184, 0.5);
        padding: 15px;
        box-sizing: border-box;
    }

    .modal-content__container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-content__name {
        text-transform: capitalize;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .modal-content__description {
        line-height: 1.15;
        margin: 10px;
        text-align: justify;
    }

    .modal-content__computed {
        text-decoration: underline;
        font-size: 18px;
        margin-bottom: 5px;
    }

    .modal-content__common {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px;
    }

    .modal-content__common-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-content__common-container p {
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        img {
            width: 200px;
        }

        .modal-content {
            width: 100vw;
        }

        .modal-content__description {
            font-size: 12px;
        }

        .modal-content__computed {
            font-size: 14px;
        }
        
        .modal-content__common {
            font-size: 12px;
        }
    }
</style>