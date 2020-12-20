window.addEventListener('DOMContentLoaded', (event) => {
  loadPage('home')
});

function loadPage(pageName){
  fetch(`./html/${pageName}.html`)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("main").innerHTML = data.toString();

    document.querySelector('.return').style.display = 'block';
    if(pageName === "home"){
      document.querySelector('.return').style.display = 'none';
    }
  });
}