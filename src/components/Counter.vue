<script>
import store from '../store'


export default {
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <div class="counter">
        <p class="counter__text">Found {{ store.cards.length }} cards</p>
    </div>
</template>

<style lang="scss" >
@use '../style/partials/variables' as *;

.counter {
    background-color: $counter-bg;
    padding: 20px;

    .counter__text {
        color: white;
        font-weight: bold;
    }
}
</style>