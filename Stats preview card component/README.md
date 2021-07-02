# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

build out this card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot_desktop.jpg)
![](./screenshot_tablet.jpg)
![](./screenshot_mobile.jpg)

### Links

- Solution URL: [Solution on frontendmentor.io](https://www.frontendmentor.io/solutions/stats-preview-card-component-using-sass-and-flexbox-jRhHGUhqb)
- Live Site URL: [Live URL](https://gautamji.github.io/frontendmentor/Stats%20preview%20card%20component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS

### What I learned

This was my first attempt at making a pixel perfect layout using an image reference. As I didn't have the design files I placed the images in figma and used a rectangle to measure out all the components.

The thing that had me stumped for a while was the sizing of the image in desktop mode. I had been trying to resize (shrink) the image to match the rest of the flex box items but it later turned out that what I needed to do was resize the details part of the card instead.

A few of the new things I learnt with this:

Using the picture tag for responsive images

```html
<picture class="card-image">
  <source
    srcset="./images/image-header-desktop.jpg"
    media="(min-width: 64rem)"
  />
  <img src="./images/image-header-mobile.jpg" alt="" />
</picture>
```

Using object fit along with flexbox and also gained a deeper understanding of how flexbox works.
Also used mix-blend-mode for the first time.

```css
img {
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  opacity: 0.8;
}
```

### Continued development

CSS is super powerful and soemthing I have yet to master. Next project will probably use css grids.

### Useful resources

- [Object-fit in dev in flexbox](https://stackoverflow.com/a/37133495/4154758) -The answer that helped me figure out how to use object fit in a div inside a flexbox

## Author

- Website - [Gautamji](https://gautamji.com)
- Frontend Mentor - [@Gautamji](hhttps://www.frontendmentor.io/profile/Gautamji)
- Twitter - [@iGautamji](https://www.twitter.com/iGautamji)
