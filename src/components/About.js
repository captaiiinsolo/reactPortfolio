import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Container className="z-2" fluid>
      <Row>
        <Col md={{ span: 1, offset: 0 }}>
          <Image
            className="mt-5 ms-5 ps-5 pt-5 float-start"
            src="https://placehold.jp/225x225.png"
          />
        </Col>

        <Col md={{ span: 6, offset: 3 }}>
          <p className="mt-5 pt-5 text-start lead">
            Solomon Santos is a full stack web developer based out of San
            Clemente, CA.
          </p>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ornare viverra euismod. Vestibulum imperdiet, nisl sit amet tempor
            facilisis, libero est suscipit tellus, id mattis lacus ipsum id
            lorem. Integer in rhoncus nibh, nec pulvinar ante. Vivamus cursus
            consectetur magna in vulputate. Integer lectus nunc, accumsan ac
            commodo eget, cursus in eros. Aliquam vel mattis justo. Aliquam
            semper, tortor vitae varius ornare, augue lectus consequat nulla,
            eget luctus elit turpis at massa. Curabitur nec odio leo. Quisque
            aliquam enim magna, eu accumsan nunc egestas vel. Nam porta dui non
            elit vestibulum, in tempus velit pharetra. Fusce bibendum
            scelerisque leo, eu dictum ipsum volutpat et.
            <br />
            <br />
            Ut consectetur vestibulum tellus, vitae rhoncus nisl mattis in.
            Nulla elementum vestibulum lectus in feugiat. Donec interdum
            malesuada risus eu luctus. Sed ligula urna, ornare a condimentum
            sed, volutpat eget est. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nullam luctus
            ultricies justo, a vehicula magna. Duis ut tincidunt lorem. Nulla
            dignissim tristique lobortis. Integer erat eros, auctor ut convallis
            eu, scelerisque vitae mauris. Suspendisse potenti. In leo magna,
            mollis ac cursus vulputate, condimentum at enim. Etiam quam lectus,
            facilisis id vehicula quis, sagittis viverra lectus. Quisque
            vehicula leo et mauris imperdiet iaculis. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Morbi purus orci, tempus nec aliquet in, pellentesque non urna.
            
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
