const range = n => {
    res = []
    for (let i = 1; i<=n; i+=2)
        res.push(i*i)
    return res
}

let giveAddition = arr => {
    let res =[]
    arr.forEach((n,i) => {
            let start = arr[i-1] || 0
            let add = (n - arr[i-1])/4 || 1
            for (let j=start+add; j<=n; j+=add)
                res.push(j)
    })
    return res
}

console.log(giveAddition(range(1001)).reduce((x,y)=>{return x+y}))
