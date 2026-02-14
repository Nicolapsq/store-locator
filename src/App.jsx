import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import StoreLocator from "./pages/StoreLocator";
import StoreDetail from "./pages/StoreDetail";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<StoreLocator />} />
          <Route path="/stores/:id" element={<StoreDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
