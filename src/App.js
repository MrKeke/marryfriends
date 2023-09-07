import Body from "./components/Body";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Form from "./components/Form";
import Location from "./components/Location";
import Programm from "./components/Programm";
import Guest from "./components/Guest";
import Answer from "./components/Answer";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
    <Helmet>
        <title>Wedding</title>
        <meta name="description" content="Приглашение на нашу свадьбу" />
        <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon"/>
    </Helmet>
        <Header />
        <Body>
          <Timer />
          <Form />
          <Programm/>
          <Guest />
          <Answer />
          <Photo />
          <Location />
          <Footer />
        </Body>
    </>
  );
}
