const ratingElements=document.querySelectorAll(".rating");
const btnElement=document.getElementById("btn");

const containerElement=document.getElementById("container");


let selectRating="";

ratingElements.forEach((ratingElement)=>{
  ratingElement.addEventListener("click",(event)=>{
    console.log(event.target.innerText || event.target.parentNode.innerText);// here we added second condition so that if user click on emoji it will inner text result
    selectRating=event.target.innerText || event.target.parentNode.innerText;
    removeActive();
    event.target.classList.add("active"); 
    event.target.parentNode.classList.add("active"); //if we click on all of three emoji it will give all as active to remove activeness use a function

})
})

//To remove active class from each of rating elements
function removeActive(){
    ratingElements.forEach((element)=>{
        element.classList.remove("active");
    });

    btn.addEventListener("click",()=>{
        if(selectRating!==""){
      containerElement.innerHTML=`<strong>Thank You!</strong>
      <br>
      <br>
      <strong>Feedback :: ${selectRating}</strong>
      <p>We will use your feedback to improve your customer support</p>
      `

        }
    })
}