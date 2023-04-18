let currdate=new Date();
currdate=currdate.getHours();
let greet='';
if(currdate>=0 && currdate<12){
  greet='Good Morning';
}
else if(currdate>=12 && currdate<=16){
  greet='Good Afternoon';
}
else{
  greet='Good Evening'
}
export default greet;