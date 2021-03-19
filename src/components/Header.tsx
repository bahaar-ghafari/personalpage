import React, { ReactElement } from 'react';
import { CustomBox } from './CustomCumponents';

export default function Header(): ReactElement {
  return (
    <CustomBox display="flex" width='50%'>
      {['o', 'HOME', 'PORTFOLIOS', 'CALL ME', 'ABOUT ME'].map((item) => (
        <CustomBox px={3}>{item}</CustomBox>
      ))}
    </CustomBox>
  );
}
