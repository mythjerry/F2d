//匯入其他javascript檔案，需另取名稱才能使用
//單獨呼叫函式
import { ConditionText, Year } from './javascript.js'; 
import { NavContentData, SubNavData } from './NavContent.js';

//呼叫函式 無參數
ConditionText();
Year();
NavContentData();
SubNavData("SubNav", "SubNavUl");
