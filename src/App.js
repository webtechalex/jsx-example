import { JSXComponent } from "./JSXComponent";
import { NotJSXComponent } from "./NotJSXComponent";
import { NotJSXUsingComponent } from "./NotJSXUsingComponent";
import { NoJSXWithFactories } from "./NoJSXWithFactories";

function App() {
  return (
    <div className="App">
      <JSXComponent />
      <NotJSXComponent />
      <NotJSXUsingComponent />
      <NoJSXWithFactories />
    </div>
  );
}

export default App;
