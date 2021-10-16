import { Component } from "react";


// we want to put some states in the component and that state is lying in  Compoenet  
// render()
class MyClassBasedHome extends Component{
    constructor(props){ // it get called whenver the compoent is loaded
        super(props)
        this.state={

            users:props.users
        }
        this.handleClick= this.handleClick.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
        
   

    }
    handleInputChange(e){ // will be holding the refrence of the sourse element
        switch(e.target.name){
            case "userName":{
                    this.setState({...this.state,  userName:e.target.value })
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
    render(){
        return (
        <>
        <div>{this.state.userName}{this.state.password}</div>
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
                <input type="button" onClick={this.handleClick} name="btnLogin" className="col" value="Login"></input>
                </div>
            </div>
        </>)
    }
}

export default  MyClassBasedHome;