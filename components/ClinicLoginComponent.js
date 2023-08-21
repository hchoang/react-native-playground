import { Button, Stack, TextInput } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

function ClinicLoginComponent() {
    return (
        <Stack spacing={8} style={styles.inputContainer}>
            <TextInput placeholder="Username" variant="outlined"></TextInput>
            <TextInput placeholder="Password" variant="outlined"></TextInput>
            <Button title="Login"></Button>
        </Stack>
    )
}

export default ClinicLoginComponent;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})