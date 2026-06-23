import { useState } from "react";

import { cn } from "@/shared/lib/classNames/classNames";
import StarIcon from "@/shared/assets/icons/star.svg";

import { Icon } from "../Icon";

import s from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={cn(s.StarRating, className)}>
      {stars.map((starNumber) => {
        const commonProps = {
          className: cn(
            s.starIcon,
            currentStarsCount >= starNumber ? s.hovered : s.normal,
            { [s.selected]: isSelected }
          ),
          Svg: StarIcon,
          key: starNumber,
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          "data-testid": `StarRating.${starNumber}`,
          "data-selected": currentStarsCount >= starNumber,
        };
        return <Icon {...commonProps} />;
      })}
    </div>
  );
};
