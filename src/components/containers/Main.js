import React, {Component} from "react";
import BookCard from "../views/BookCard";

class Main extends Component{
   
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <BookCard />;
            </div>);
    }
}

export default Main;