<template>
    <div id="app">
        <navbar></navbar>
        <b-container>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
    import navbar from './components/nav'

    export default {
        name: 'app',
        components: {
            navbar
        }
    }
</script>

<style>
    body {
        background: url("./img/megumi.png");
        background-size: auto 100%;
        padding: 0;
        height: 100%;
    }
    .container{
        min-height: 1400px;
    }
</style>
