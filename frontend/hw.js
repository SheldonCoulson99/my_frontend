//请在此处编写代码
/********** Begin **********/
function getMax(){
    var l = arguments.length;
    var max = arguments[0];
    for(var i = 0; i < l; i++){
        var cur = arguments[i];
        cur > max ? max = cur : null;
    }
    return cur;
}

/********** End **********/

function mainJs(a) {
    a = parseInt(a);
    switch(a) {
        case 1:return getMax(23,21,56,34,89,34,32,11,66,3,9,55,123);
        case 2:return getMax(23,21,56,34,89,34,32);
        case 3:return getMax(23,21,56,34);
        case 4:return getMax(23,21,56,34,89,34,32,11,66,3,9,55,123,8888);
        case 5:return getMax();
        default:break;
    }
}