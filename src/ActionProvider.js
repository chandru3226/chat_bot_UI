class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  support(){
    const supportMessage = this.createChatBotMessage("Our support team will contact you.")
    this.updateChatbotState(supportMessage)
  }
  profile(){
    const profileMessage = this.createChatBotMessage("Your profile needs some work")
    this.updateChatbotState(profileMessage)
  }
  handleReportList = () => {
    const message = this.createChatBotMessage(
      "We are happy to assist you with your problem:",
      {
        widget: "reportLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleDefault(){
    const defaultMessage = this.createChatBotMessage("Pleae enter something that I can understand");
    this.updateChatbotState(defaultMessage);
  }
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
 
    
  this.setState(prevState => ({
      prevState, messages: [...prevState.messages, message]
    }))
  }

}

export default ActionProvider;