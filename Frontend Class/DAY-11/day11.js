var obj = function() {
    this.counter = 0;
    this.add = function(item) { this.counter += item; return this; }
    this.subtract = function(item) { this.counter -= item; return this; }
    this.print = function() { console.log(this.counter); }
}

var x = new obj();
// x.add(12);
// x.subtract(2);

//instead of repeating/mutating line 8,9 we can do the following
x.add(12).subtract(2).add(12).print();
// console.log(12 - 2 + 12); 
//agar chaining karni h vahan pe humesha kuch na kuch return kare and make sure that you return 'this'from the function