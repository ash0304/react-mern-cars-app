import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import { NavItems } from './navItem';

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `}
`;

const LogoContainter = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainter>
        <Logo />
      </LogoContainter>
      <NavItems />
    </NavbarContainer>
  );
}
