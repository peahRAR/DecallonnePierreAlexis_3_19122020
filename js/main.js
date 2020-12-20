// GESTION DES INCLUDES

fetch("./html/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./html/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

  // GESTION CONDITION HEADER

  let index =false;
  let path = window.location.pathname;
  let page = path.split("/").pop();
  
  if (page == "index.html") {
    index = true;
  }


    var elem = document.getElementsByClassName("return");
    console.log(elem.classList);





  console.log(index)