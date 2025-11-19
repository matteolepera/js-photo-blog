//Ragionamento:
// tramite chiamata api dall'array di oggetti devo prelevare:
//titale, date e url e aggiungerle alla pagina html.
// mi servirà sicuramente un ciclo per prelevare tutti gli oggetti.
// per inserirli dinamicamente nella pagina userò il create element.


//DOM
const photoGrid = document.getElementById("photo-grid");
// console.log(photoGrid);
const overWrap = document.querySelector(".over-wrap");
const boxAlert = document.querySelector(".box-alert");
const btnAlert = document.getElementById("btn-alert");
// console.log(overWrap, boxAlert, btnAlert);

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

            //click della foto
            colPhoto.addEventListener("click", function () {
                overWrap.classList.remove("d-none");
                boxAlert.classList.remove("d-none");
            });

            btnAlert.addEventListener("click", function () {
                overWrap.classList.add("d-none");
                boxAlert.classList.add("d-none");
            })

            photoGrid.append(colPhoto);
        });
    })