const events = {};

function publish(eventType){
    if ( !events[eventType]){
        return;
    }

    events[eventType].forEach(listener => listener());

}

function subscribe(eventType, listener){
    if ( !events[eventType]){
        events[eventType] = [];
    }

    events[eventType].push(listener);

}

module.exports = {
    publish,
    subscribe,
}