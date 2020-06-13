import React from "react";

const Item =({d,v})=>{
        console.log({d});
        return(
            <div className="row" style={{marginTop:"10px"}} onClick={()=>v(d)}>
              <div className="card-group">
              <div className="col-md-5" key={d.id.videoId}>
                <div className="card text-left">
                  <img className="card-img-left" src={d.snippet.thumbnails.medium.url} alt=""
                   style={{height:"150px",width:"190px"}}/>
                   </div> 
                   </div>
                   <div className="col-md-6">
                   <div className="card-body">
                    <h6 className="card-title">{d.snippet.title}</h6>
                  </div>
                   </div>

              </div>
              
              </div>
 )

    }

export default Item;