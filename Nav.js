import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NaviBar() {
  return (
    <Navbar expand="lg" className="nav">
        <Navbar.Brand  href = "/" className = "site-title">MTG RULES</Navbar.Brand >
        <ul>
          <li>
              <Nav.Link href = "/H2P">How To Play</Nav.Link>
          </li>
          <li>
              <Nav.Link href = "/FunRules">Fundamental Rules</Nav.Link>
          </li>
          <li>
              <Nav.Link href = "/Keywords">Keywords</Nav.Link>
          </li>
          <li>
              <Nav.Link href = "/FormSpec">Format Specifics</Nav.Link>
          </li>
          <li>
              <Nav.Link href = "/About">About</Nav.Link>
          </li>
          <li>
              <Nav.Link href = "/Suggestions">Suggestions</Nav.Link>
          </li>
        </ul>
    </Navbar>
  );
}

export default NaviBar;