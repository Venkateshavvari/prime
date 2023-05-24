var num=9;
var count =0;

for(var i =2;i<num;i++)
{
    if(num%i==0)
    {
        count =count+1;
        break;
    }
}
if(count==0)
{
    console.log("its prime");
}
else
{
      console.log("its not prime");
}