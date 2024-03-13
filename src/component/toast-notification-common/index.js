import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";


const Message = (props) => {
    useEffect(() => {
        const setMessageFromProps = (newInfo) => {
            const newMessages = [...messages,
            {
                info: newInfo.title,
                description: newInfo.Description
            }];
            setMessages(newMessages);
        };
        const dataMessage = messages.map((message, index) => (
            <Message
                key={index + 1}
                message={message}
                onHide={() => handleHide(message)}
            />
        ));
    })
    useEffect(() => {
        if (messages.length > 0) {
            const animationSequence = Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.delay(2000),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                })
            ]);

            animationSequence.start(() => {
                props.onHide(messages[0]);
                setMessages([]);
            });
        }
    }, [messages]);

    useEffect(() => {
        setMessageFromProps(props.Info);
    }, [props.Info]);
    const opacity = useRef(new Animated.Value(0)).current;

    const translateY = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0],
    });

    const dataMessage = messages.map((message, index) => (
        <Message
            key={index + 1}
            message={message}
            onHide={() => handleHide(message)}
        />
    ));

    return (
        <>
            {messages.map((message, index) => (
                <React.Fragment key={index + 1}>
                    <Text style={styles.Info}>{message.info}</Text>
                    <Text style={styles.Description}>{message.description}</Text>
                </React.Fragment>
            ))}
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
                    opacity: opacity,
                    transform: [{ translateY: translateY }]
                }}
            >
            </Animated.View>
        </>
    )
}

export default ToastNotification;