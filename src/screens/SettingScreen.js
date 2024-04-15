import { View,StyleSheet } from "react-native";
import {
    GluestackUIProvider,
    Center,
    HStack,
    Button,
    ButtonText,
    Text,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
import { increaseCounter, decreaseCounter } from "../redux/counterSlice";
import ColorModeSwitch from "../components/ColorModeSwitch";

const SettingScreen = () => {
    // Get states from store
    const counterValue = useSelector(selectCounter);
    const colorMode = useSelector(selectColorMode);

    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <GluestackUIProvider config={config}>
            <View style={{ backgroundColor: colorMode == "light" ? "white" : "#232323",height:'100%'}}>
            <Center  bg={colorMode == "light" ? "white" : "#232323"}>
                <ColorModeSwitch />
                </Center>
            </View>
        </GluestackUIProvider>
    );
};

export default SettingScreen;