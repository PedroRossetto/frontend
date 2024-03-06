function* geradora() {
    yield 1;
    yield 2 ;
    yield 3 ;
}

const gen = geradora();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());