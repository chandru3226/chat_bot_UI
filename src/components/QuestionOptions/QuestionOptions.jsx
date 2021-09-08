import React from "react";

import "./QuestionOptions.css";

const QuestionOptions = (props) => {
  const options = [
    { text: "Support", handler: () => {}, id: 1 },
    { text: "Profile", handler: () => {}, id: 2 },
    { text: "Report", handler: props.actionProvider.handleReportList, id: 3 },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="question-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="question-options-container">{optionsMarkup}</div>;
};

export default QuestionOptions;