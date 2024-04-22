// index.js
//base url

const ramenUrl = 'http://localhost:3000/ramens'

// Callbacks
const handleClick = (ramen) => {
  // Add code
  console.table(ramen)

  const ramenImgDetailComponent = document.getElementById('rimg')
  ramenImgDetailComponent.src   = ramen.image


  const ramenNameDetailComponent = document.querySelector('h2')
  ramenNameDetailComponent.textContent = ramen.name

  const ramenDetailComponent = document.querySelectorAll('h3')[1]
  ramenDetailComponent.textContent = ramen.restaurant
};


const addSubmitListener = () => {
  // Add code
  const formDataDisplay = document.getElementById('new-ramen')
  ormDataDisplay.src   = data.form

}

const displayRamens = () => {
  // Add code
  //the fetch function
  fetch(ramenUrl)
  .then(res => res.json())
  .then(data => {
    console.log("Here is the data:", data)
    displayRamensOnTheViewPage(data)
  })
  console.log("Hello world")
};

function displayRamensOnTheViewPage(ramensArray){
  console.table(ramensArray)


//getting the component to display ramens
  const ramenSpanBar = document.getElementById("ramen-menu")
  console.log(ramenSpanBar)

  //loop through each array object and create an image tag and names
  ramensArray.forEach( element =>{
    const imgTag = document.createElement("img")
    imgTag.src = element.image
    imgTag.alt = element.name

    //add an event listener to each created image

    imgTag.addEventListener("click", () => handleClick(element))

    //Append the img to the component div
    ramenSpanBar.appendChild(imgTag)
  })
}
const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
