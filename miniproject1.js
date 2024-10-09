function calculateGPA(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i]);
        if(arr[i] === 'A'){
            sum = sum + 100;
        }else if(arr[i] == 'B'){
            sum = sum + 80;
        }else if(arr[i] == 'C'){
            sum = sum + 70;
        }else{
            sum = sum + 60;
        }
    }
    console.log(sum);
    console.log(sum/arr.length);

    var class_avg = sum/arr.length;
    var avg_grade = '';

    if(class_avg>0){
        if(class_avg == '100'){
            avg_grade ='A';
        }else if(class_avg >= '80'){
            avg_grade = 'B';
        }else if(class_avg >= '70'){
            avg_grade = 'C';
        }else{
            avg_grade = 'D';
        }
    }
    console.log('average grade is: ' + avg_grade)

}
var arr =["A","B","C","D"];
calculateGPA(arr);


// console.log('this value will be true')