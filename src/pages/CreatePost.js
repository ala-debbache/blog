import React from "react";
import {createPost} from '../api';
import { withRouter } from "react-router-dom";
import styles from '../styles/modules/create.module.css';

class CreatePost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            image: "",
            tags: "",
            post: {},
            errors: {}
        };
        document.title = "Create new post";
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidUpdate(){
        if(this.state.errors.hasOwnProperty("title")){
            document.getElementById("title").style.borderColor ="#f94144";
        }
        if(this.state.errors.hasOwnProperty("description")){
            document.getElementById("description").style.borderColor ="#f94144";
        }
        if(this.state.errors.hasOwnProperty("image")){
            document.getElementById("image").style.borderColor ="#f94144";
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            errors: {}
        });
        let tags = [];
        if(this.state.tags!==""){
            tags = this.state.tags.split(" ");
        }
        const post = {
            ...this.state,
            tags: tags
        }
        createPost(post).then((data)=>{
            if(data.hasOwnProperty("errors")){
                this.setState({
                    errors: data.errors
                });
            }else{
                this.setState({
                    post: data
                });
            }
        })
        .then(()=>{
            if(Object.keys(this.state.post).length>0){
                this.props.history.push(`/posts/${this.state.post._id}`);
            }
        });
    }

    render(){
        return (
            <div className={styles.create}>
                <h1 className={styles.title}>Create new post</h1>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <input id="title" type="text" name="title" className={styles.input_text} placeholder="Title goes here" onChange={this.handleChange} />
                    <label className={styles.error}>{this.state.errors.title? this.state.errors.title.message: ""}</label>
                    <textarea id="description" name="description" className={styles.textarea} placeholder="Description goes here" onChange={this.handleChange}></textarea>
                    <label className={styles.error}>{this.state.errors.description? this.state.errors.description.message: ""}</label>
                    <input id="image" type="text" name="image" className={styles.input_text} placeholder="Image link go here" onChange={this.handleChange} />
                    <label className={styles.error}>{this.state.errors.image? this.state.errors.image.message: ""}</label>
                    <input id="tags" type="text" name="tags" className={styles.input_text} placeholder="Tags go here" onChange={this.handleChange} />
                    <input type="submit" className={styles.submit} value="Add new post" />
                </form>
            </div>
        );
    }
}

export default withRouter(CreatePost);