<script>
import axios from 'axios'
import Card from './Card.vue'

export default {
    components: {
        Card,
    },
    data() {
        return {
            cards: [],
        }
    },
    methods: {
        fetchCards() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((res) => {
                    //console.log(res, res.data, res.data.data)
                    const card = res.data.data
                    this.cards = card
                    //console.log(card.card_images)
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
            <div class="grid">
                <Card v-for="card in cards" :key="card.id" :card="card" :imgSrc="card.card_images[0].image_url" />
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
    }
}

.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px
}
</style>