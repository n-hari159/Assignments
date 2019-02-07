function swap(x){
    even = x & 0xAAAAAAAA;
    odd = x & 0x55555555;
    even>>=1;
    odd<<=1;
    return (even|odd);
}
x=16;
console.log(swap(x));