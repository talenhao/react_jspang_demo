import { INPUT_CHANGE, DEL_ITEM, ADD_TO_LIST } from "./actionTypes";


{/*
由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
    // 报错
    let getTempItem = id => { id: id, name: "Temp" };
    // 不报错
    let getTempItem = id => ({ id: id, name: "Temp" });
*/}
export const inputChangeAction = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const addToListAction = () => ({
    type: ADD_TO_LIST
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})