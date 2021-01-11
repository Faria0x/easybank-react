import "./global.css"
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Solutions from "./components/Solutions/Solutions"
import Articles from "./components/Articles/Articles"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
    <Header></Header>
    <Main title="Next generation digital banking" subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."></Main>
    <Solutions></Solutions>
    <Articles></Articles>
    <Footer></Footer>
    </>
  );
}

export default App;
