(function () {
    const pictures = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5",
        "img6",
    ];

    const buttons = document.querySelectorAll(".btn");
    const imgElement = document.getElementById("img-display");

    let counter = 0;

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')) {
                counter--;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imgElement.src = `img/${pictures[counter]}.jpg`;
            }

            if (button.classList.contains('btn-right')) {
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgElement.src = `img/${pictures[counter]}.jpg`;
            }
        });
    });
})();
