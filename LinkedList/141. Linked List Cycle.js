/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function (head) {
    //考慮邊界
    if(!head) return false
    //宣告快慢指標
    let fast = head;
    let slow = head;
    //當快指標有盡頭時表示無閉環, 否則不斷迭代
    while(fast.next?.next){
        //快指標走2步
        fast = fast.next.next
        slow = slow.next 
         //當快指標追上慢指標表示有閉環
        if(fast===slow)return true
    }
    return false
}