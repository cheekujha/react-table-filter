import {
  uniq,
  without,
  isTypeArray,
} from '../util';

export default class EventTarget {
  constructor(target) {
    this.target = target;
    this._handlers = {};
    this._pools = {};
  }

  // ------------------------------------
  // Utils
  // ------------------------------------

  _emit(name) {
    return (event) => {
      Object.keys(this._pools).forEach((poolName) => {
        const handlers = this._pools[poolName];
        if (!handlers) return;
        handlers.forEach((handler) => handler(event));
        return;
      });
    };
  }

  _normalize(handlers) {
    return isTypeArray(handlers) ? handlers : [handlers];
  }

  // ------------------------------------
  // Listeners handling
  // ------------------------------------

  _listen(name) {
    if (this._handlers.hasOwnProperty(name)) return;
    const handler = this._emit(name);

    this.target.addEventListener(name, handler);
    this._handlers[name] = handler;
  }

  _unlisten(name) {
    if (this._pools[name]) return;
    const handler = this._handlers[name];

    this.target.removeEventListener(name, handler);
    delete this._handlers[name];
  }

  empty() {
    return (this._handlers && Object.keys(this._handlers).length > 0) ? false : true;
  }

  // ------------------------------------
  // Pub/sub
  // ------------------------------------

  sub(name, handlers) {
    const newHandlers = this._normalize(handlers);
    const prevHandlers = this._pools[`${name}`] || [];
    const events = uniq([
      ...prevHandlers,
      ...newHandlers,
    ]);

    this._listen(name);
    this._pools[`${name}`] = events;
  }

  unsub(name, handlers) {
    const toRemoveHandlers = this._normalize(handlers);
    const prevHandlers = this._pools[`${name}`] || [];
    const events = without(
        prevHandlers,
        toRemoveHandlers,
    );

    if (events.length > 0) {
      this._pools[`${name}`] = events;
      return;
    }
    this._pools[`${name}`] = undefined;
    this._unlisten(name);
  }
}
