<script>
export default {

}
</script>

<template>
    <main class="main-content">
        <div class="container">
            <div class="grid">

            </div>

        </div>
    </main>
</template>

<style lang="scss" >
@use '../style/partials/variables' as *;

.main-content {
    background-color: $bg-color;
    padding: 20px;

    .container {
        background-color: white;
        padding: 20px;
    }
}

.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
</style>