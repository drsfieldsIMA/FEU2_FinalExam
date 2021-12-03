import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
    <div className="app-wrapper">
      <Nav/>
      <main className="main-wrapper">
      { children }
      </main>
      <footer className="footer-wrapper" >
      <Footer/>
      </footer>
    </div>
    </>
  );
}
 
export default Layout;