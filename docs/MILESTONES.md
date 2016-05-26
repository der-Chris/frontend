# Past Versions

## v0.x
Basic features: create question, public/private question links, post suggestion, comment and up/down vote suggestion.

### Use cases
* A user visits the site the first time, sees the "Create Question" form to directly enter a question. Below this form, the latest public questions of other users are listed.
* A user creates a new question by filling out the "Create Question" form (title and visibilty) at the front page and gets redirected to his new question. A infobox at the top of the page explains what the user has to do (copy url, send to others, create suggestion, vote and comment).
* A user receives a link of question, opens it and sees the title of the question, all current suggestions ordered by their current votes. By clicking on a suggestion, all their comments are displayed.
* A user creates a suggestion for a question by posting a link or text or both in the "New Suggestion" form at a question.
* As soon as a user visits the site, a cookie is generated to identify that user. All user actions are associated with the cookie's value such that the user can revisit the site without loosing track of the content he created. This mechanism will be replaced by user authentication in version 1.x.

### Features
* v0.3
  * Basic Question API
  * Nodejs server
  * Mongodb

* v0.2
  * Basic Welcome and Question UI

* v0.1
  * React, Redux, Typescript environment
  * Typescript and Browserify compile workflow


# Planned Milestones

## v1.x
User authentication, differential view on question after first visit, search, tags.
