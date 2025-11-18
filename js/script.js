//Ragionamento:
// tramite chiamata api dall'array di oggetti devo prelevare:
//titale, date e url e aggiungerle alla pagina html.
// mi servirà sicuramente un ciclo per prelevare tutti gli oggetti.
// per inserirli dinamicamente nella pagina userò il create element.


//DOM
const photoGrid = document.getElementById("photo-grid");
// console.log(photoGrid);

//chiamata

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {
        const photoArray = resp.data;

        photoArray.forEach(curPhoto => {
            const colPhoto = document.createElement("div");
            colPhoto.classList.add("col");

            colPhoto.innerHTML = `<div class="card py-10">
                    <div class="card-body">
                        <div class="pin"><img src="./img/pin.svg" alt="" height="30"></div>
                        <img src=${curPhoto.url} alt="">
                        <p> <span class="date-photo">${curPhoto.date}</span><br>
                            <span class="title-photo">${curPhoto.title.toUpperCase()}</span>
                        </p>
                    </div>
            `
            photoGrid.append(colPhoto);
        });
    })