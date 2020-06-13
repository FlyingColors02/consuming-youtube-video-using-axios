import React from "react";

const Selected = ({videoPlayer})=>{
    if(!videoPlayer){
        return null;
    }
    console.log({videoPlayer})
    return(
        <div className="row">
            <div className="col-md-12">
            <iframe width="800" height="400" src={`https://www.youtube.com/embed/${videoPlayer.id.videoId}`}
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            <h6>{videoPlayer.snippet.title}</h6>
            </div>
        </div>
    )
}

export default Selected;