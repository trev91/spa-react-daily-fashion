A simple e-commerce app built in React.
![Daily Fashion App](https://i.ibb.co/vcGw3Y1/Screen-Shot-2019-01-13-at-12-38-24-AM.png)
## Access the project
Find it deployed on Heroku.<br>
[Open](https://secret-scrubland-94372.herokuapp.com/)<br>
Please allow 5-7 seconds when you first visit the site to allow the Heroku app to start.


## Note

This project is not hooked up to a back-end API service. For now, it reads in JSON data from a file within the project.

## Thoughts

While going through the process of building this app, I had a couple thoughts:

#### The API should give me slightly different data
To see the changes, go to the `product.json` file inside the `dummydata/` folder. Essentially, I propose adding in `variants` at the top level of the data we receive from the API. Each product returned from the API can have a different variation - or maybe it wouldn't. But if our "product of the day" is being sold in stripes or polka dots, instead of just different shades of blue, having a `variation_id` at the top level would allow us to write separate descriptions/sizing info for the slightly different products. **This may be over the top for now, but gives us flexibility for future use.

#### The image assets should be hosted
Generally speaking, it's good practice to host our product images somewhere, and reference them from their public urls.

#### Fonts
`Lasiver-Medium` was a font only found on my desktop iMac, and not on my Macbook Pro. `Lasiver-Medium` is the primary option, while I went with `Helvetica` second instead of the `Helvetica Condensed Bold` as the first alternate. It was more of a fit in my opinion.

## Why I used what I used

#### Images
I used `react-image-gallery` to handle displaying the images to the end user. The 'carousel-like' feature was what I was going for, and the zoom on click feature brings the image into focus (from `react-medium-image-zoom`). The flow of the implementation goes well with the rest of the site's motion and feel.

#### Chat
I used `react-chat-widget` to set up the HTML for our eventual chat feature. It is nice because it auto-responds to you as you type to it - which gives us some control on what we can do while we wait to have the feature actually implemented from the back-end. The animation and flow feels good.


#### Lottie
`Lottie` is what powers our various animations on the app. These subtle (and not so subtle) animations provide a feeling of legitimacy, as well as feedback when certain things happen. Adding to your bag, or checking out... there's an animation for that. ;)

#### Menus & Nav
`react-sliding-pane`, `react-modal`, and `react-burger-menu` are what I used to handle the smooth slide-in menus and navigation menus. They are fairly lightweight and provide a slick UX.

#### Collapsible Menus
`react-collapsible` was what was implemented here. The smooth animation and lightweight implementation made it a simple choice. I could have implemented this on my own, but with the small size, I felt I could save some time here and get nearly an identical solution to what I would have implemented.

#### Bag Storage
I used `localStorage` to handle the user's bag items from session to session. Normally, I would use a state management library like `mobX` or `redux`, but for this size of a project, localStorage was perfect.

## Styling Notes
I'll admit, I haven't used Foundation 5 before, so my styling could be better - however the result is solid. I used Sass in this project - it makes it simple to style parent/child components, but also allows for me to use variables like `colors` repeatedly. I would normally separate stylesheets by major "route" components, but seeing the brevity of this project, elected to keep it simple.

### Some of the animations (over the top? Nah.)
For others, just check it out on the site!


#### Contact Form Submission
![Contact Form](https://media.giphy.com/media/SJCJflOCLz1UwSFezb/giphy.gif)

#### Add to Bag
![Add to Bag](https://media.giphy.com/media/8qAB1HXbYvYKlXSgp4/giphy.gif)


----------------------------------------------------------------------------

### Final

Thanks for taking the time to review this app! It was fun to build - I wish there were a live API ready to go so we could launch this thing!

Any questions? Reach out to me!
