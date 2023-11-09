# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page


### Links

- Solution URL: https://github.com/Shrija2/sunnyside-agency-landing-page-main
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SASS

### What I learned

- Learned how to make a hamburger menu using toggle function:
```js
document.querySelector('.hamburger-menu').addEventListener('click', toggle);

function toggle(){
    let mobileNav=document.querySelector('.nav-mobile');
    if (mobileNav.style.display==='none'){
        mobileNav.style.display='block'
    }
    else{mobileNav.style.display='none'}
    }

-Change color of images/icons using filter function:
``css
footer img:hover {
    filter: brightness(0) invert(1);
    }

-Change order of the grid containers
``css
@media(max-width:480px){
   .transform-text{
        order:2;
    }
    .transform-img{
        order:1;
    }}






### Continued development

-Optimize use of SASS
-Need to work on the landing page to be more responsive


### Useful resources
-https://stackoverflow.com/questions/26113278/move-one-element-before-another-with-css-html- This helped me with the arranging the order of grid containers in mobile screens.

-https://www.youtube.com/watch?v=nu5mdN2JIwM- This helped with using SASS
## Author

- Frontend Mentor - [@Shrija2]()


