# cv-application

1. This is my first React project, i don't have Live Preview currently, because i think i made the mistake of making only three components, and it doesn't look pretty right now, this is why i am going to put much more effort in the next project.

1.1. The first section of the CV application, has a form with name, email, phone and address, the first mistake i made here, was that i wasn't able to get the values from the form, i solved this by using FormData.

The state could be done differently, i wanted to submit the form into one object with all the form values, which it worked, to prevent mutating the state, i used spread operator to create copy of the project, doing this way i was sure i wasn't mutating the state, which could caused render issuses later.

The submit button, submits the form values from the input to the form itself, here i had one problem, my initial idea was to add more Experience and Education, and i learned how to render the same object to look like i am creating ano more section in React.

Spread operator was used also there, to create copy of the object, this worked but the problem was, the form was disappearing for no reason, even though with preventDefault for some reason, only happens on the new sections when the submit is called, one quick fix i used to prevent this behavior is, to change type of the button from being submit to a button, this worked but also made the form not submitting.

What i could done better is to split the components of the form, into smaller ones, this way it could have been much easier to style and manage, but i am definitely taking notes and looking how other people have done it, and learn how to take it and put it into the next project.

1.2. The other two sections are basically the same, but they had different labels of course, i learned how to pass JSX with props from one component into another, also putting the state into the parent was good idea, because with using one button that saves the values, intead of typing and seeing the changes instally, this wasn't a problem and i didn't have to lift up the state.

What i should have done differently, is to remove the LivePreview component from the form and put it somewhere else, for exammple in another file and then figure out how to make it, into one big sheet and then when you type and submit the values would apprear there.

I definitely learned about the state and props in this project, the project was simple but the struggle was not, this is why i am putting what i learned here into the nexts projects.

In short what i learned, the state should definitely stay in the parent (also it depends), how to properly passed the props, how to use an object to save the form values, if i am coming back with more knowledge, i would split the components, add more Education/Experience and etc.
