let uploadFile = document.querySelector(".upload");
uploadFile.addEventListener("click", function(){
    this.nextElementSibling.click();
})
uploadFile.nextElementSibling.addEventListener("change",function(e){
    const{files}=e.target;

    for (let file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend = function(e){
            const{result} = e.target;

            const img = document.createElement("img");
            img.setAttribute("src",result);
            const fileName = document.createElement("span")
            span.innerText = file.name;
            document.querySelector(".image").append(img,span);
        }
    }
})