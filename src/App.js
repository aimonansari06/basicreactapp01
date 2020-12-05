import './App.css';
import React from 'react';
import Hello from './hello';
function App({name,age}) {
return (<div>Hello world from  app.js {name}
Age = {age + 2} <Hello fname={name} ></Hello>
</div>
 )
}

export default App;
