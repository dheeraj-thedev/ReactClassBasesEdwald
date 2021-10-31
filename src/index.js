import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import MyClassBasedHome from './Component/Home';//./Component/Home"
import FunctionalUserNameChkr from "./Component/classBased/FunctionalComponent"

import reportWebVitals from './reportWebVitals';
import MyClassBasesExample from './Component/classBased/ClassBasedComponentExample';


const users= [
  {userName:"dheeraj@gmail.com",password:"123",name:"dheeraj"},
  {userName:"edwald@gmail.com",password:"321",name:"edwald"},
  {userName:"don@gmail.com",password:"456", name:"don" },
  {userName:"alex@gmail.com",password:"654", name:"alex"}
]


//  {/* We will create a componenet that will have refrence to another compoenets  */}
ReactDOM.render(
  <React.StrictMode>
     
<>
<FunctionalUserNameChkr name={"dheeraj"} usersObjs={users}></FunctionalUserNameChkr>

</>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
