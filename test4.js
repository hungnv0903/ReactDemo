const array = [
    { name: 'A', value: 10 },
    { name: 'A', value: 11 },
    { name: 'B', value: 12 },
    { name: 'C', value: 15 },
    { name: 'A', value: 10 },
    { name: 'B', value: 11 },
    { name: 'C', value: 12 },
    { name: 'C', value: 15 }
 ];

 const groupedObject = array.reduce((acc, obj) => { //acc là một đối tượng 
    // Kiểm tra nếu nhóm với name hiện tại đã tồn tại trong acc
    if (!acc[obj.name]) {
       // Nếu chưa tồn tại, tạo một mảng mới cho nhóm đó
       acc[obj.name] = [];
    }
    // Thêm obj vào nhóm tương ứng
    acc[obj.name].push(obj);
    return acc;
 }, {});
 
 // Chuyển đổi đối tượng groupedObject thành mảng các mảng
 const groupedArray = Object.values(groupedObject);
 
 console.log(groupedArray);

//