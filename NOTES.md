TODO:
* Reset DB
  * functionality
  * Center Button
  * Reload Book List / App
- Edit Book
  * Capture inputed data on Save button click
  * Fetch PUT call to API with _id
  - Success Overlay
  - Working Overlay
* Delete Book
  * send DELETE request to server
  * get All book list to confirm deletion
* Create Book
  * Controlled Component in newBook
  * Controlled Component in cardInfo
  * Padding
  * send PUT request to server
  * Fetch GET call with book id
  * Update bookList
- Code Review
- License
- Production Build
- Deploy to Heroku


# How did you get bootstrap to work with React?
I installed both dependencies locally:
```bash
npm install create-react-app
npm install bootstrap
```
Then I edited `index.js` to include the following:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
```

# How do you handle multiple inputs on a sinlge component?
You give each input a unique name, then use `event.target.name` to determine which input element has data going into to it. Then on your `handleChange()` helper method you can write it like so:
```javascript
handelChange(event) {
  const name = event.target.name;
  this.setState({
    [name]: event.target.value
  });
}
```

From Mo:
Lift state from bookList to the App.js to get ResetDB working

Implement handlDelet to App.js, pass book data and handle delete function.

In BookList, if !props.books, then loading if not then populate the list
setState in booksList to delete the book

