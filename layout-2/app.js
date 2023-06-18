cl = console.log;

const flagContainer = document.getElementById("flagContainer")
// let imgPath = `https://www.themoviedb.org/t/p/w300/`
// cl(results);

let cardResult =  '';

results.forEach((obj) => {
    cl(obj)

    cardResult +=`
    
    
    <div class="col-2">
    <div class="card">
        <figure class="">
            <img src="https://cdn.britannica.com/40/5340-004-B25ED5CF/${obj.poster_path}" alt="">
        </figure>
        <figcaption class="data">
            <h6 class="text-center text-success"> ${obj.name}</h6>
            <div class="ml-2">
            <strong>Capital</strong>: ${obj.capital} <br>
            <strong>Languages</strong> : ${obj.languages}<br>
            <strong>Population</strong> :${obj.populations}
            </div>
        </figcaption>
    </div>
</div>
    
`

})


flagContainer.innerHTML = cardResult;

