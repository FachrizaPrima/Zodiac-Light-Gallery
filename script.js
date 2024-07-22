//filter itemnya

//untuk memilih semua elemen yang diperlukan
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}

//fullscreen image preview function
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; 
  let selectedImgCategory = element.getAttribute("data-name"); 
  previewImg.src = selectedPrevImg; 
  categoryName.textContent = selectedImgCategory;
  previewBox.classList.add("show"); 
  shadow.classList.add("show"); 
  closeIcon.onclick = ()=>{ 
    previewBox.classList.remove("show"); 
    shadow.classList.remove("show"); 
    document.querySelector("body").style.overflow = "auto";   
  }
}

//untuk search box
const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image"),
      alertBox = document.getElementById("alert-box");

search.addEventListener("keyup", e => {
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase(),
            found = false;
            
        images.forEach(image => {
            if(value === image.dataset.name){
                image.style.display = "block";
                found = true;
            } else {
                image.style.display = "none";
            }
        });
        
        if(!found){
            alertBox.style.display = "block";
        } else {
            alertBox.style.display = "none";
        }
    }
});

search.addEventListener("keyup", () => {
    if(search.value != "") return;

    images.forEach(image => {
        image.style.display = "block";
    });
    alertBox.style.display = "none";
});

     


