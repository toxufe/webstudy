<script setup lang="ts">
import { ref,reactive } from "vue"
import { useRouter } from "vue-router";
import type {FormItemRule,FormInstance} from 'element-plus';
import { ElMessage } from 'element-plus'
import axios from "axios";
const router = useRouter();

const form = ref<FormInstance>();
type Form = {
    user:string,
    password:string
}
const formData = ref<Form>({
  user:'', 
  password:''
})

type Rules = {
    [K in keyof Form]:Array<FormItemRule>
}
const rules = reactive<Rules>({
    user:[
        {required:true,message:'请输入账号',type:'string'}
    ],
    password:[
        {required:true,message:'请输入密码',type:'string'}
    ]
});


const onSubmit = ()=>{
    form.value?.validate((result)=>{
        if(result){
            initRoute();
        }else{
            ElMessage.error("请输入完整……");
        }
    });
}

const initRoute = async ()=>{
    let result = await axios.get("http://localhost:9999/login",{params:formData.value});
    result.data.route.forEach((e:any)=>{
        router.addRoute({
            path:e.path,
            name:e.name,
            component:()=>import(`../components/${e.component}`)
        });
    });

    // router.getRoutes();
    console.log('router.getRoutes(): ', router.getRoutes());
    router.push('/index');
}
</script>

<template>
  <div class="login">
    <el-card class="box-card ">
     <el-form ref="form" :model="formData" :rules="rules" label-width="80px">
       <el-form-item label="账号" prop="user">
         <el-input placeholder="请输入账号"  v-model="formData.user"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="formData.password"></el-input>
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
