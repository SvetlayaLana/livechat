class WSClient {
  constructor() {
    this.subscriptions = [];
    this.master = null;
  }

  set masterName(userName) {
    this.master = userName;
  }

  subscribe(userId, onOpen, onClose) {
    if(this.subscriptions.find(item => item.userId === userId))
      throw new Error('Subscription exists');
    if(!this.master)
      throw new Error ('No masters here');

    const webSocket = new WebSocket(`ws://localhost:7070/${ this.master }/${ userId }`);

    webSocket.onopen = () => {
      console.log("[Socket is open with]", userId);
      onOpen();
    };
    webSocket.onmessage = (e) => {
      console.log(e.data);
    };
    webSocket.onclose = (e) => {
      if(e.wasClean)
        onClose();
      else
        console.log('[Socket dirty close]');
      console.log('[Socket closed with]', userId);
    };
    webSocket.onerror = (err) =>{
      console.log('[Socket Error]',err);
      onClose();
    };

    this.subscriptions.push({
      userId,
      webSocket,
    })
  }

  unsubscribe(userId) {
    const subscription = this.subscriptions.find(item => item.userId === userId);

    if(subscription)
      subscription.webSocket.close(1000);
    else
      console.log("Subscription doesn't exist")
  };
}

export default new WSClient();
