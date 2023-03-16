class queue{
    constructor(){
        this.storage = []
    }

    add(e){
        this.storage.unshift(e);
    }

    pop() {
        return this.storage.pop;
    }

    look() {
        return this.storage[this.storage.length - 1];
    }

    size() {
        return this.storage.length;
    }
}

// let q = new queue();

// q.add(3);
// q.add(9);
// q.add(0);

// while (q.size() > 0){
//     console.log(q.pop());
// }



class Deque{
    constructor(){
        this.storage = [];
    }

    addFirst(e){
        this.storage.unshift(e);
    }

    addLast(e){
        this.storage.push(e);
    }

    popFirst(e){
        return this.storage.shift();
    }

    popLast(){
        return this.storage.pop();
    }

    lookFirst(){
        return this.storage[0];
    }

    lookLast(){
        return this.storage[this.storage.length -1];
    }

    size(){
        return this.storage.length;
    }
}

// let d = new Deque();

// d.addFirst(3)
// d.addFirst(9)
// d.addLast(0);

// while (d.size() > 0){
//     console.log(d.popLast());
}

