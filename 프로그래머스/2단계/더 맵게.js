function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    for (const s of scoville) {
        minHeap.add(s);
    }
    
    let answer = 0;

    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        const a = minHeap.poll();
        minHeap.bubbleUp();
        const b = minHeap.poll();
        minHeap.add(shake(a,b));
        answer++;
        // console.log(a,b)
    }
    // console.log(minHeap)
    return minHeap.peek() >= K ? answer : -1;
}

function shake(a, b) {
    return a + b * 2;
}

class Heap{
    constructor() {
        this.items = [];
    }

    swap(index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp; 
    }

    parentIndex(index) {
        return Math.floor((index-1) / 2);
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    peek() {
        return this.items[0];
    }
    
    size() {
        return this.items.length;
    }
}

class MinHeap extends Heap {
    bubbleUp() {
        let index = this.items.length-1;
        while (this.parent(index) !==undefined && this.parent(index) > this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;

        while (this.leftChild(index) !== undefined && 
          (this.leftChild(index) < this.items[index] || 
          (this.rightChild(index) !== undefined && this.rightChild(index) < this.items[index]))) { 
            let smallerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) !== undefined && this.rightChild(index) < this.items[smallerIndex]) {
                smallerIndex = this.rightChildIndex(index);
            }
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }   
    }

    add(item) {
        this.items[this.items.length] = item;
        this.bubbleUp();
    }

    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item; 
    }
}