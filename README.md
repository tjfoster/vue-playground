# vue-playground
Learning Vue.js

Simple Vue app with a textbox, checkbox and panel component.

TODO (short term): 
-Persist data in checkboxes
-Validation
-Write a custom directive to handle input focus on enter key press.  Enter press in last name should call nextPanel.

TODO (long term): Use TBD PHP framework for backend.  Attach DB.  Make pretty.

What I've learned:  This really isn't a practical architecture for a system.  The panel element is far too opinionated.  In retrospect, I would
create a name-panel component and a colors-panel component.  I got pretty hung up on the "reusable" quality of Vue components.  I may come back 
to this at some point.
