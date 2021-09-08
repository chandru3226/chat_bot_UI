import { createChatBotMessage } from "react-chatbot-kit";
import QuestionOptions from "./components/QuestionOptions/QuestionOptions";
import LinkList from "./components/LinkList/LinkList";
import axios from "axios";

var data = {
  "Person":"User",
  "Message_Type": "Text",
  "Message":"Hellooooooooo"
}
const config = {
  botName: "Health Bot",
initialMessages: [
    createChatBotMessage(data.Message),
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "questionOptions",
    }),
  ],
 widgets: [
     {
      widgetName: "questionOptions",
      widgetFunc: (props) => <QuestionOptions {...props} />,
     },
      {
      widgetName: "reportLinks",
      widgetFunc: (props) => <LinkList {...props} />,
        props: {
        options: [
          {
            text: "About profile",
            url:
              "",
            id: 1,
          },
          {
            text: "About articles",
            url:
              "",
            id: 2,
          },
          {
            text: "About payment",
            url: "",
            id: 3,
          },
        ],
      },
    },
 ],
}

export default config