class MobileNavbar_left {
    constructor(mobileMenu_left, navList_left, navLinks_left) {
      this.mobileMenu_left = document.querySelector(mobileMenu_left);
      this.navList_left = document.querySelector(navList_left);
      this.navLinks_left = document.querySelectorAll(navLinks_left);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks_left.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList_left.classList.toggle(this.activeClass);
      this.mobileMenu_left.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu_left.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu_left) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar_left = new MobileNavbar_left(
    ".mobile-menu_left",
    ".nav-list_left",
    ".nav-list_left li",
  );
  mobileNavbar_left.init();