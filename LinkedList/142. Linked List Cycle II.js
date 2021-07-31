/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    //考慮邊界
    if(!head)return null
    //宣告快慢指標
    let slow = head
    let fast = head
    //當快指標有盡頭時表示無閉環, 否則不斷迭代
    while(fast.next?.next){
        //快指標走2步
        slow=slow.next  
        fast=fast.next.next
        if(fast===slow){
            //有閉環時把慢指標移到起點
            //a是起點到閉環點
            //b是閉環點到追趕點
            //c是追趕點到閉環點
            //此時快指標走了a+b+c+b 
            //慢指標走了a+b 可得知2a+2b=a+2b+c 得a=c
            //故將慢指標放到起點
            slow = head
            //再用同樣速度移動可得閉環點
            while(fast!==slow){
                slow=slow.next
                fast=fast.next
            }
            return slow
        }
    }
    return null
}