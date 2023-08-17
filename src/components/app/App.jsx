import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </>
  );
};

export default App;
