var monthlyBills= [ 75, 60, 100, 140 ];
//firsthandoff  0+75
//secondhandoff 75+60=135
//thirdhandoff  135+100=235
//forthhandoff  235+140=375
var cousinsWallet=0;
 for(var i= 0; i< monthlyBills.length-1; i++ ){
    cousinsWallet += monthlyBills[i];
  
}
console.log(`cousins wallet amount:  ${cousinsWallet}`);
console.log(monthlyBills.indexOf(60));