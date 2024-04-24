<script setup lang="ts">
import {ref,onMounted} from "vue"

let speed = ref<number>(1);
const bar = ref<HTMLElement>()
let timer = ref<number>(1);
const startLoading = ()=>{
    let dom = bar.value as HTMLElement;
    speed.value = 1;
    timer.value = window.requestAnimationFrame(function fn(){
        if(speed.value<=90){
            speed.value +=1;
            dom.style.width = speed.value + '%';
            timer.value = window.requestAnimationFrame(fn);
        }else{
            speed.value = 1;
            window.cancelAnimationFrame(timer.value);
        }
    });

}
const endLoading = ()=>{
    setTimeout(() => {
        let dom = bar.value as HTMLElement;
        window.requestAnimationFrame(()=>{
            speed.value =  100;
            dom.style.width = speed.value + '%';
        });
    }, 1000);
    
}

// onMounted(()=>{
//     startLoading();
//     endLoading();
// })

defineExpose({
    startLoading,
    endLoading
})

</script>

<template>
  <div class="wraps">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
    .wraps {
        position: fixed;
        top:0;
        width: 100%;
        height: 1px;
        .bar {
            height: inherit;
            width:0;
            background: #f00;
        }
    }
</style>
