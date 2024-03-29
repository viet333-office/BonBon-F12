import { Animated, Text, View } from "react-native"
import { useEffect, useRef, useState } from "react"

function useEffect() {
    useEffect(() => {
        const sequenceAnimation = Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(2000), // Thêm tham số duration vào hàm Animated.delay
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]);
        sequenceAnimation.start(() => {
            onHide();
        });
        return () => {
            sequenceAnimation.stop();
        };
    }, []);

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
                opacity,
                transform: [{
                    translateY: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, 0],
                    }),
                },],
            }}
        >
            <Feather name="check-circle" size={30} color="#0E6F64" >
                <View style={{ width: "100%" }}>
                    <Text style={styles.Info}> </Text>
                    <Text style={styles.Description}> </Text>
                </View>
            </Feather>
        </Animated.View >
    )
}

export default function ToastNtification() {
    const Message = (props) => {
        const opacity = useRef(Animated.Value.current);
    }
    useEffect(() => {
        const newMessage = {
            info: props.Info,
            description: props.Description,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, [props.Info]);
    const dataMessage = Message.map((message, index) => (
        <Message
            key={index + 1}
            message={message}
            onHide={() => {
                setMessages((stateMessage) =>
                    stateMessage.filter((stateMessage) => stateMessage !== message)
                );
            }}
        />
    ));
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
                opacity,
                transform: [{
                    translateY: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, 0],
                    }),
                },],
            }}
        >
            <Feather name="check-circle" size={30} color="#0E6F64" >
                <View style={{ width: "100%" }}>
                    <Text style={styles.Info}> </Text>
                    <Text style={styles.Description}> </Text>
                </View>
            </Feather>
        </Animated.View >
    )
}