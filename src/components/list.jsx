import React, { Component } from "react";
import Item from "./item";

class List extends Component{
    constructor(props){
        super(props);
    }
    RenderListItem=()=>{
     return this.props.show.map(data => <Item d={data} key={data.id.videoId} v={this.props.VPlay}/> );
    }
    render(){   
        return(
            <div className="row">
            {this.RenderListItem()}
            </div>
        )
    }
}
export default List;