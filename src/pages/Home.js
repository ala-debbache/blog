import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);
        document.title = "Home";
    }
    render(){
        return (
            <div className="home">
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;