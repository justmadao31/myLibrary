<template>
    <b-container id="login">
        <b-row class="my-1">
            <b-col sm="3">
                <label>用户名</label>
            </b-col>
            <b-col sm="9">
                <b-form-input v-model="username"></b-form-input>
            </b-col>
            <b-col sm="3">
                <label>密码</label>
            </b-col>
            <b-col sm="9">
                <b-form-input type="password" v-model="password"></b-form-input>
            </b-col>
            <b-col>
                <b-button class="float-right" size="sm" variant="success" @click="login">登陆</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$axios.post('/methods/login', {username: this.username, password: this.password})
                    .then(res => {
                        window.console.log(res)
                    })
            }
        }
    }
</script>

<style scoped>
    .row div {
        margin-top: 10px;
    }
    label{
        line-height: 38px;
    }
    #login{
        background-color: #f9f9f9;
    }
</style>
