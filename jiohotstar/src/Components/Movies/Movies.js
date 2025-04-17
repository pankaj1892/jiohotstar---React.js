import React, { Component } from "react";
import MoviesList from "./MoviesList";
import BGimage from "./BGimage.json"

class Movies extends Component {
    constructor(){
        super();
        this.state = {
            title: 'Movies Page',
            movies:  BGimage
        }
    }
    render(){
        return(
            <div className="jiohotstar">
                {/* <h2>{this.state.title}</h2> */}
                <MoviesList movlist={this.state.movies}/>
            </div>
        )
    }
}
export default Movies;
