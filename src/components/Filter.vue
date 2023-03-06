<template>
    <div>
        <input @keyup.enter="$emit('onSearch')" class="search" type="text" v-model="store.search"
            placeholder="Filtra per nome">
    </div>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            store,
        }
    }
}

</script>

<style lang="scss" scoped>
.search {
    padding: 5px;
}
</style>