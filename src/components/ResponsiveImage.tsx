import type { ImgHTMLAttributes } from "react";
import imageDimensions from "../images/dimensions.json";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  decoding = "async",
  style,
  ...rest
}) => {
  // All responsive variants share the source image's aspect ratio.
  const filename = src
    .split("/")
    .pop()
    ?.replace(/-\d+(?=\.webp$)/, "");
  const dimensions = imageDimensions[filename as keyof typeof imageDimensions];

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width ?? dimensions?.width}
      height={height ?? dimensions?.height}
      loading={loading}
      decoding={decoding}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default ResponsiveImage;
