import {BrowserRouter, Routes,Route} from "react-router-dom";

import App from "../App";
import Question from "../components/Questions/Questions";
import Resullt from "../components/Result/Resullt";

const Routers = () => {
  return (
     <BrowserRouter>
           <Routes>
                 <Route path="/" element={<App />} />
                 <Route path="/questions" element={<Question />} />
                 <Route path="/result-page" element={<Resullt />} />
            </Routes>
     </BrowserRouter>
  );
};

export default Routers;
