# Sideshow
## Event discovery and ticketing
---
Sideshow is a single page application clone of Eventbrite, a popular ticketing and discovery website.

The site is live at https://aa-sideshow.herokuapp.com/

Sideshow uses Ruby on Rails with a PostgreSQL database on the back end, and React together with Redux on the front end.  Images are hosted on a dedicated AWS bucket, with uploading through the Paperclip gem.
---
## Key Features
#### User creation and authentication
Visitors can sign up or log in through a simple, intuitive form that just starts with the user's email, regardless of whether they're new or returning users.  
[insert image of login flow chart]
Authentication is hand-rolled with passwords saved and retrieved securely with hashing performed by the BCrypt gem.  Authenticated routes are provided through checking a user's session token and rerouting guest users to login pages when trying to create events or purchase tickets.  

#### Event index view
Elements are populated on the home page using a modern CSS grid system populated with Event Show boxes dynamically populated with several higher-order React components.  The page is responsive, with dynamic grid of elements being rendered with fewer columns and large decorative elements removed from display at narrower screen widths.

Dates are parsed dynamically throughout the site with the Moment.js package.  

#### Event show page  

A close copy of the Eventbrite show page, including a blurred background dynamically rendered with pure CSS.  

#### Event creation and editing

Validation of inputs for event creation and editing is performed per-field on everything from a custom image uploader for paperclip / AWS bucket upload to a custom datepicker implemented from the Flatpickr library.  Full styling of fonts, button, and field styling took a surprisg amount of dev time.

Users can also edit events by accessing their events in the user dashboard page.

#### Event ticketing

This simple modal provides users the ability to purchase tickets.  Event price is dynamically caucluated based on number of tickets, price of tickets, and the customary 13.47% in taxes and fees required by Sideshow for providing the platform.  


### Technical Challenges and solutions

Form validations were surprisingly challenging.  Because I wanted each field in the form to validate separately and display validation messages under the associated field rather than grouped at the bottom, I ended up modifying redux actions and reducers to bring pull all errors in to the state as a simple json object, only to be thwarted by a three hour quest through the entire redux cycle all the way down to the Event controller's save option being a save with a ! that was failing loudly in Ruby rather than writing validation errors to the object.

In general, I wish I had made both my css and react components much more modular.  Breaking out some existing elements in to components will likely make the remainder of the work on this site much more smooth.  

### Future Directions
  * #### Events
    * Event organizer profiles with profile pictures
    * Maps showing event locations

  * #### Tickets
    * Multiple ticket types
    * Event attendee lists / check in interface, event sales summaries
    * Restriction of number of tickets available for each event
    * Styling for events where tickets are sold out or ticket sales have ended
    * Creation of mobile-friendly ticket page with barcode linking to check-in page.

  * #### Event categories and Bookmarks
    * Event categories and bookmarks to provide filtered event browsing and discovery

  * #### UI / UX
    * Animated transitions, loading animations, & more involved rollover states for UI elements
    * Fully responsive design for mobile
