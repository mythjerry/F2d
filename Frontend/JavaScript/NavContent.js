//利用 模塊 讀取
export function NavContent() {
    // 動態新增 li 標籤
    let li = document.createElement('li');
    // 動態新增 a 標籤
    let a = document.createElement('a');

    // 在哪一個標籤之內產生，宣告變數名稱
    let ul = document.getElementById('MenuContent');
    // 在取得的 HTML 元素中添加子元素
    ul.appendChild(li);

    li.appendChild(a);

    // 元素之內要呈現的文字內容
    a.textContent = "影音作品";
    a.href = "javascript:;";
}

export function NavContentData() {
    //多筆動態資料產生 1.陣列 存放資料 2.利用for迴圈 讀取資料
    let MenuName = ['關於Jerry','相關技能','作品集','影音作品','聯絡表單'];
    let MNId = ['NavAbout','NavSkill','NavWorks','Video','NavContacts'];
    let AHref = ['javascript:;','javsascript:;','javsascript:;','javsascript:;','javsascript:;'];

    for(let i = 0; i < MenuName.length; i++){
        //動態新增li標籤
        let li = document.createElement('li');
        //動態新增a標籤
        let a = document.createElement('a');

        //在哪一個標籤之內產生，宣告變數名稱
        let ul = document.getElementById('MenuContent');
        //在取得的HTML元素中添加子元素
        ul.appendChild(li);
        //加入標籤屬性
        li.id = MNId[i];

        li.appendChild(a);
        a.href = AHref[i];
        a.textContent = MenuName[i];
    };
}

export function SubNavData(NavId, UlId) {
    //多筆動態資料產生 1.陣列 存放資料 2.利用for迴圈 讀取資料
    let MenuName = ['關於Jerry','相關技能','作品集','影音作品','聯絡表單'];
    let MNId = ['SubNavAbout','SubNavSkill','SubNavWorks','SubVideo','SubNavContacts'];
    let AHref = ['javascript:;','javsascript:;','javsascript:;','javsascript:;','javsascript:;'];

    for(let i = 0; i < MenuName.length; i++){
        //動態新增ul標籤
        let ul = document.createElement('ul');
        //動態新增li標籤
        let li = document.createElement('li');
        //動態新增a標籤
        let a = document.createElement('a');

        let Nav = document.getElementById(NavId);
        Nav.appendChild(ul);
        ul.id = UlId;

        //在哪一個標籤之內產生，宣告變數名稱
        let ulId = document.getElementById(UlId);
        //在取得的HTML元素中添加子元素
        ulId.appendChild(li);
        //加入標籤屬性
        li.id = MNId[i];

        li.appendChild(a);
        a.href = AHref[i];
        a.textContent = MenuName[i];
    };
}