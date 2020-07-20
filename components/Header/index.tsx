import Navigation from "../Navigation";
import Logo from "../Logo";
import Button from "../Button";
import Spacer from "../Spacer";

const Header = () => (
  <>
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navigation />
        <div style={{ marginLeft: "auto" }}>
          <Button href="https://github.com/stephane-r/Youtube-Audio-Player">
            <img
              src={`${process.env.ASSET_PREFIX}/icons/github.svg`}
              width={20}
            />
            <span className="show-for-medium">&nbsp; Github</span>
          </Button>
        </div>
      </div>
    </header>
    <style jsx>{`
      .header {
        padding: 0 20px;
      }
      .header-container {
        display: flex;
        height: 90px;
        align-items: center;
        width: 100%;
        margin: auto;
      }
      .show-for-medium {
        display: none;
      }

      @media screen and (min-width: 768px) {
        .header {
          padding: 0 40px;
        }
        .header-container {
          height: 120px;
        }
      }

      @media screen and (min-width: 1000px) {
        .show-for-medium {
          display: block;
        }
      }
    `}</style>
  </>
);

export default Header;
