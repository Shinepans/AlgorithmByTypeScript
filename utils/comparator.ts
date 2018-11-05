export default class Comparator {

    /**
     * 所属成员为函数， 作用为比较， 类包含各种比较方法
     * @type {Function}
     * @memberof Comparator
     */
    compare: Function;

    /**
     * 使用传入的比较函数 或 默认的比较函数
     * @param compareFunction 函数类型参数
     */
    constructor(compareFunction: Function) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    /**
     * 
     * @param a 比较的第一个值
     * @param b 比较的第二个值
     * @returns 0||-1||1
     */
    static defaultCompareFunction(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    /**
     * 判断a 与 b是否相等
     * @param a 比较的第一个值
     * @param b 比较的第二个值
     */
    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    /**
     * 判断 a 是否 小于 b
     * @param a 比较的第一个值
     * @param b 比较的第二个值
     */
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    /**
     * 判断 a 是否 大于 b
     * @param a 比较的第一个值
     * @param b 比较的第二个值
     */
    greaterThan (a, b) {
        return this.compare(a, b) > 0;
    }

    /**
     * 判断 a 是否 大于等于 b
     * @param a 比较的第一个值
     * @param b 比较的第二个值
     */
    greaterThanOrEqual (a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * 反转比较， 将 a 视为 b， b 视为 a
     */
    reverse() {
        const compareOriginal:Function = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}