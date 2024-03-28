import { FlatList, Pressable, HStack, Box, Image, VStack, Text } from "@gluestack-ui/themed";
import styles from "./style";
import formatMoney from "../utils/format"
export default CardProductCommon = (props) => {
    const { data, onShowModal } = props;

    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => onShowModal(item)}>
                <HStack style={styles.container}>
                    <Box style={styles.boxImg}>
                        <Image source={item.avatar} alt="ảnh thuốc" />
                        (CPC - HTML -2)
                    </Box>
                    <HStack justifyContent="space-between"
                        style={styles.contentCard} >
                        <VStack
                            justifyContent="space-between"
                            flex={3} >
                            <Text size="md"
                                fontWeight="bold"
                                numberOfLines={1} >
                                {}
                            </Text>
                            <Text color="grey"
                                size="sm"
                                numberOfLines={1}>
                                {item.unit}
                            </Text>
                            <Text color="grey"
                                size="sm"
                                numberOfLines={1}>
                                {item.supply}
                            </Text>
                            <Text color="grey"
                                size="sm"
                                numberOfLines={1}>
                                {item.codeProduct}
                            </Text>

                        </VStack>
                        <VStack
                            justifyContent="space-between"
                            flex={2}>
                            <Text size="md"
                                fontWeight="bold"
                                color="#CC0000" textAlign="right">
                                {formatMoney(item.floorPrice)}
                            </Text>
                            <Text color="grey"
                                size="sm" textAlign="right" >
                                {item.expiry}
                            </Text>
                            <Text color="grey" size="sm"
                                textAlign="right">
                                {formatMoney(item.quantity)}
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
            </Pressable>
        )
    }
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}