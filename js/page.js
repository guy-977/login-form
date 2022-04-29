function showPage(page){
    document.querySelectorAll('.page').forEach(div => {
        div.style.display = 'none'
    })

    document.querySelector(`.${page}`).style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a').forEach(link => {
        link.onclick = function(){
            showPage(this.dataset.page)
            console.log(`moved to ${this.dataset.page}`)
        }
    })
})
