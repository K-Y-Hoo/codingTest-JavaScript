class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  popLeft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return temp;
    }
  }
}

const queue = new Queue();

//간선의 길이가 모두 같을 때, 최단 경로를 찾는 알고리즘
function bfs(graph, start, visited) {
  queue.add(start);
  visited[start] = true;
  while (queue.size()) {
    v = queue.popLeft();
    console.log(v);
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.add(i);
        visited[i] = true;
      }
    }
  }
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array(9).fill(false);

bfs(graph, 1, visited);
