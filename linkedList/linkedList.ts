import LinkedListNode from './linkedListNode'
import Comparator from '../utils/Comparator'

export default class LinkedList {

    head: LinkedListNode;
    tail: LinkedListNode;
    compare: Comparator;

    /**
     * head: 链表头
     * tail: 链表尾
     * Creates an instance of LinkedList.
     * @param {*} comparatorFunction
     * @memberof LinkedList
     */
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction)
    }

    /**
     * 链头前面追加元素
     * @param {*} value
     * @returns
     * @memberof LinkedList
     */
    prepend(value) {
        const newNode: LinkedListNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * 在链尾追加元素
     * @param {*} value
     * @returns
     * @memberof LinkedList
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        // 如果要删除的元素为链头，则将链头下一个元素指定为链头
        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {

            // 如果下一个节点需要被删除，则将下一个节点指向下个节点的下个节点
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    find() {

    }

    deletTail() {

    }

    deleteHead() {

    }

    fromArray() {

    }

    toArray() {

    }

    toString() {

    }

    reverse() {

    }
}