<script>
import axios from 'axios'
import store from '../store'
import Card from './Card.vue'
import Counter from './Counter.vue'
import Filter from './Filter.vue'

export default {
    components: {
        Card,
        Counter,
        Filter,
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        cards() {
            return this.store.cards
        },
        search() {
            return this.store.search
        }
    },
    methods: {
        fetchCards() {
            const search = this.store.search
            //console.log(search)

            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&fname=${search}`)
                .then((res) => {
                    //console.log(res, res.data, res.data.data)
                    const card = res.data.data
                    this.store.cards = card
                    //console.log(card.card_images)
                }).catch((error) => {
                    //console.log(error)
                    this.store.cards = []
                })
        }
    },
    mounted() {
        this.fetchCards()
    }
}
</script>

<template>
    <main class="main-content">
        <div class="container">
            <Filter @onSearch="fetchCards" />
        </div>
        <div class="container">
            <Counter />
            <div v-if="store.cards.length > 0" class="grid">
                <Card v-for="card in cards" :key="card.id" :card="card" :imgSrc="card.card_images[0].image_url" />
            </div>
            <div v-else>
                <p class="error">Non è stato trovato nessun risultato per: {{ search }}</p>
            </div>
        </div>
    </main>
</template>

<style lang="scss" >
@use '../style/partials/variables' as *;

.main-content {
    background-color: $bg-color;
    padding: 60px;

    .container {
        background-color: white;
        padding: 20px;
        justify-content: center;
        flex-direction: column;
    }
}

.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px
}

.error {
    padding: 20px 0;
    text-align: center;
    color: red;
    font-size: 24px;
}
</style>