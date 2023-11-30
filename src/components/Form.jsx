import React from "react";
import { addData } from "../utils/data";

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            desc: "",
            errTitle: "",
            errDesc: ""
        }

        this.titleChange = this.titleChange.bind(this);
        this.descChange = this.descChange.bind(this);
    }

    titleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 50) {
            this.setState({
                title: value 
            });
        }
    }
    
    descChange = (e) => {
        const value = e.target.value;
        this.setState({
            desc: value 
        });
    }

    render(){
        return(
            <>
                <div className="add-form">
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={(e) => this.titleChange(e)}></input>
                    <span className="word-counter">{this.state.title.length}/50</span>
                    <label>Description</label>
                    <textarea onChange={(e) => this.descChange(e)} value={this.state.desc}></textarea>
                    <button type="button" onClick={() => addData(this.state.title, this.state.desc)}>Add !</button>
                </div>
            </>
        );
    }
}