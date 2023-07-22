class BigArray {
	head = null;
	length = BigInt(0);
	
	push (data) {
		if (this.length < 1) {
			this.head = new BANode(data);
            console.log(`\u001b[35mpush function called - adding head: ${this.head.data}`);
		} else {
			let n = this.head;
			
			while (n.next) {
				n = n.next;
			}
			n.next = new BANode(data);
            console.log(`\u001b[34mpush function called - new node with: ${data}`);
		}
		this.length++;
	};
	
	pop() {
        console.log("\u001b[33mpop function called");
		let o = this.head;
		
		let p;
		while (o.next) {
			p = o;
			o = o.next;
		}
		p.next = null;
		this.length--;
	};
	
	print() {
		let o = this.head;
		let s = 'print function called - BigArray: ';
		let q;
		while (o.next) {
			q = o;
			o = o.next;
			s += q.data;
			if (o.next == null){
				s += o.data;
			}
        }
		console.log(`\u001b[32m${s}`);
	};
	
}

class BANode {
	constructor(data) {
		this.next = null;
		this.data = data;
	}
}

let arr = new BigArray();

arr.push('foo');
arr.push('bar');
arr.push('bas');
console.log(`BigArray length now ${arr.length}`);

arr.print();

arr.pop();
arr.pop();
console.log(`BigArray length now ${arr.length}`);

console.log('\u001b[0m');