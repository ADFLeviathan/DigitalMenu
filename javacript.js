


function includiHTML() {

    fetch("./menudigitale.html")
        .then(response => {
            return response.ok ? response.text() : "";
        })
        .then(data => {
            document.getElementById("menuDigitale").innerHTML = data;


            //HAMBURGER MENU 

            const hamburger = document.querySelector('.hamburger'); 
            const menu = document.querySelector('.menu'); 
            if (hamburger && menu) {

                hamburger.addEventListener('click', function () {
                    menu.classList.toggle('active');
                });
            }

            // Dropdowns management
            const dropdowns = document.querySelectorAll('.dropdown'); 
            dropdowns.forEach(dropdown => {
                const btn = dropdown.querySelector('.dropbtn'); 
                if (btn) {
                    btn.addEventListener('click', function () {
                        dropdown.classList.toggle('open');
                    });
                }
            });

            //backToTop arrow
            const backToTop = document.querySelector('.back-to-top'); 
            if (backToTop) {

                window.onscroll = function () {
                    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                        backToTop.style.display = "block"; 
                    } else {
                        backToTop.style.display = "none"; 
                    }
                };

                backToTop.addEventListener('click', function (e) {
                    e.preventDefault(); 
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                });
            }
        })
        .catch(error => {

            console.error("Errore durante il caricamento del menu:", error);
        });
}
document.addEventListener('DOMContentLoaded', includiHTML);
