<template>
    <div class="card">
        <img class="card-img" :src="imgSrc" alt="">
        <div class="card-body">
            <h2 class="card_name">{{ card.name }}</h2>
            <p class="card_archetype"> {{ card.archetype }}</p>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        }

    }
}

</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    text-transform: uppercase;
    font-size: 8px;

    .card-body {
        background-color: $bg-color;
        text-align: center;
        padding: 20px;
        height: 100px;

        .card_name {
            color: white;
            margin-bottom: 10px;
        }

        .card_archetype {
            font-size: 15px;
            text-transform: capitalize;
        }
    }
}
</style>