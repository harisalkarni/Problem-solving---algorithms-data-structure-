var shuffle = function(nums, n) {
    let a = [];
    for (let i = 0 ; i < n; i++) {
        a.push(nums[i], nums[i+3]);
    }
    return a;
};
console.log(shuffle([7,3,5,6,2,1], 3));

