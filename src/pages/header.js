import React from 'react';
import tw from 'tailwind.macro';

const HoverButton = tw.button`rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md`;

const Header = () => (
  <div className="container mx-auto my-2">
    <HoverButton>Styled Button!</HoverButton>
  </div>
);

export default Header;
