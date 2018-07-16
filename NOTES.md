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
You give each input a unique name, then use `event.target.name` to determine which input element has data going into to. Then on your `handleChange()` helper method you can write it like so:
```javascript
handelChange(event) {
  const name = event.target.name;
  this.setState({
    [name]: event.target.value
  });
}
```
