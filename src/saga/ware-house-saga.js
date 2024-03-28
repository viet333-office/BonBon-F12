const { includes } = require("lodash");

function* handleSearchListWareHouse (payload) {
    const textSearch ={payload}
const {getData}= useLocalStorage();

}
function handleCheckString (inputText) {
    const formatTextSearch = textSearch.trim().toLowerCase();
    const formatInputText = inputText.trim().toLowerCase();
    const removeVietNameseTextSearch = removeVietnameseTones(formatTextSearch);

    const removeVietNameseInputText = removeVietnameseTones(formatInputText);
    return removeVietNameseInputText.includes(removeVietNameseTextSearch);

}
try {
    const listProductDataLocal = yield getData()
    const result =[]
    listProductDataLocal.forEach(item => {
        // Sử dụng hàm if
        if (handleCheckString(item.codeProduct)) {
            result.push(item);
        } else if (handleCheckString(item.name)) {
            result.push(item);
        }
    });
} catch (error) {
    
}
try {
    const listProductDataLocal = yield getData(listProductData);
    let result = [];
    for (let i = 0; i < listProductDataLocal.length; i++) {
        if (handleCheckString(listProductDataLocal[i].codeProduct) || handleCheckString(listProductDataLocal[i].name)) {
            result.push(listProductDataLocal[i]);
        }
    }
    if (result.length > 0) {
        wareHouseAction.searchListWareHouseSuccess({ data: result });
    } else {
        wareHouseAction.searchListWareHouseSuccess({ data: [] });
    }
} catch (error) {
   yield put (wareHouseAction.searchListWareHouseFailure({ errorMess: error.message })) ;
}
takeLatest("SEARCH_LIST_PRODUCT_REQUEST", handleSearchListProduct);
