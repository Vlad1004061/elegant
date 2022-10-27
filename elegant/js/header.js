

var headerText = `<header class="header">
<div class="header__conteiner">
    <div class="header__body">
        <a href="#" class="header__logo">
            <img src="./img/header-logo.png" alt="Elegant">
        </a>
        <div class="header__nav">
            <div class="header__burger">
                <span></span>
            </div>
            <nav class="header__menu">
                <ul class="header__list">
                    <li>
                        <a href="./index.html" class="header__link">Home</a>
                    </li>
                    <li>
                        <a href="./elegancy.html" class="header__link">Services</a>
                    </li>
                    <li>
                        <a href="./contact.html" class="header__link">Contact Us</a>
                    </li>
                    <li>
                        <a href="./work.html" class="header__link">Work</a>
                    </li>
                    <li>
                        <a href="./project.html" class="header__link">Project</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</header>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();



var footerText = `<footer class="footer">
<div class="footer__conteiner">
    <div class="footer__items">
        <p>© 2014 Designed and Developed by Diogo Dantas</p>
        <p>Email: imdiogodantas@gmail.com</p>
    </div>
</div>
</footer>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();


