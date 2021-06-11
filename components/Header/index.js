import Image from "next/image";
import { HeaderStyle, Logo, HeaderSub } from "./styles";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderSub justifyContent="flex-start">
        <Logo>
          <Image
            src="/../public/assets/icon-collect.svg"
            alt="logo"
            width="32"
            height="32"
          />
        </Logo>
      </HeaderSub>
    </HeaderStyle>
  );
};
export default Header;
