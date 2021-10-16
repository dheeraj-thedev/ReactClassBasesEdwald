import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import MyClassBasedHome from './Component/Home';//./Component/Home"

import reportWebVitals from './reportWebVitals';


const users= [
  {userName:"dheeraj@gmail.com",password:"123"},
  {userName:"edwald@gmail.com",password:"321"},
  {userName:"don@gmail.com",password:"456"},
  {userName:"alex@gmail.com",password:"654"}
]


//  {/* We will create a componenet that will have refrence to another compoenets  */}
ReactDOM.render(
  <React.StrictMode>
      <MyClassBasedHome users={users}></MyClassBasedHome>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
