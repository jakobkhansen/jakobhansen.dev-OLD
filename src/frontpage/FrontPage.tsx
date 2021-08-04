import "frontpage/FrontPage.css";
import Header from "frontpage/Header";
import LinkCards from "./LinkCards";
import Socials from "./Socials";

function FrontPage() {
  return (
    <div className="FrontPage">
      <Header />
      <Socials />
      <LinkCards />
    </div>
  );
}

export default FrontPage;
