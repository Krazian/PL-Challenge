# angular-ozdjnp

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ozdjnp)

### What was included in this project
  - Retrieve list of students from the students-data.service.ts file
  - Integrated the "RUD" part of "CRUD".
    - Most of the time was spent trying to perfect  and elminate edge cases during the update and delete functions
    - Issues that arose and were taken into consideration:
      - Would open edit for one student, but if another student was clicked the single student display would switch to the clicked student after the form was closed. Fixed this by tracking whether the edit form was open, and if so, do not track the click on a new student. 
      - When updating a student, the data would be updated in the parent component's prop/attribute, but was not reflected in the list of students. The solution was to emit the updated student's info from the form to the list component on save.
  - Basic keyword search. When the user searches a word or words, the function will strip numbers and special characters (all data minus the id is or contains alphabetical string) and runs a regex test on a concatenated string of all the day to prevent excessive nested loops.
  - Sorting of the student list (just by name). I allow the user to toggle between ascending and descending, and the sorting happens on the current list of students. This means that you can search the list of students using keywords and then sort that filtered list.

### Missing functionality that I would've liked to include 
  - A way to add a new student.
  - An additional sorting option for the therapy types
    - Something that was blocking me on this task was figuring how the sorting would work for an entire unfiltered list (i.e., if sorting by speech therapy, would someone with ONLY speech therapy be at the top of the list? What about someone multiple therapy types including speech).
  - Ranking/sorting when user is using the search bar (i.e., if I search for 
  - In additon to the bonus of creating asynchornous functions to handle the filtering, updating, and deleting of data, I would've like to expand on the services to have the data centrally located (similar to React's Redux stores) to avoid having to "prop" drill the data through multiple components
  - I may have understood the prompt text, but it sounded like there was supposed to be a way to add students to the user's caseload? With that idea in mind I wanted to add a way to add/remove a student to/from another called "caseload" where it'd be clearly indicated that student was actively in the user's caseload.
  - Needless to say that the UI is pretty bare, I would've like to at least throw in more colors and better organization of the elements.

