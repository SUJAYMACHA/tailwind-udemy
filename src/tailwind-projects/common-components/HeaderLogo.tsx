interface HeaderLogoProps {
  logoShape: string;
  logoColor: "primary" | "secondary";
  logoName: string
}

export const HeaderLogo = (props: HeaderLogoProps) => {
  const logoClass =
    props.logoColor === "primary"
      ? "text-white fonr-Manrope text-5xl font-normal  items-baseline"
      : "text-[#0A2640] fonr-Manrope text-5xl font-normal  items-baseline";

  return (
    <div className="flex flex-row gap-1 translate-x-8 ">
      <img src={props.logoShape} className="w-8 mt-1" />
      <div className={logoClass}>
        {props.logoName}
      </div>
    </div>
  );
};
