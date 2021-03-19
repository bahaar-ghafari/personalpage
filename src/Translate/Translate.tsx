import React, { ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";
import { CustomTypography } from "../components/CustomCumponents";
import GlobalConfig from "../GlobalConfig";
import { PropsChildren } from "../Models/IPropsChildren";

export const dictionary = GlobalConfig.resources[GlobalConfig.currentLang];
interface IProp {
  fontSize: number;
}
export default function Translate(props: PropsChildren & IProp): ReactElement {
  const { t } = useTranslation(); //translate method and enum
  const { fontSize } = props;
  return (
    <CustomTypography fontSize={fontSize}>
      <Trans t={t}>{props.children}</Trans>
    </CustomTypography>
  );
}
