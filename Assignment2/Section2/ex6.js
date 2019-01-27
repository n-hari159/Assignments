function Primes(N){
    for(var i=2;i<=N;i++){
        var isPrime = true;
            for(var j=2; j<i; j++){
                if(i%j === 0){
                    isPrime = false;
                }
            }
            if(isPrime === true){
                console.log(i);
            }
    }   
}
Primes(50);