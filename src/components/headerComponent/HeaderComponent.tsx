import logo from "../../assetss/bitcoin-1.svg";

const HeaderComponent: React.FC = () => {
  return (
    <header className="sticky top-0 bg-gray-50 text-center mb-[15px] md:mb-[40px] leading-[40px] md:leading-[80px] text-[calc(10px+2vmin)] border border-solid border-[lightgray] border-t-[0px]">
      <img
        className="absolute top-[50%] left-[10%] translate-y-[-50%] h-[30px] md:h-[60px]"
        src={logo}
        alt="logo"
      />
      <span>Info Portal</span>
    </header>
  );
};

export default HeaderComponent;
