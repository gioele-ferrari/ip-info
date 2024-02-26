import React from "react"

function Question(props) {
    return (
        <div className="faq-container fl-row">
            <div className="faq-item">
                <h1 className="faq-title fl-row">
                    {props.data.info[0]}
                    <img src="./img/question.png" width={20} height={20}  alt={""}></img>
                </h1>
                <p className="faq-answer">
                    {props.data.info[1]}
                </p>
            </div>
        </div>
    );
}

export default Question