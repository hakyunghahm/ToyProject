import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdSearch, IoMdNotifications } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const NavContainer = styled.div`
  font-size: 23px;
  color: white;
`;

const NavLogo = styled.img`
  margin-top: 10px;
  width: 40px;
  height: 40px;

`;

const NavItem = styled.div`
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 10px;

  &:visited {
    color: white;
  }

  &:hover {
    text-decoration: none;
  }
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px; 
`;

function SideBar({tweets}) {
  return (
    <NavContainer>
      <NavLogo
        src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png"
        alt="x 로고"
      />

      <NavItem>
        <StyledLink to="/">
          <IconBox><IoMdHome /></IconBox>
          Home
        </StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="#">
          <IconBox><IoMdSearch /></IconBox>
          Explore
        </StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="#">
          <IconBox><IoMdNotifications /></IconBox>
          Notifications
        </StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="#">
          <IconBox><LuMail /></IconBox>
          Messages
        </StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="/users/1/profile">
          <IconBox><FaRegUser /></IconBox>
          Profile
        </StyledLink>
      </NavItem>

      <NavItem>
        <StyledLink to="#">
          <IconBox><HiOutlineDotsCircleHorizontal /></IconBox>
          More
        </StyledLink>
      </NavItem>
    </NavContainer>
  );
}

export default SideBar;
