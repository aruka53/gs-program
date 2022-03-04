
function jankenpon(myHand) {
    let enemyHand = Math.floor(Math.random() * 3);
    console.log(enemyHand)
    const hand =['ぐー','チョキ','ぱー'];
    const resultText = ['あいこ','負け','かち'];
    const resultHand = (myHand - enemyHand + 3) % 3 ;
    let winCount = $(".winCount").html();;
    let loseCount = $(".loseCount").html();;
    if(resultHand === 2){
        result= resultText[2]
        winCount ++ ;
    }else if(resultHand === 1){
        result= resultText[1]
        loseCount ++ ;
    }else{
        result = resultText[0]   
    }
    $('.kuu').html(hand[enemyHand]);
    $('.end').html(result);
    $('.winCount').html(winCount);
    $('.loseCount').html(loseCount);   
};