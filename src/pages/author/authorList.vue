<template>
    <div id="authorList">
        <b-navbar type="light" variant="default">
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input class="mr-sm-2" placeholder="Search" v-model="searchName"></b-form-input>
                    <b-button variant="success" class="my-2 my-sm-0" type="submit" @click.prevent="findAuthorList">搜索</b-button>
                    <b-button variant="primary" class="my-2 my-sm-0" type="button" @click="addNewAuthor">添加</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>

        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>id</th>
                <th>社团</th>
                <th>名字</th>
                <th>分类</th>
                <th>分数</th>
                <th>最后修改时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in authorList" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.group}}</td>
                <td>{{item.name}}</td>
                <td>{{item.folder}}</td>
                <td>{{item.score}}</td>
                <td>{{item.last_update_time | dateFormate}}</td>
                <td>
                    <b-button  size="sm" variant="success" @click="eidtAuthor(item)">编辑</b-button>
                    <b-button  size="sm" variant="primary">查看</b-button>
                </td>
            </tr>
            </tbody>
        </table>

        <b-modal id="editAuthorModal" size="lg" centered title="编辑作者" v-model="show">
            <div v-if="activeAuthor!=null">
                <b-container fluid>
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label>社团</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input v-model="activeAuthor.group"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label>名字</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input v-model="activeAuthor.name"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label>分类</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input v-model="activeAuthor.folder"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label>分数</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input type="number" v-model="activeAuthor.score"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="3">
                            <label>简介</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-textarea rows="4" maxlength="250" v-model="activeAuthor.info"></b-form-textarea>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div slot="modal-footer">
                <b-button class="float-right"  size="sm" variant="primary" @click="saveAuthor">保存</b-button>
                <b-button class="float-right"  size="sm" @click="cancerlEditAuthor">取消</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "authorList",
        data:function () {
            return {
                authorList:[],
                searchName:'',
                activeAuthor:null,
                show:false
            }
        },
        methods:{
            findAuthorList(){
                var param={name:this.searchName};
                this.$axios.post('/methods/author/getAuthorList',param).then(res=>{
                    this.authorList=res.data.result;
                })
            },
            cancerlEditAuthor(){
                this.show=false
            },
            addNewAuthor(){
                this.activeAuthor={
                    id: null,
                    group: "",
                    name: "",
                    score: 0,
                    last_update_time: "",
                    folder: "",
                    info: ""
                };
                this.show=true;
            },
            eidtAuthor(author){
                this.activeAuthor=JSON.parse(JSON.stringify(author));
                this.show=true;
            },
            saveAuthor(){
                this.$axios.post('/methods/author/saveAuthor',this.activeAuthor).then(res=>{
                    if (res.data.status == 1) {
                        this.findAuthorList();
                        this.show=false;
                    }else {
                        alert('保存失败')
                    }
                })
            }
        },
        created(){
            this.findAuthorList();
        }
    }
</script>

<style scoped>
    #authorList{
        background-color: #f9f9f9;
        opacity: 0.95;
        min-height: 1340px;
        overflow-y: auto;
    }
    button{
        margin-right: 10px;
    }
    label{
        line-height: 38px;
    }
</style>
