import sprite from "/sprite.svg";

import styles from "./Icon.module.css";

export interface IconProps {
  idIcon: string;
  fill?: string;
  width?: number;
  height?: number;
  onClick: () => void;
}

export const Icon = ({
  idIcon,
  fill = "currentColor",
  width = 20,
  height = 20,
  onClick,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      className={styles.icon}
      onClick={onClick}
    >
      <use xlinkHref={`${sprite}#icon-${idIcon}`}></use>
    </svg>
  );
};
