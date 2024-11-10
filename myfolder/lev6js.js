function checkans()
{
  var mathans=document.getElementById("mathans").value
  if(mathans === "-2-sqrt(3)"){
    window.location.href=("/next-level/myfolder/seventh.html");
  }else{
    alert("答案错误（如果答案是正确的，交换一下位置试试？）")
  }
}
