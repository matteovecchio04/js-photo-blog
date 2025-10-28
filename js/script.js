axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(resp => {
        console.log(resp.data);
        const content = resp.data

        const boardEl = document.getElementById("board")

        boardEl.innerHTML = `
      <div class="row gap-4 justify-content-center">
        ${content.map(polar => `
          <div class="card p-3 col-sm-12 col-md-6 col-lg-4" style="width: 18rem;">
            <img src="${polar.url}" class="card-img-top">
            <div class="card-body">
              <p class="card-text">${polar.title}</p>
            </div>
          </div>
        `).join(``)}
      </div>`;
    }) 
    // i had to put the resetContent inside the .then because otherwise, content was not defined outside the .then
    .catch(err => {
        board.innerHTML = "<p>Error connecting with server</p>"
        console.log(err);
    })



