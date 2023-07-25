
class BigArray {
	head = null;
    tail = null;
	length = BigInt(0);
	
	push (data) {
		if (this.head == null) {
			this.head = new BANode(data, null);
            this.tail = this.head;
            console.log(`\u001b[35mpush function called - adding head: ${this.head.data}`);
        } else if (this.head == this.tail) {
            this.tail = new BANode(data, null);
            this.head.next = this.tail;
            this.tail.prev = this.head;
		} else {
            //2+ nodes
            let n = new BANode(data, null);
            this.tail.next = n;
			n.prev = this.tail;
            this.tail = n;
		}
        console.log(`\u001b[34mpush function called - new node with: ${data}`);
		this.length++;
	};
	
	pop() {
        console.log(`\u001b[32mpop function called, removing ${this.tail.data} from BigArray`);
        this.tail = this.tail.prev;
        this.tail.next = null;
		this.length--;
	};
	
	print() {
		let o = this.head;
		let s = '\u001b[0mprint function called - \u001b[44m\u001b[30m BigArray: \u001b[46m ';
		let q;
        if (this.head == this.tail){
            s += `${o.data} `;
        } else {
		    while (o.next) {
			q = o;
			o = o.next;
			s += `${q.data} -> `;
			if (o.next == null){
				s += `${o.data} `;
			}
            }
        }
		console.log(`\u001b[32m${s}\u001b[0m`);
	};

    shift(){
        if (this.head == null){
            return 0;
        }
        if (this.head == this.tail){
            console.log(`\u001b[33mshift function called, removing ${this.head.data} from BigArray`);
            this.head = null;
            this.tail = null;
        }
        //should be 2+ nodes
        console.log(`\u001b[33mshift function called, removing ${this.head.data} from BigArray`);
        let oldHead = this.head;
        let newHead = oldHead.next;
        newHead.prev = null;
        this.head = newHead;

        this.length--;
    };

    unshift(data){
        console.log(`\u001b[31munshift function called, adding ${data} to BigArray`);
        if (this.head == null){
            this.push(data);
        } else {
            let h = this.head;
            this.head = new BANode(data, this.head);
            this.head.next = h;
            h.prev = this.head;
        }
        this.length++;
    };

}

class BANode {
	constructor(data, next) {
		this.data = data;
        this.next = next;
        this.prev;
	}
}

console.time('ba');

let arr = new BigArray();

arr.push('foo');
arr.push('bar');
arr.push('bas');
console.log('\u001b[35m\u221e\u001b[34m\u221e\u001b[32m\u221e\u001b[33m\u221e\u001b[31m\u221e\u001b[0m');
console.dir(arr);
console.log('\u001b[35m\u221e\u001b[34m\u221e\u001b[32m\u221e\u001b[33m\u221e\u001b[31m\u221e\u001b[0m');
console.log(`\u001b[34mBigArray length now ${arr.length}`);
arr.print();

arr.pop();
console.log(`BigArray length now ${arr.length}`);
arr.print();

arr.shift();
console.log(`BigArray length now ${arr.length}`);
arr.print();

arr.unshift('rainbows');
console.log(`BigArray length now ${arr.length}`);
arr.print();

console.log('\u001b[35m\u221e\u001b[34m\u221e\u001b[32m\u221e\u001b[33m\u221e\u001b[31m\u221e\u001b[0m');
console.dir(arr);
console.log('\u001b[35m\u221e\u001b[34m\u221e\u001b[32m\u221e\u001b[33m\u221e\u001b[31m\u221e\u001b[0m');

console.log('\u001b[31m');
console.timeEnd('ba');
console.log('\u001b[0m');