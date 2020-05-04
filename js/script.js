function zoom(e){
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = e.src;

    modal.onclick = function() {
        modal.style.display = "none"    
    }
}
