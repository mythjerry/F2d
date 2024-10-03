/* 
    1.js變數不用指定型態
    2.宣告變數 var let(建議用 let 來宣告變數)
*/

//宣告變數
// let TextCon = document.getElementById('NavAbout');

//取的元素(唯一元素 id )，改寫內容
// TextCon.textContent = 'JerrtHW';

//函式 function 函式名稱(){ 程式 }

export function Year() {
    //設定footer的年份，js的日期date是個物件
    /*
        1.取得現在的日期時間
        2.設定儲存過去或未來的日期時間
        3.計算日期時間
        使用Date物件，需要設定初始化
    */
    //宣告變數，承接一個新的日期物件
    let now = new Date();
    // //宣告變數，讀取HTML5的標籤ID
    let Year = document.getElementById('Year');
    // //讀取年分
    let year = now.getFullYear();
    // //將年份的值 寫入標籤ID之內
    Year.textContent = year;
}
export function ConditionText() {
    //按照時間顯示不同訊息
    /*
        1.Date物件
        2.條件判斷式 if else
        設定條件與結果
        晚上8點-10點顯示 現在商品打7折
        早上9點-下午3點顯示 現在買一送一
        其他時間則顯示 平淡的一天
    
        && 2個以上的條件是合併成一種 所有條件都要成立
        || 只要一個條件成立就會執行
        = 右手邊的值 置入給左邊的變數使用
        == 比對 值是否相同
        === 型態比對 除了比對值還有型態
    */
    //宣告變數
    let hour = new Date().getHours();
    let CarouselTextOne = document.getElementById('CarouselTextOne');

    if (hour >= 20 && hour < 22) {
        CarouselTextOne.textContent = '現在商品打7折';
    }
    else if (hour === 9 || hour === 15) {
        CarouselTextOne.textContent = '現在買一送一';
    }
    else {
        CarouselTextOne.textContent = '平淡的一天';
    }
}