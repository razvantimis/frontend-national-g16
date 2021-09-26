## Comment Box

Continue working on the comment box widget that we started together on our previous course,
and add the following functionalities to it:
* Add Comment

  * Add event listener on “Add” button

  * Push into “comments” a newly created JS Object with a generated Id, a
hardcoded email and image and the text from input.

  * Move the code that loops through all the comments and displays them in a
“displayComments” function ­ to reuse the code

  * At the beginning of the displayComments function clear the container (set the
content for “ul” elem to empty string)

  * Call the displayComments function in the mainFunction (in the place where the
code was before you moved it in displayComments function)

  * Call displayComments function in the event listener for “add” button , right after
you pushed the new object in comments array.

* Remove Comment ( Optional )
  * Set an attribute on “x” button with value set to comment id (e.g:
data­value=”com1”), so you can identify which comment to remove from the array
  * Add event listener on “X” button
  * In the event handler “this” will be exactly the clicked element, so you can get your
comment Id from the attribute that you set on the step 1
  * Now that you have the comment id , you‘ll have to search on the array for the
comment with the given Id and remove it
  * Call displayComments function
Enjoy! :)

## Mod de lucru Individual

