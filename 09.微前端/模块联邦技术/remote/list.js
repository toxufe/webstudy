// 这个模块会暴露给host模块使用
const wraper = document.createElement('div');
const listdata = [
    {name:"tom",age:22},
    {name:"xioahua",age:99},
    {name:"么",age:18},
];

listdata.forEach((item)=>{
    let p = document.createElement('p');
    p.innerText=`${item.name}---${item.age}`;
    wraper.appendChild(p);
});

export const addlist = ()=>{
    document.body.appendChild(wraper);
}