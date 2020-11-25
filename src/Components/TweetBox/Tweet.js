import React from 'react';
import './posting_style.scss';
const Tweet = ({ tweetObj }) => {

    return(
        <div className="all">
        <form>
            <section className="input_text">
                {
                    //uid로 auth user에 접근할 방법이 없음,,, 작성자 프사는 userdocument를 참조해야함,,,
                }
                <div className="cabbage">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/765/765618.svg"/>
                </div>
                <div className="profile">
                    { false ? (
                        <img src={tweetObj.attachmentUrl} alt="userphotoURL" width="100px" height="100px"/>
                    ) : (
                        <a href="#">
                        <i className="fas fa-user-circle profile fa-3x"/>
                    </a>
                    )}
                
                </div>

                <div className="user_name">
                    <h3>{tweetObj.creatorId}</h3>
                </div>

                <div>
                    <textarea 
                        placeholder="당신의 멋진 취미는 무엇인가요?"
                        value={tweetObj.text}
                        type="text"
                        readOnly
                    />
                </div>

                {tweetObj.attachmentUrl && (
                    <div className="factoryForm__attachment">
                        <img
                        src={tweetObj.attachmentUrl}
                        style={{
                            backgroundImage: tweetObj.attachmentUrl,
                        }}
                        width = "200px" height = "150px"
                        />
                    </div>
                )}
            </section>
        </form>
        </div>
    );
}

export default Tweet;