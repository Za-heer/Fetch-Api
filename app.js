let alldata = document.getElementById("alldata");
const get_api = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.map((e, i) => {
        return (alldata.innerHTML += `<div ${(key = {
          i,
        })} class="col-10 border shadow mt-5 rounded bg-body">
    <div class="title d-flex mt-2 ms-2">
      <div class="avtar border rounded-circle d-flex justify-content-center align-items-center bg-primary text-white">
      <h4>${e.name[0]}</h4>
      </div>
      <div class="name ms-3 ">
        <div class="myname">
          <h5>${e.name}</h5>
        </div>
        <div class="myemail">
          <p>${e.email}</p>
        </div>
      </div>
    </div>
    <div class="main">
      <img
        src="https://w7.pngwing.com/pngs/875/110/png-transparent-birds-birds-birds-natural-bird-thumbnail.png"
        alt=""
      />
    </div>
    <div class = "d-flex justify-content-between mt-2">
    <div class = "d-flex">
    <i class="bi bi-hand-thumbs-up-fill ms-3 pe-1 icon-green"></i>
    <p>Patricia Lebsack, Julianne and 6.7K Others</p>
    </div>
    <div class = "me-2">
    <p>2.3K Comments 987 Shares</p>
    </div>
    </div>
    <hr/>
    <div class="d-flex justify-content-around mt-3">
    <div>
    <button class="border-0 bg-body"><i class="bi bi-hand-thumbs-up pe-2"></i>Like</button></div>
    <div><button class="border-0 bg-body"><i class="bi bi-chat-square pe-2"></i>comment</button></div>
    <div><button class="border-0 bg-body"><i class="bi bi-share pe-2"></i>share</button></div>
    </div>
    <hr>
    <div class = "d-flex ms-3">
      <i class="bi bi-person-circle" style="font-size: 30px;"></i>
      <input
            class="form-control me-2 rounded-pill ms-2 pe-5 input-field bg-light border-0"
            type="search"
            placeholder="Write a Comment..."
            aria-label="Search"
          />
    </div>
    <div class = "d-flex ms-3 mt-3">
    <div>
      <i class="bi bi-person-circle" style="font-size: 30px;"></i> 
    </div>   
    <div class="discript ms-2 mb-2 bg-light rounded-3 p-2">
      <P>${e.username}</P>
      <P>${e.website}</P>
    </div>
    </div>
    </div>`);
      });
    })
    .catch((err) => {
      console.log("sdhfksdf");
    });
};
get_api();
