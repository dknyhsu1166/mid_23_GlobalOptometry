import React from "react";
import { ScrollView } from "react-native";
import MainList from "../components/MainList";

const MainScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <MainList
                navigation={navigation}
            />
        </ScrollView>
    );
};

export default MainScreen;