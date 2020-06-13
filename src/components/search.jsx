import React, { Component } from "react";

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
        }
    }

    handleForm=(e)=>{
        e.preventDefault();
        this.props.IData(this.state.inputValue);
    }

    render(){
        return(
            <div className="row" style={{marginTop:"20px"}}>
               <div className="col-md-8">
                   <form onSubmit={this.handleForm}>
                       <div className="form-group">
                           <input type="text" placeholder="search here" className="form-control"
                           onChange={e=>this.setState({inputValue:e.target.value})}/>
                       </div>
                   </form>
               </div>
            </div>
        )
    }
}
export default Search;