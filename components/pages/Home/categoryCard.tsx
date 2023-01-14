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
    <div className="relative cursor-pointer w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[290px] md:h-[290px] bg-emerald-300">
      <ImageCard
        frontImage={imagesUrl[0]}
        backImage={imagesUrl[1]}
        width="100%"
        height="100%"
      />
      <span className="absolute top-6 left-6 text-primary font-bold w-20">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;
