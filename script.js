window.addEventListener("load", () => {

    const container = document.getElementById("myContainer");
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener("click", function (e) {
        container.classList.toggle('opened');
    })

})