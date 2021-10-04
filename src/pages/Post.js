import React from "react";
import { Link } from 'react-router-dom';
import {getPost} from '../api';
import styles from '../styles/modules/post.module.css';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: {}
        }
        document.title = "Loding ...";
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        getPost(id).then((data)=>{
            this.setState({
                post: data
            });
            document.title = data.title;
        });
        
    }

    render(){
        if(Object.keys(this.state.post).length===0){
            return (
                <div className={styles.post}>
                    <h1>Loding post ...</h1>
                </div>
            );
        }else{
            const { title, description, image, tags } = this.state.post;
            let tags_array = [];
            if(tags.length>0){
                tags_array = tags.map((e)=>{
                    return (
                        <Link key={e} to={`/tags/${e}`}>
                            {e}
                        </Link>
                    );
                });
            }
            return (
                <div className={styles.post}>
                    <h2 className={styles.title}>{title}</h2>
                    <img className={styles.image} src={image} alt={title} />
                    <p className={styles.desc}>{description}</p>
                    <div className={styles.tags}>
                        {tags_array.length>0? tags_array: ""}
                    </div>
                </div>
            );
        }
    }
}

export default Post;