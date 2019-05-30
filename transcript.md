Hello, my name is Ilya
and I want to tell you about the history API.


The HTML5 history API is
a standardized way to manipulate the browser history via script. Before the
history API, developers had to use hash URLs to change the current URL without
reloading the page and create client side routing in Single Page Applications.  Now this API gives us some useful features
such as: traveling through history, changing the address bar content, adding
and modifying history entries, triggering the browser navigation methods.


The history API is
available from the **window.history** object. You can simply open the console
of your browser and type **window.history** (or just **history**) which will
show you the object and its properties.


Let’s start with the
simplest thing you can do with the History API. You can go back to the previous
page using **history.back**. You can go forward to the next page using **history.forward**.
This is exactly just like clicking the browser’s **back** and **forward**
buttons. Also the **go()** method lets you navigate back or forward multiple
levels deep. To know how many entries there are in the history, you can call **history.length**.


Using **pushState**
method you can create a new history entry programmatically. This method takes
three parameters: a state object, a title and a URL. The first is an object
which can contain anything (there is a size limit however, and the object needs
to be serializable). The second parameter is currently unused by major
browsers, so you generally pass an empty string. The third parameter is a URL
associated to the new state. Note that the URL needs to belong to the same
origin domain of the current URL.
 

While **pushState()**
lets you add a new state to the history, **replaceState()** allows you to edit
the current history state. If you now call **history.back()** the browser goes
straight to /posts, since entry named "first" was replaced by
"second" entry.
 

**History.state**
property returns the current state object.

Thus far, we have
covered the **pushState** and **replaceState** events in order to control the
browser history, but suppose we have a variety of fake history that we have
totaled in the browser. But browser do not know what it should do when user
clicks the browser "back" and "forth" buttons.

That's what the **popstate
event is gonna do for us. This code will log the new state object every time
you call **history.back(), **history.forward()** or **history.go()**.

When
your page loads, it might have a null state object. This can happen, for
example, if the page sets a state object (using **pushState()** or **replaceState()**)
and then the user restarts their browser. When your page reloads, the page will
receive an **onload** event, but no **popstate** event. However, if you read
the **history.state** property, you'll get back the state object you would have
gotten if a **popstate** had fired.


We've covered the history API, its
properties and methods before, but why should we use them? After all, a simple
link can navigate to a new URL; that’s the way the web has worked for 20 years.
And it will continue to work that way. But at the same time, browsers have
always had a fundamental limitation: if you change the URL, even through
script, it triggers a roundtrip to the remote web server and a full page
refresh. This takes time and resources, and it seems especially wasteful when
you are navigating to a page that is substantially similar to the current page.
Everything on the new page gets downloaded, even the parts that are exactly the
same as the current page. But the history API gives us the ability to tell the
browser to change the URL and download only the part we need.
 

Let's say you have the next page. Clicking
on one of the numbered elements should change the content of the purple part of
the page and its URL.
 

Something like this. So, only half of the
page changes, and it would be unwise to reload it completely. That's where
history API comes into play.
 

Look at the example.


This is the markup for a simple page: the
unordered list contains four items with links.
 

It will look like this after adding some
styles. Let's simulate moving forward in browser history.


So, we need to add a click handler to our
menu element, the function of adding an active class to the current element,
update the browser location bar, and prevent the default page refresh, cause we
work with the link tags. But we still need to talk about what happens when the
user presses the back button. **Popstate** event? Right!

 
Before that, we bound a state object to
each page, now we call the necessary function with the properties of this
object. Do you remember a null value of the state object? That's why we're
checking him out. We can also replace the default state.

 
It's done! The state object could have
something less primitive, like some page content, image links, or Ajax request
links. It would work the same way.

 
Okay, not bad. But what about browser
support? Wow, this green line is a good sign. Even IE can work with that. Well,
the history API has created a great impact on how our simple web application
works. It make it easy to create efficient single-page application. It's a
really nice API, isn't it? That's all I wanted to say. Thanks very much!
