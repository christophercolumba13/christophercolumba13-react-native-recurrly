import { Stack, Redirect } from "expo-router";
import "../global.css";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* Esto redirige automáticamente al home de tabs */}
            <Stack.Screen name="(tabs)/index" />
        </Stack>
    );
}
