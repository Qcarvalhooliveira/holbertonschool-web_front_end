# Flexbox :computer:

## **Description** :speech_balloon:

* Flexbox, short for Flexible Box Module, is a CSS layout model that simplifies designing complex and responsive layouts. It excels in aligning and distributing space among items within a container, like divs, especially when their sizes are unknown or dynamic. Flexbox enables horizontal and vertical alignment of items, control over the direction of items (either in rows or columns), and the ability to order and reorder items visually without altering the HTML structure. It also allows flexible sizing of items to fit the container or distribute space according to set rules. This adaptability makes Flexbox a go-to choice for responsive web design, being supported by all modern browsers and offering solutions to layout challenges that were cumbersome with older CSS properties. While it doesn't replace other layout methods like Grid, Flexbox is an indispensable tool for contemporary web designers and developers.

## **What we should learn from this project:** :bookmark_tabs:

* What is Flexbox?
* How to convert float positioning to a flex display
* How to horizontally and vertically align elements using Flexbox
* The difference between the main and cross axes
* Properties that work on flex elements vs flex container
* Shorthands for flex
* How to create a new page with flex in mind

## **Tasks** :books:

#### 0. Add display flex 

* Use the starter HTML and CSS files from this task to task 10. Copy the contents of the starter files into the files that you need to produce and make the necessary changes according to the task description.

#### 1. Add new classes on sections 

* Using the files from the previous task as the base for this task:

In the outermost section tag for services

    Add the class section-services

In the outermost section tag for works

    Add the class section-works

In the outermost section tag for about

    Add the class section-about-us

In the outermost section tag for latest_news

    Add the class section-latest-news

In the outermost section tag for testimonial

    Add the class section-testimonial

In the outermost section tag for contact

    Add the class section-contact

#### 2. Reverse order Latest news cards 

* Using the files from the previous task for this task:

The flex-direction property says how flex items are placed on the main axis and their direction (normal or reversed).

flex-direction is sometimes used when doing responsive design. Some elements may appear better when they are in column mode on mobile and row when on desktop.

row-reverse and column-reverse should be used in specific situation. The visual order of elements should be the same visually and in the HTML code. Refer to flex-direction - CSS: Cascading Style Sheets | MDN for more information

In your CSS file:

Before /*** 4. CARD ***/, add a new comment: /* Section Latest news ============================= */

Under that comment section, target the row class inside section-latest-news class

    Property: flex-direction, Value: row-reverse

The Latest news should appear in a reverse order. 

#### 3. Simplify services list 

* Using the files from the previous task for this task:

flex-wrap is a property that can force the flex items to be in one or multiple lines. Learn more about it here.

In the Services section of 3-index.html, remove the second ul and put the 3 lielements under the first ul

Now, in your CSS file, before /*** 4. CARD ***/, add a new comment: /* Section SERVICES ============================= */

Under that comment section, add a new selector targeting the row class inside the section-services class

    Property: flex-wrap, Value: wrap

#### 4. Playing around with the spacing between flex service items

* Using the files from the previous task for this task:

In 4-styles.css file, within the Grid section

    In .col-1-3 selector
        Replace the current width with calc((100% / 3) - 2rem)

    In .col-1-2 selector
        Replace the current width with calc((100% / 2) - 2rem)

    In [class*='col-']
        Remove the padding declaration
        Set Property: margin to 1rem

    In ul.row declaration
        Replace the current margin with -1rem

#### 6. Flexify the navbar 

* Using the files from the previous task for this task:

in 6-styles.css, inside the /* Navbarsection

    In the nav class selector
        Property: display, Value: flex
    Inside the .nav .nav-item selector, remove the display declaration
    Target .nav-item + .nav-item inside nav class
        Move the margin declaration from .nav .nav-item inside the new selector.
    In the variables section
        Change the value of the variable nav-item-margin to be 0 0 0 2rem

#### 8. Simplify the hero banner 

* Using the files from the previous task for this task:

In 8-styles.cssInside the /* Section HERO section

    In the selector targeting section-inner class in section-hero class, remove the padding and replace with
        Property: display, Value: flex
        Property: flex-direction, Value: column
        Property: align-items, Value: flex-start
        Property: justify-content, Value: center
        Property: min-height, Value: 50vh

#### 9. Better alignment about us 

* Using the files from the previous task for this task:

In 9-styles.css, after the /* Section SERVICES section, create a /* Section ABOUT US section. Inside that new section, target all classes that begin with col- inside section-about-us class

    Property: align-self, Value: center

#### 10. Creating an article by fixing issues and updating hero styles 

* Using the CSS file from the previous task and article.html (provided above in the project description) for this task:

In 10-styles.css, inside the /* Section HERO section

After the .section-hero, add a new hero-homepage class selector (you will need to add that class later in your html files)

Move all declarations inside section-hero inside the new hero-homepage class selector

Inside section-hero class selector

    Property: position, Value: relative
    Property: margin-top, Value: -8.5rem

Below, target .section-body inside section-hero class

    Property: padding, Value: 10rem 4rem

Below, target .section-category inside section-hero class

    Property: color, Value: point to the variable color-white
    Property: text-transform, Value: uppercase

#### 11. Update the new hero banner 

In 11-article.html in the Hero section

    Add the hero-article class on the <header> which is in <main>
    Add this background-image (pic-article-02.jpg) as an inline style still on the <header>
    Inside the section with section-inner class
        Add a span with the class section-category and the text Digital Life
        Below, add an h1 with the class section-title and the following text Ut alios omittam, hunc appello, quem ille unum secutus est

#### 12. The structure of the main article 

In your 12-article.html file, in the Hero section

    After the header, create a <div>and set its class to main-article (this div will be siblings with the Hero section header)
    Create a div inside the main-article div and set the class to container
    Create a div with the class post inside the container div
    Inside the post div:
        Create a new article with the class post-content
        Below the post-content article, add the comment <!-- Aside section -->
        Sibling to the post-content article and after the comment, create an aside with the class post-aside
        Inside post-aside aside, create 2 divs:
            The first with the class post-meta
            The second with the class post-share

#### 13. The meta list inside the aside section 

In your 13-article.html

    Create an unordered list inside the post-meta div with the classes post-meta-list and row
        Create a first <li> with the class post-meta-author
            Create the HTML tag that show a stronger importance
                Text: Written by:
            Create a link
                Href: #
                Rel: author
                Text: William Attaway
        Create a second <li> with the class post-meta-date
            Create the HTML tag that show a stronger importance
                Text: Posted on:
            Use the HTML tag for date / time - Datetime: 2019-10 - Text: October 2019
        Create a third <li> with the class post-meta-tag
            Create the HTML tag that show a stronger importance
                Text: Tags:
            Create an unordered list with the class tag-list
                First <li> contain a link
                    Href: #
                    Rel: tag
                    Text: Web Design
                Second <li> contain a link
                    Href: #
                    Rel: tag
                    Text: UX

#### 14. Add the share social icons 

* In your 14-article.html, inside the post-share div

    Copy paste the social nav list (already existing in the footer) inside
    Remove the li with Instagram (3rd one)
    Replace the href in the links with a default value ( #)


## **Author**

* **Queise Carvalho de Oliveira** - [Queise Oliveira](https://github.com/Qcarvalhooliveira)


## License
This project is licensed under the [MIT License](LICENSE).
