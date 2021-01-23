function asyncBlackfoodTimer(seconds) {

    console.log("짜장면 배달됨");

    setTimeout(
        function() {
            console.log("식사 완료");
        }, seconds * 1000
    );

    console.log("배달부 떠남");

}

asyncBlackfoodTimer(1);
