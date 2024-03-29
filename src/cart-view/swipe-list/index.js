import { Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view'
import SwipeListView from 'react-native-swipe-list-view'
import ProductCard from '../product-card'
import HiddenItem from './hidden-item'

export default function SwipeList({ listProductSwipe,
    updateCartCurrentData,
    listCartProduct,
    isValidateDataCart,
    onOpenDeleteProductModal }) {
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss} >
            <KeyboardAwareScrollView>
                XGH-HTML_SL-2
                <SwipeListView
                    previewRowKey={"0"}
                    previewOpenValue={40}
                    previewOpenDelay={3000}
                    data={listProductSwipe}
                    renderItem={({ item, index }) => (
                        <ProductCard
                            data={item}
                            index={index}
                            onUpdateCart={updateCartCurrentData}
                            validateData={listCartProduct}
                            isValidateDataCart={isValidateDataCart}
                        />
                    )}
                    renderHiddenItem={({ data, _rowMap }) => (
                        <HiddenItem
                            data={data}
                            onOpenDeleteProductModal={onOpenDeleteProductModal}
                            _rowMap={_rowMap}
                        />
                    )}
                    rightOpenValue={-1 * Dimensions.get('window').width * 0.3} />
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}