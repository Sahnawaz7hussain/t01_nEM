###class notes

1. npm install redux
2. create the folder structure.
   - Redux folder
     - action.js
     - reducer.js
     - store.js
3. Creating the store.js file contents.
4. creting the reducer.js file contens.

### 2nd day redux class

// React Redux;

1. <Provider>
2. useSelector;
3. uesDispatch;

### install

1. Install the "redux" and rect-redux libary;
2. wrap our Applicationin the <Procider> component, and pass store as the only prop
3. use the useSelector hook to access the data from the redux.
4. use the useDispatch hook to access the

### todos

1. Install `axios` and `json-server`;
2. Create a script for running the json-server in the package.josn file.
   "server": "json-server --watch db.josn --port 8080",
3. Run this command, `npm run server` to run the json-server
4. We would change the format of the db.json file, to store our todos.
5. Need tocreate some components , like Todos.jsx and TodoInput.jsx,
6. Import Todos in App.jsx and TodoInput in Todos Component
