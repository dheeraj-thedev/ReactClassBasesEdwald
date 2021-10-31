import { Component } from "react";
import {MyCustomInput} from "../Component/MyShoppintPage"


// we want to put some states in the component and that state is lying in  Compoenet  
// render()
class MyClassBasedHome extends Component{ // this is inheritance 

    // always class based components are 40% slower than the functional components 


    // here if you want to have state object that involves in many steps 
    //1 you have to define a constructor
    //2 you have initialize the base class
    //3 then you will have {this} avaliable 


    constructor(props){ // it get called whenver the compoent is loaded
        super(props)
        this.state={
            users:props.users
        }
        this.handleClick= this.handleClick.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
        this.btnHandeler= this.btnHandeler.bind(this);

    }
    handleInputChange(e){ // will be holding the refrence of the sourse element
        switch(e.target.name){
            case "userName":{
                    this.setState({...this.state,  userName:e.target.value.toUpperCase() })
                break;
            }
            case "password":
            {
                this.setState({...this.state,  password:e.target.value })
                break;
            }
        }
    }
    handleClick(e){
        let isFound=false;
        this.props.users.map(user=>{
        const {userName,password} = user
            if(userName===this.state.userName && password===this.state.password){
                isFound=true;
            }
        });

        if(isFound){
            alert("Welcome");
        }
        else{
            alert("Can Not Welcome you");
        }
    }


    btnHandeler(e){
        alert("I am a Button"+e.target.id)
    }

    render(){
        return (
        <>
        <div>{this.state.userName}{this.state.password}</div>


        <div className="container-fluid"> 
                <MyCustomInput 
                id="primary"
                class="btn btn-primary"
                type="button"
                onClick={this.btnHandeler}
                value="click me" >

                </MyCustomInput>
                <MyCustomInput 
                     id="secondary"
                class="btn btn-secondary"
                type="button"
                onClick={this.btnHandeler}
                value="click me" >

                </MyCustomInput>
                <MyCustomInput 
                     id="danger"
                class="btn btn-danger"
                type="button"
                onClick={this.btnHandeler}
                value="click me" >

                </MyCustomInput>
             </div>


            <div className="container">
                <div>
                    <label className="form-label"> Login Box </label>
                </div>
              <div className="row">            
                    <label className="col-3">UserName</label> <input value={this.state.userName} onChange={this.handleInputChange} name="userName" className="col-9" type="text" id="userName"/>
              </div>
                <div className="row">
                    <label className="col-3">Password</label> <input value={this.state.password} onChange={this.handleInputChange} name="password" className="col-9" type="password" id="password"/>
                </div>
                <div className="row">
                <input className="btn btn-primary" type="button" onClick={this.handleClick} name="btnLogin" className="col" value="Login"></input>
                </div>
            </div>
        </>)
    }
}

export default  MyClassBasedHome;