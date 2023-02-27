import { MainNavigator } from "./src/navigation/mainNavigator";
import { AppProvider } from "./src/provider/AppContext";

export default function App() {
  return (
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  );
}
