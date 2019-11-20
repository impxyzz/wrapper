global.EventEmitter = class EventEmitter {
  events = new Map();
  events_after = new Map();

  on(name, listener) {
    let listeners = this.events.get(name);

    if (listeners === undefined) {
      this.events.set(name, listeners = []);
    }

    listeners.push(listener);
    return this;
  }

  after(name, listener) {
    let listeners = this.events_after.get(name);

    if (listeners === undefined) {
      this.events_after.set(name, listeners = []);
    }

    listeners.push(listener);
    return this;
  }

  removeListener(name, listener) {
    let listeners = this.events.get(name);

    if (listeners === undefined) {
      return;
    }

    const idx = listeners.indexOf(listener);

    if (idx > -1) {
      listeners.splice(idx, 1);
    }

    return this;
  }

  emit(name, cancellable = false, ...args) {
    let listeners = this.events.get(name),
        listeners_after = this.events_after.get(name);
    let ret = listeners === undefined || !listeners.some(listener => {
      try {
        return listener.apply(this, args) === false && cancellable;
      } catch (e) {
        console.log(e.stack || new Error(e).stack);
        return false;
      }
    });

    if (listeners_after !== undefined && ret) {
      let _a = listeners_after;

      let _f = listener => {
        try {
          listener.apply(this, args);
        } catch (e) {
          console.log(e.stack || new Error(e).stack);
        }
      };

      for (let _i = _a.length; _i--;) {
        _f(_a[_i], _i, _a);
      }
    }

    return ret;
  }

  once(name, listener) {
    const once_listener = (...args) => {
      this.removeListener(name, once_listener);
      listener(...args);
    };

    return this.on(name, once_listener);
  }

};
global.Events = new EventEmitter();
setFireEvent((name, cancellable, ...args) => {
  return Events.emit(name, cancellable, ...args);
});
