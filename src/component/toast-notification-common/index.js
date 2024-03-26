import { Animated, Text, View } from "react-native"

function ToastNtification() {

    return (
        <Animated.View
            style={{
                top: 40,
                backgroundColor: "white",
                width: "90%",
                position: "absolute",
                borderRadius: 5,
                padding: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                shadowColor: "#003049",
                shadowOpacity: 0.4,
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 1 },
                elevation: 2,
                zIndex: 999,
                left: "5%",
            }}
        >
            <Feather name="check-circle" size={30} color="#0E6F64" />
            <View style={{ width: "100%" }}>
                <Text style={styles.Info}> </Text>
                <Text style={styles.Description}> </Text>
            </View>
        </Feather>
        </Animated.View >
    )
}



export default ToastNtification;