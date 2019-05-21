class NavBar {
    constructor(navElement) {
        this.navElement = navElement;
        this.handburger = this.navElement.querySelector('.fa-bars');
        this.handburger.addEventListener('click', this.show.bind(this))
    }

    show () {
        const showNav = this.navElement.querySelector('.show-nav-item');
        console.log(showNav.classList[1])
        showNav.classList.toggle('show-nav')
        const anchorTag = document.querySelectorAll('a');
        anchorTag.forEach(a=> a.classList.toggle('show'))
    }
}

const navElement = document.querySelector('nav');
new NavBar(navElement)