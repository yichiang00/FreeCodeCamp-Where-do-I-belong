
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var result=0;
  arr=arr.sort(function(a, b) {
  return a - b;});
  console.log("arr"+arr);

  for (var i = 0; i <= arr.length; i++) {
    console.log("arr[i]"+arr[i]);
      console.log("num"+num);

    if(arr[i]<num&&num<arr[i+1])
    {
      result=i+1;
    }else if(arr[i]===num)
    {
      result=i;
    }else if(num>arr[i])
      {
        result=i+1;
        console.log(i);
      }
  }
  return result;
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([3, 10, 5], 3);
// getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);
