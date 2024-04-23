<script setup lang="ts">
import { ref,reactive } from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
const rules = reactive({
    user:[
        {required:true,message:'请输入账号',trigger:'blur'}
    ],
    password:[
        {required:true,message:'请输入密码',trigger:'blur'}
    ]
});
const form = ref({
  user:'',
  password:''
})

const onSubmit = ()=>{
    console.log(form.value)
    router.push('/index')
}
</script>

<template>
  <div class="login">
    <el-card>
     <el-form  ref="form" :model="form" :rules="rules" label-width="80px">
       <el-form-item label="账号" prop="user">
         <el-input placeholder="请输入账号"  v-model="form.user"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button @click="onSubmit" type="primary">登录</el-button>
       </el-form-item>
     </el-form>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
