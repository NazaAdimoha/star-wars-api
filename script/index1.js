const body = document.querySelector('body');
console.log(body)

function head() {
  document.querySelector("#header").innerHTML = `
    <h1 class='star_text'>Star Wars</h1>
    <h3 class='sub_text'>Let The Force Be With You</h3>
`;
}

async function main() {
  try {
    const res = await fetch("https://swapi.dev/api/people");
    const data = await res.json();
    
    head();

    let html = data.results
      .map((user) => {
        return `
        <div class="col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3">
          <div class="box">
            <div class="top-bar"></div>
                <div class="top">
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <input type="checkbox" class="heart-btn" id="heart-btn-1">
                    <label class="heart" for="heart-btn-1"></label>
                </div>
            <div class="content">
              <img onClick() src='https://images.unsplash.com/photo-1626983140446-426a79120f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by		1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' class = 'avatar' alt='${user.name}'>
              <p class='hidden'>${user.name}</p>
              <p class='hidden'>${user.height}</p>
          </div>
          <div class="btn">
              <a href="#" class='hidden'><i class="fa fa-clipboard" aria-hidden="true"></i>${user.gender}</a>
              <a href="#"><i class="fa fa-eye" aria-hidden="true"></i><button id='view' class='--view'>View</button></a>
          </div>
        </div>
    `;
      })
      .forEach((element) => {
        document.querySelector("#main").innerHTML += element;
        const button = document.getElementById('view');
        button.addEventListener('click', () => {
          const hiddenEl = (document.querySelectorAll(".hidden"));
          if(hiddenEl.style.display == 'block')
          for (let i = 0; i < hiddenEl.length; i++){
            hiddenEl[i].classList.toggle("hidden");
          } 
        });
      });
// console.log(body)

  } catch (error) {}
}

main();

// module.exports = { main };



// const hiddenEl = (document.querySelectorAll(".hidden"));
// for (let i = 0; i < hiddenEl.length; i++) {
//   hiddenEl[i].classList.toggle("hidden");
// }