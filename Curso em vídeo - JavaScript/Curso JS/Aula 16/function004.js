function fat(f) {
    let fat = 1
    for (k = f; k > 1; k--) {
        fat = fat * k
    } return fat
}

console.log(fat(5))
