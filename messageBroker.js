const events = {};

function publish(eventType, ...params){
    if ( !events[eventType]){
        return;
    }

    events[eventType].forEach(listener => listener.apply(null, params));

}

function subscribe(eventType, eventListener){
    if ( !events[eventType]){
        events[eventType] = [];
    }

    events[eventType].push(eventListener);

}

module.exports = {
    publish,
    subscribe,
}