import { AppRouter } from "./providers/app-router";
import { AppLayout } from "@/widgets/layouts/app-layout";

function App() {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}

export default App;
