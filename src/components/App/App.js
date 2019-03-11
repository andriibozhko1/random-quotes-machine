import React from "react";
import RouterOutlet from "../../services/RouterOutlet";
import "../App/App.scss";

import routes from "../../routes/routes";

const App = () => (
  <>
      <RouterOutlet routes={routes} />
  </>
);

export default App;
