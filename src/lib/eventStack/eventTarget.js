import _ from '../lodash.custom'

export default class EventTarget {

	constructor(target) {
		this.target = target;
		this._handlers = {};
		this._pools = {};
	}

	// ------------------------------------
	// Utils
	// ------------------------------------

	_emit(name){
		return (event) => {
			_.forEach(this._pools, (pool, poolName) => {
				const { [name]: handlers } = pool

				if (!handlers) return
				if (poolName === 'default') {
					_.forEach(handlers, handler => handler(event))
					return
				}
				_.last(handlers)(event)
			});
		}
	}

	_normalize(handlers){
		return (_.isArray(handlers) ? handlers : [handlers])
	}

	// ------------------------------------
	// Listeners handling
	// ------------------------------------

	_listen(name){
		if (_.has(this._handlers, name)) return
		const handler = this._emit(name)

		this.target.addEventListener(name, handler)
		this._handlers[name] = handler
	}

	_unlisten(name){
		if (_.some(this._pools, name)) return
		const { [name]: handler } = this._handlers

		this.target.removeEventListener(name, handler)
		delete this._handlers[name]
	}

	// ------------------------------------
	// Pub/sub
	// ------------------------------------

	empty(){
		return _.isEmpty(this._handlers);
	} 

	sub(name, handlers, pool = 'default'){
		const events = _.uniq([
			..._.get(this._pools, `${pool}.${name}`, []),
			...this._normalize(handlers),
		])

		this._listen(name)
		_.set(this._pools, `${pool}.${name}`, events)
	}

	unsub(name, handlers, pool = 'default'){
		const events = _.without(
			_.get(this._pools, `${pool}.${name}`, []),
			...this._normalize(handlers),
		)

		if (events.length > 0) {
			_.set(this._pools, `${pool}.${name}`, events)
			return
		}

		_.set(this._pools, `${pool}.${name}`, undefined)
		this._unlisten(name)
	}
}
