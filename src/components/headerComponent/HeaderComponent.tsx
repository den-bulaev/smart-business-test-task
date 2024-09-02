import logo from "../../assetss/smart_logo.png";

const HeaderComponent: React.FC = () => {
  return (
    <header className="sticky top-0 bg-gray-50 text-center mb-[15px] md:mb-[40px] leading-[40px] md:leading-[80px] text-[calc(10px+2vmin)] border border-solid border-[lightgray] border-t-[0px]">
      <img
        className="absolute top-0 left-0 h-[40px] md:h-[80px] max-[400px]:opacity-0"
        src={logo}
        alt="logo"
      />
      <h1>Smart Business Test App</h1>
    </header>
  );
};

export default HeaderComponent;
