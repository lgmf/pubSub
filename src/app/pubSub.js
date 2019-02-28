class PubSub {

  constructor() {
    this._channels = {};
    this._subUid = -1;
  }

  publish(channel, next) {
    if (!this._channels[channel]) {
      return false;
    }

    const subscribers = this._channels[channel];

    for (let subscriber of subscribers) {
      subscriber.handler(next);
    }

    return this;
  }

  subscribe(channel, handler) {
    if (!this._channels[channel]) {
      this._channels[channel] = [];
    }

    const token = (++this._subUid).toString();
    this._channels[channel].push({ token, handler });

    return { unsubscribe: () => unsubscribe(this._channels, token) };
  }
}

const unsubscribe = (channels, token) => {
  const entries = Object.entries(channels);

  for (let [channel, subscribers] of entries) {
    const index = subscribers.findIndex(s => s.token === token);
    const isSubscriber = index !== -1;

    if (isSubscriber) {
      channels[channel].splice(index, 1);
    }
  }
}

export default new PubSub();
