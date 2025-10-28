axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then( resp => {
    console.log(resp.data);
    const content = resp.data
})

