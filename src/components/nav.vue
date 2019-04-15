<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">本子库</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">作者</b-nav-item>
                    <b-nav-item href="#">本子</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="findAuthorList">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        methods:{
            findAuthorList() {
                window.console.log('findAuthorList')
                this.$axios.post('/methods/author/getAuthorList',{name:'kakao',type:1})
                    .then(data=>{
                        window.console.log(data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>