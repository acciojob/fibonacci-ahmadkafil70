function fibonacci(num) {
// your code here
	if(n<=2) return n-1;
	let a=0, b=1;
	while (n>2) {
		let curr=a+b;
		a=b;
		b=curr;
		n--;
		
	}
}

module.exports = fibonacci;
