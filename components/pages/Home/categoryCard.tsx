import { FC } from "react";
import ImageCard from "../../others/imageCard";

interface ICategoryProps {
  title: string;
  link: string;
  imagesUrl: string[];
}

const CategoryCard: FC<ICategoryProps> = ({
  imagesUrl,
  title,
}: ICategoryProps) => {
  return (
    <div className="relative">
      <ImageCard
        frontImage={imagesUrl[0]}
        backImage={imagesUrl[1]}
        width={250}
        height={250}
      />
      <span className="absolute top-6 left-6 text-primary font-bold w-20">{title}</span>
    </div>
  );
};

export default CategoryCard;
