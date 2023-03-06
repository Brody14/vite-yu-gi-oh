<template>
    <div class="input-wrap">
        <div>
            <input @keyup.enter="$emit('onSearch')" class="search" type="text" v-model="store.search"
                placeholder="Filtra per nome">
        </div>
        <div>
            <select @change="$emit('onLevelChange')" v-model="store.selectedLevel" class="select-level">
                <option value="">--Filtra per livello--</option>
                <option v-for="level in levelOptions" key="level" :value="level"> {{ level }} </option>
            </select>
        </div>
    </div>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            store,
            levelOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        }
    }
}

</script>

<style lang="scss" scoped>
.input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
}

.search,
.select-level {
    padding: 5px;
}
</style>