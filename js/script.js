window.addEventListener("load", function () {
    const btnTheme = document.querySelector('.cambiar');
    btnTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });

    const contenedor = document.querySelector('.contenedor');

    listadoFelinos.forEach(item => {
        contenedor.innerHTML +=
        `
        <div class="item">
            <img src=${item.imgUrl}>
            <h2>${item.title}</h2>
            <p>
            ${item.description}
            </p>
            <br>
            <hr>
            <p> Fecha de creación ${item.createdAt}</p>
        </div>`
    });
});