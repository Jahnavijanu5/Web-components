# Lab 01 | Working with web components

## Overview

This lab will introduce the concept of web components and how we can work with them in our web apps. 
During this lab, you will adjust the overall page layout using your knowledge of CSS. You will aslo instantiate one of the provided web components and update it's attributes to represent dynamic data consumption.

## Instructions

1. Inspect the `index.html` file, you'll notice that there are several html elements that have been added, and most of the layout already exists. Near the bottom of the DOM, you should see a script tag that is including our `src/app.js` file. This is where the bulk of your work will take place.
2. Open the `src/app.js` file and inspect the `appElement` variable. This is the element that we will be adding our web components to. You can see that we are querying the element, and then using template string literals to append various custom web components to the DOM.
3. We are going to add a single web component to the  `appElement.innerHTML` string. This web component is a custom element that we have created. It is a simple component that will display your name, and a greeting.
4. First, import the web component into the `app.js` file. You can see that we have already imported the `demo-component` and the `hello-world` components. We will be importing the `lit-hello-world` component. This component is a simple web component that is built using the LitElement library.
5. Once you have imported the `lit-hello-world` component, you can add it to the `appElement.innerHTML` string. You can see that we are using the `<hello-world>` component as a reference. The `<lit-hello-world>` component is a custom element, so we will need to use the custom element syntax to invoke it: 

```html
  <lit-hello-world></lit-hello-world>
```
*Note this will be added directly to your `appElement.innerHTML` string, not to the `index.html` file.*
6. Once you have added the `<lit-hello-world>` component to the `appElement.innerHTML` string, you can update the `name` attribute to display your name. Again, you can use the `<hello-world>` component as a reference. You'll add the name attribute to the opening tag of the `<lit-hello-world>` component, and then set the value of the attribute to your name:
```html
  <lit-hello-world name="Matt"></lit-hello-world>
```
7. Now that you have added the `<lit-hello-world>` component to the `appElement.innerHTML` string, you can update the `title` attribute and the `image-src` attribute in the `<demo-component>` to display a different image, of your choosing.
```html
  <demo-component title="My Title" image-src="https://placekitten.com/200/300"></demo-component>
```
8. Now that we have added these web components, let's update the CSS for the page. Open the `src/style.css` file and inspect the CSS. You'll notice that we have already added some basic CSS to the page. We are going to update the CSS to adjust the overall layout of the page. Add the following CSS to the `src/style.css` file:
```css
  #app {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  hello-world {
    grid-column: 1/6;
  }

  lit-hello-world, .field{
    grid-column: 1/4;
  }

  demo-component, .columns {
    grid-column: 4/6;
  }
```

## Summary
Great - now you've added some web components to your page, and you've updated the CSS to adjust the layout of the page. You've also updated the attributes of the web components to display dynamic data.

Take some time to examine the code in the `src/components` folder. You'll notice that we have created a custom element for each of the web components that we have added to the page. You can also see that we have added some CSS to the `src/components` folder. This CSS is scoped to the web component, and will not affect the rest of the page.