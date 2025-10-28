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
            <p class="card-text">${polar.date}</p>
              <p class="card-text">${polar.title}</p>
            </div>
          </div>
        `).join(``)}
      </div>`;
    // i had to put the resetContent inside the .then because otherwise, content was not defined outside the .then

    //   milestone 1 del secondo giorno, overlay
    const cardsEl = document.querySelectorAll(".card")
    const overlayEl = document.getElementById("overlay")
    const imgOverEl = document.getElementById("imgOverlay")
    const btnOverEl = document.getElementById("btnOverlay")

    cardsEl.forEach(card => {
        card.addEventListener("click", () => {
            imgOverEl.src = card.querySelector("img").src
            overlayEl.classList.remove("d-none")
            document.body.style.overflow = "hidden"
            // everytime I click a card, the image appears on the bottom. I have to add the function where the image actually overlays the cards and the background blacks out.
        })

    btnOverEl.addEventListener("click", () => {
        overlayEl.classList.add("d-none")
        imgOverEl.src = ""
        document.body.style.overflow = "auto"
        // removes the overlay image and activates scroll
    })



    
    });
    
    }) 
    
    .catch(err => {
        boardEl.innerHTML = "<p>Error connecting with server</p>"
        console.log(err);
    })

    