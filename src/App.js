import Body from "./components/Body";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Form from "./components/Form";
import Dress from "./components/Dress";
import Nav from "./components/Nav";
import Guest from "./components/Guest";

export default function App() {
  return (
    <>
    <Nav>
      <Header/>
      <Body>
        <Timer/>
        <Form/>
        {/* <Programm/> */}
        <Dress/>
        <Guest/>
      </Body>
    </Nav>

    </>
  );
}
