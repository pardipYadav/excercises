let url = "https://jsonplaceholder.typicode.com/posts";
let reponse = fetch(url);
reponse
  .then((v) => {
    return v.json();
  })
  .then((val) => {
    ihtml = "";
    for (item in val) {
      console.log(val[item]);
      ihtml += `
      <div class="card" style="width: 18rem">
          <img class="card-img-top" src="https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${val[item].title}</h5>
            <p class="card-text">
             ${val[item].body}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `;
    }
    cardContainer.innerHTML = ihtml;
  });
// cardContainer.innerHTML = "allcard";

let a = prompt("enter you note");
localStorage.setItem("note", a);
