const intialPrice=document.querySelector("#intial-price");
const stockQuantity=document.querySelector("#quantity-stock");
const currentPrice=document.querySelector("#current-price");
const submitButton=document.querySelector("#submit-btn");
const outputBtn=document.querySelector("#output-btn");



submitButton.addEventListener("click",submitHandler);


function submitHandler(){
    var ip=Number(intialPrice.value);
    var qty=Number(stockQuantity.value);
    var curnt=Number(currentPrice.value);
    caluculateProfitAndLoss(ip,qty,curnt);
}


function caluculateProfitAndLoss(intial,quantity,current){
    if(intial>current){
        const loss=(intial-current)*quantity
        const lossPercentage=(loss/intial)*100;
        showOutput(`π€¦ββοΈTHE  LOSS IS  ${loss}  THE LOSS π€¦ββοΈ PERCENRAHE IS  ${lossPercentage}%`)
        outputBtn.style.color="red";
    }
    else if(current>intial){
        const profit=(current-intial)*quantity
        const profitPercentage=(profit/intial)*100;
        showOutput(` π πTHE PROFIT IS  ${profit}   πTHE PROFITPERCENTAGE IS ${profitPercentage}%`)
        outputBtn.style.color="blue"
    }else{
        showOutput("π HEY THEIR IS NO PAIN  AND NO GAIN AND  NO WORRIES π");
        outputBtn.style.color="green"
    }

}


function showOutput(message){
    // switch (status) {
    //     case "PROFIT":
    //         outputBtn.innerHTML=message
    //         break;
    //     case "LOSS":
    //         outputBtn.innerHTML=message
    
    //     default:
    //         break;
    // }
    outputBtn.innerHTML=message
    
}