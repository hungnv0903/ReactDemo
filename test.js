var s = [60, 40, 69, 65, 55, 86, 81, 3, 99, 83, 6, 70, 80, 2, 66, 98]
for(let i = 0 ; i<s.length ; i++){
    for(let j = i+1 ; j<s.length ; j++){
        if(s[i]>s[j]){
            [s[i] , s[j]] = [s[j],s[i]]
        }
    }
}
console.log(s)

//Dùng một vòng lặp for cho i chạy từ 0 , vòng thứ 2 chạy từ i+1 , thực hiện kiểm tra nếu s[i]>s[j] thì thực hiện 
// đổi chỗ 2 thằng. Kết thúc vòng lặp ta nhận được một mảng mới được sắp xếp theo thứ tự tăng dần