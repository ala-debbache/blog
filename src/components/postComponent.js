import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styles from '../styles/modules/blog.module.css';

const PostComponent = (props) => {
    const { _id, title, image, tags } = props.post;
    const tags_array = tags.map((e)=>{
        return (
            <Link key={e} to={`/tags/${e}`} >
                {e}
            </Link>
        );
    });
    return (
        <div className={styles.post_comp}>            
            <img className={styles.image} src={image} alt={title} />
            <Link to={`/posts/${_id}`} onClick={()=>props.history.push(`/posts/${_id}`)}><h3 className={styles.title}>{title}</h3></Link>
            <div className={styles.tags}>
                {tags_array}
            </div>            
        </div>
    );
}

export default withRouter(PostComponent);