import { Component, useState } from "react"



// props == is a property that can be passed to any react Component




export function MyCustomInput(props){
  return <>
      <input 
      onClick={props.onClick} 
      onChange={props.onChange} 
      className={props.class} 
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.id}></input>
  </>
}

function HomePage(props){
    // if you want to have state here ? you can take it via hooks 
    // hook over here are just functions that will by pass the lengthy process in class components
    const {userData, setUserData}= useState({});

    const data=[
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},  {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
        {image:"https://avatars.githubusercontent.com/u/32265439?v=4", text:"It is Java Core where in you will the basics", title:"Java Course"},
  ]
    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr> </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <UserIcon image="https://avatars.githubusercontent.com/u/32265439?v=4" userName="Dheeraj"></UserIcon>
    </div>
  </div>
        </nav>

        <div className="container">

            {
                data.map((row,i)=>(
                    <Card image={row.image} text={row.text} title={row.title}></Card>
                ))
            }
         
        </div>
    </>
}

function Card(props){
 return   <>
    <div class="card" style={{width: "18"}}>
  <img src={props.image} style={{width:150,height:150}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
}


function UserIcon(props){
    return <>
        <img style={{ height:50, width:50 }}src={props.image} class="rounded"></img>
        <label>{props.userName}</label>
    </>
}

export default HomePage
// you can have only one default export 
// if already have used default export the you can export the rest components if required without having dfault 
// this without default export will be imported {}