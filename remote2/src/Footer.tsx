// Header.tsx
import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="tw2-p-4 tw2-text-white tw2-bg-blue-900 ">
      ©Copyright 2023, Anderson Miranda
    </div>
  );
};

export default Footer;
