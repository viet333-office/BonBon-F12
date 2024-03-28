import Dimensions from 'react-native'
import { HStack, Pressable, VStack } from '@gluestack-ui/themed'
import { AntDesign } from '@expo/vector-icons'

const HiddenItem = ({ data, onOpenDeleteProductModal, _rowMap }) => {
    return (
        <HStack
            flex={1}
            pl={2}
            justifyContent="flex-end">
            XGH-HTML_HI-1
            <Pressable
                cursor="pointer"
                _pressed={{ opacity: 0.5 }}>
                XGH-HTML_HI-2
                <VStack
                    alignItems="center"
                    space={2}
                    backgroundColor="red"
                    height={"100%"}
                    alineItem={"center"}
                    justifyContent={"center"}
                    onPress={() => onOpenDeleteProductModal(data, _rowMap)} >
                    <AntDesign
                        name="delete"
                        size={24}
                        color="#fff"
                        style={{ width: Dimensions.get('window').width * 0.3 }} />
                </VStack>
            </Pressable>
        </HStack>
    )
}

export default HiddenItem;