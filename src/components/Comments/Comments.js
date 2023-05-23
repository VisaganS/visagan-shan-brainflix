import './Comments.scss';
import profilePic from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/icons/add_comment.svg'
import CommentItem from '../CommentItem/CommentItem.js'
import { useState } from 'react';

const Comments = ({currComments}) => {
    return (
        <div className="comments">
            <div className="comments__counter">{currComments.length} Comments</div>
            <div className="comments__page">
                <div className="comments__create">
                    <div className="comments__images"><img src={profilePic} className="comments__profile-pic" alt="profile-pic" /></div>
                    <div className="comments__form">
                        <form className="form-inputs">
                            <div className="form-inputs__item">
                                <div className="form-inputs__input">
                                <div className="form-inputs__label"> <label htmlFor="comment">JOIN THE CONVERSATION</label></div>
                                <textarea className="comment" name="comment" placeholder="Add a new comment"></textarea><br/>
                                </div>
                                <div className="form-inputs__button-container">
                                    <button type="submit" className="form-inputs__button"><img src={commentIcon} className="form-inputs__icon"/>COMMENT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="comments__display">
                    {currComments.map( (commentItem,index) => {return <CommentItem key={index} commItem={commentItem}/> })}
                </div>
            </div>
        </div>
    );

}

export default Comments;