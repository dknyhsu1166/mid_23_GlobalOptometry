import React from "react";
import { View } from "react-native";
import {
    Box,
    Center,
    Pressable,
    Text,
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
    ActionsheetContent,
} from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"


import MyTheme from '../Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <Box>
            <Pressable
                onPress={handleClose}
                bg={colors.primary}
                width="$20"
                height="$20"
                borderRadius="$full"
                justifyContent="center"
                alignItems="center"
                style={{
                    position: 'relative',
                    bottom: 20,  // 距離底部的距離
                }}
            >
                <MaterialCommunityIcons name="cart" color={'white'} size={36} />
            </Pressable>
            <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>

                <ActionsheetBackdrop />
                <ActionsheetContent h="$72" zIndex={999} backgroundColor={colorMode == "light" ? "white" : "#232323"}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    
                    <Box style={{ height: 200 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10, color: colorMode === "light" ? "black" : "white" }}>
                            購物車
                        </Text>
                    </Box>
                    <Box style={{ flexDirection: 'row' }}>
                        <Center>
                            <ActionsheetItem onPress={handleClose}>
                                <ActionsheetItemText style={{ color: colorMode === "light" ? "black" : "white" }}>刪除</ActionsheetItemText>
                            </ActionsheetItem>
                        </Center>
                        <Box style={{ width: 180 }}></Box>
                        <Center>
                            <ActionsheetItem onPress={handleClose}>
                                <ActionsheetItemText style={{ color: colorMode === "light" ? "black" : "white" }}>送出</ActionsheetItemText>
                            </ActionsheetItem>
                        </Center>
                    </Box>

                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};