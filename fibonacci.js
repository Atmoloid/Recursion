function fibsArray(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let fibSeq = [0, 1]; 
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

console.log(fibsArray(8));
