class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowerCaseMessage = message.toLowerCase();
    if(lowerCaseMessage.includes("hello")){
      this.actionProvider.greet();
    }
    else if(lowerCaseMessage.includes("support")){
      this.actionProvider.support();
    }
    else if(lowerCaseMessage.includes("profile")){
      this.actionProvider.profile();
    }
    else if(lowerCaseMessage.includes("report")){
      this.actionProvider.handleReportList();
    }
    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;