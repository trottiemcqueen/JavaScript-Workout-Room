function sockMerchant(n, ar) {
    // Write your code here
    let colors = [];
    for (let socks = 0; socks < ar.length; socks++) {
        let newSocks = ar[socks];
        let newColors = colors.push(newSocks);
          newSocks += newColors;
          newColors = newSocks;
    }
    return newColors;
  
}
