export default class Queue {
    constructor () {
        this.list = [];
    }

    isEmpty () {
        return this.list.length === 0;
    }

    enqueue (value) {
        this.list.push(value);
    }

    dequeue () {
        return this.list.shift();
    }

    toString () {
        return this.list.join(',');
    }
}