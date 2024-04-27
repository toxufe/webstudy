import('remote/addList').then(({addlist})=>{
    const app = document.getElementById('app');
    app.innerHTML = `<h2>host</h2>`
    addlist();
})


