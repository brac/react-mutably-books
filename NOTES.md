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
