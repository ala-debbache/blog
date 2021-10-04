import React from "react";
import { withRouter } from "react-router-dom";
import PostComponent from '../components/postComponent';
import {getPostsByTag} from '../api';
import styles from '../styles/modules/blog.module.css';

class Tag extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        document.title = "Loding ...";
    }
    componentDidMount(){
        const tag = this.props.match.params.tag;
        getPostsByTag(tag).then((data)=>{
            this.setState({
                posts: data
            });
            document.title = tag;
        });
    }
    render(){
        if(this.state.posts.length===0){
            return (
                <div className={styles.blog}>
                    <h1 className="title">Loding posts ...</h1>
                </div>
            );
        }else{
            const posts = this.state.posts.map((e)=>{
                return (
                    <PostComponent key={e._id} post={e} />
                );
            });
            return (
                <div className={styles.blog}>
                    <h1>Blog posts</h1>
                    <div className={styles.posts}>
                        {posts}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Tag);