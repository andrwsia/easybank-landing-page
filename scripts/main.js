const onResize = (linksWrapper, bgElement) => (isSmallScreen) => {
    const toggleClass = (el, className) => {
        el.classList.toggle(className);
    };

    toggleClass(linksWrapper, isSmallScreen ? 'display-none' : 'display-block');
    toggleClass(bgElement, isSmallScreen ? 'display-block' : 'display-none');
};


const toggleDropDownMenu = () => {
    const linksWrapper = document.querySelector('.links-wrapper');
    const bgElement = document.querySelector('.bg-linear-gradient');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtnIcon = menuBtn.querySelector('img');
    let isSmallScreen = window.innerWidth < 800;

    const resizeHandler = onResize(linksWrapper, bgElement);

    menuBtn.addEventListener('click', () => {
        linksWrapper.classList.toggle('display-block');
        bgElement.classList.toggle('display-block');
        menuBtnIcon.src = menuBtnIcon.src.endsWith('icon-hamburger.svg') ? './assets/images/icon-close.svg' : './assets/images/icon-hamburger.svg';
      });

    window.addEventListener('resize', () => {
        const newIsSmallScreen = window.innerWidth < 800;
        if (isSmallScreen !== newIsSmallScreen) {
            isSmallScreen = newIsSmallScreen;
            resizeHandler(isSmallScreen);
        }
    });
};


toggleDropDownMenu();

