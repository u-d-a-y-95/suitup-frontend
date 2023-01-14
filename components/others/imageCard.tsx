import { FC } from "react";

interface IImageCard {
  frontImage: string;
  backImage: string;
  width?: number;
  height?: number;
}

const ImageCard: FC<IImageCard> = ({
  frontImage,
  backImage,
  width,
  height,
}: IImageCard) => {
  const getStyles = (imageUrl: string) => ({
    backgroundImage: `url(${imageUrl})`,
    width,
    height,
    backgroundPosition: "center",
    backgroundSize: `${width}px ${height}px`,
  });

  return (
    <div style={getStyles(backImage)} className="group">
      <div
        style={getStyles(frontImage)}
        className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-700"
      ></div>
    </div>
  );
};

export default ImageCard;
