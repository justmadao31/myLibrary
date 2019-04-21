<template>
    <div id="workList">
        <b-navbar type="light" variant="default">
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <label class="mr-sm-2">作者id</label>
                    <b-form-input class="mr-sm-2" placeholder="Search" v-model.number="aid"></b-form-input>
                    <label class="mr-sm-2">标题搜索</label>
                    <b-form-input class="mr-sm-2" placeholder="Search" v-model="searchName"></b-form-input>
                    <b-button variant="success" class="my-2 my-sm-0" type="submit" @click.prevent="findWorkList">搜索
                    </b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>

        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>id</th>
                <th>标题</th>
                <th width="100xp">汉化</th>
                <th width="100xp">类型</th>
                <th width="100xp">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in workList" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.is_chinses==1?'是':'否'}}</td>
                <td>{{$store.state.workType[item.type]}}</td>
                <td>
                    <b-button size="sm" variant="danger" @click="deleteWork(item)">删除</b-button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "wroksList",
        data: function () {
            return {
                aid:0,
                workList: [],
                searchName: '',
                show: false
            }
        },
        methods: {
            findWorkList() {
                var param = {name: this.searchName,aid:this.aid};
                this.$axios.post('/methods/work/getWorkList', param)
                    .then(res => {
                        this.workList = res.data.result;
                    })
            },
            addWorkList() {

            },
            deleteWork(item) {
                this.$confirm('是否删除此作品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('/methods/work/deleteWork',{id:item.id})
                        .then(res=>{
                            if(res.data.status==1){
                                this.findWorkList();
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            } else {
                                this.$message({
                                    type: 'danger',
                                    message: '删除失败!'
                                });
                            }
                        })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        created() {
            //this.findWorkList();
        }
    }
</script>

<style scoped>
    #workList {
        background-color: #f9f9f9;
        opacity: 0.95;
        height: 1340px;
        overflow-y: auto;
    }

    button {
        margin-right: 10px;
    }

    label {
        line-height: 38px;
    }
</style>
