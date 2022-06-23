const list = document.querySelectorAll('.lista');
const text = document.querySelectorAll('.texto');
function linkActivo(){
    list.forEach((item)=>{
        item.classList.remove('active')
    })
    this.classList.add('active')
}

list.forEach((item)=>{
    item.addEventListener('click', linkActivo);  
})
