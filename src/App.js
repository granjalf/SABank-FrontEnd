

import MainLayout from "./components/main_layout";
import AuthProvider from "./providers/authProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <MainLayout>
        <Routes></Routes>        
      </MainLayout>
    </AuthProvider>
  );
}

export default App;
