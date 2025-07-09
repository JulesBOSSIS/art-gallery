import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";
import { CartProvider } from "./contexts/CartContext";
import { NotificationProvider } from "./contexts/NotificationProvider";
import "./styles/globals.scss";

function App() {
  return (
    <NotificationProvider>
      <CartProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </CartProvider>
    </NotificationProvider>
  );
}

export default App;
