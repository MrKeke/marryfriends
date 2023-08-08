import Body from "./components/Body";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Form from "./components/Form";
import Location from "./components/Location";
import Nav from "./components/Nav";
import Guest from "./components/Guest";
import Answer from "./components/Answer";
import Photo from "./components/Photo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* <Nav> */}
        <Header />
        <Body>
          <Timer />
          <Form />
          {/* <Programm/> */}

          <Guest />
          <Answer />
          <Photo />
          <Location />
          <Footer />
        </Body>
      {/* </Nav> */}
    </>
  );
}
