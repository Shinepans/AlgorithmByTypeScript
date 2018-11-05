import LinkedListNode from './linkedListNode'

export default class LinkedList {
    head: LinkedList;
    tail: LinkedList;

    constructor (comparatorFunction) {
        this.head = null;
        this.tail = null;
    }
}