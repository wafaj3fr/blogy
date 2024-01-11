'use strict';

const addEventOnElem = function (elem, type, callback) {
    if(elem.length > 1) {
        for (let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }else{
        elem.addEventListener(type, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

const searchBar = document.querySelector("[data-search-bar]");
const searchBarTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const ToggleSearchBar = function(){
    searchBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElem(searchBarTogglers, "click", ToggleSearchBar);