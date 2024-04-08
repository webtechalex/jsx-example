import { JSXComponent } from "./JSXComponent";
import { NotJSXComponent } from "./NotJSXComponent";
import { NotJSXUsingComponent } from "./NotJSXUsingComponent";
import { NoJSXWithFactories } from "./NoJSXWithFactories";
import {JSXUsingComponent} from "./JSXUsingComponent";

function App() {
  return (
    <div className="App">
      <JSXComponent />
      <NotJSXComponent />
      <NotJSXUsingComponent />
      <NoJSXWithFactories />
      <JSXUsingComponent />
    </div>
  );
}

export default App;
