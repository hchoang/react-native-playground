import { Button, Image, StyleSheet, View } from "react-native";
import ClinicLoginComponent from "../../components/ClinicLoginComponent";

function SeletionPage() {
    return (
        <View styles={styles.viewContainer}>
            <Image source={'./../assets/icon.png'}></Image>
            <ClinicLoginComponent />
        </View>
        
    )
}

export default SeletionPage;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    }
})