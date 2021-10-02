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
            post: {}
        };
        document.title = "Create new post";
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const tags = this.state.tags.split(" ");
        const post = {
            ...this.state,
            tags: tags
        }
        createPost(post).then((data)=>{
            this.setState({
                post: data
            });
        })
        .then(()=>{
            this.props.history.push(`/posts/${this.state.post._id}`);
        });
    }

    render(){
        return (
            <div className={styles.create}>
                <h1 className={styles.title}>Create new post</h1>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <input type="text" name="title" className={styles.input_text} placeholder="Title goes here" onChange={this.handleChange} />
                    <textarea name="description" className={styles.textarea} placeholder="Description goes here" onChange={this.handleChange}></textarea>
                    <input type="text" name="image" className={styles.input_text} placeholder="Image link go here" onChange={this.handleChange} />
                    <input type="text" name="tags" className={styles.input_text} placeholder="Tags go here" onChange={this.handleChange} />
                    <input type="submit" className={styles.submit} value="Add new post" />
                </form>
            </div>
        );
    }
}

export default withRouter(CreatePost);