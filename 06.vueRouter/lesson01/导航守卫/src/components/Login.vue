<script setup lang="ts">
import { ref,reactive } from "vue"
import { useRouter } from "vue-router";
import type {FormItemRule,FormInstance} from 'element-plus';
import { ElMessage } from 'element-plus'
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
            router.push('/index');
            localStorage.setItem('token','1');
        }else{
            ElMessage.error("请输入完整……");
        }

    });
}
</script>

<template>
  <div style="background: #000;color: #fff;font-size: 60px; height: 1000px;">测试滚动行为</div>
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
