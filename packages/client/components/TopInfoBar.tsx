import { FC, forwardRef } from "react";
import GlobalSettings from "../types/GlobalSettings";

interface Props {
  settings: GlobalSettings;
}

const TopInfoBar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <div ref={ref}></div>;
});

export default TopInfoBar;
