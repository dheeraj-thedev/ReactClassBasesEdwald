import { Component } from "react";


class MyClassBasesExample extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:"",
            usersObjs:props.usersObjs    // here we are injecting our props into our states 
        }
        this.handleOnChange= this.handleOnChange.bind(this)
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick(e){
        var avalibilityStatus= false;
        var userData={};
        
    this.state.usersObjs?.map(user=>{
        if(user.name===this.state.userName){
            userData= user;
            avalibilityStatus=true;
        }
    })
        if(avalibilityStatus){
            alert(`Yes The user Name is found ${userData.userName}-${userData.password} - ${userData.name} `)
        }
        else{
            alert("Yes The user Name is Not found ");
        }
    }

     handleOnChange(e){
        var target = e.target;
        if(target.id==="usrName"){
           // this.setState()
            this.setState({...this.state,  userName:target.value})
        }

     }


    render(){
        return(
            <>
            {/* <div>ENterd Data : {this.state}</div>  */}
                User Name <input onChange={this.handleOnChange}  type="text" id="usrName" name="usrName" ></input>
                <input type="button" onClick={this.handleClick} id="btnChkUsrName" value="Check User Name" name="btnChkUsrName"></input>
            </>
        );
    }
}

export default MyClassBasesExample