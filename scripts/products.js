const filterBtn = document.querySelector(".btn-filter-float");
const filterIcon = document.querySelector("#filter-icon");
const filterBar = document.querySelector(".filters-sidebar");

//Mobile Responsive filter
filterBtn.addEventListener("click",()=>{
    if(filterBar.style.display=="none"){
    filterBar.style.display="block";
    filterIcon.innerText=`filter_alt_off`;
     }
     else{
        filterBar.style.display="none";
        filterIcon.innerText=`filter_alt`;
     }
 })
