const prevButton = document.getElementById('prev-btn')
const nextButton = document.getElementById('next-button')
const contentSections = document.querySelectorAll(".reviews");
let currentSectionIndex = 0
prevButton.addEventListener('click',()=>{
    handleNavigation(-1);
}
)
nextButton.addEventListener('click',()=>{
  handleNavigation(1);  
});
function handleNavigation(direction){
    let newIndex = currentSectionIndex + direction;
    if(newIndex >=0 &&newIndex < contentSections.length){
        contentSections[currentSectionIndex].computedStyleMap.display = 'none';
        contentSections[newIndex].computedStyleMap.display = 'block';
        currentSectionIndex = newIndex;
        updateButtonStates()
    }
}
function updateButtonStates(){
    if(newIndex ===0){
        prevButton.disabled = true;
    }
 else if (currentSectionIndex === contentSections.length-1){
    nextButton.disabled = true;
} else {
    prevButton.disabled = false;
    nextButton.disabled = false;
}}
contentSections.forEach((Selection,index)=>{
    if(index !==0){
        Selection.style . display = 'none';
    }
})