// ResponsiveImage.tsx

interface ResponsiveImageProps {
  src: string; // Chemin de l'image pour le src par défaut
  srcSet?: string; // Attribut srcSet pour les images réactives
  sizes?: string; // Attribut sizes pour les images réactives
  fill?: boolean; // Remplir l'image parent
  alt: string; // Texte alternatif pour l'image
  width?: number; // Largeur par défaut de l'image
  height?: number; // Hauteur par défaut de l'image
  className?: string; // Classe CSS optionnelle
  priority?: string; // Indique si l'image est prioritaire
  style?: React.CSSProperties; // Styles en ligne optionnels
  [key: string]: any; // Pour supporter d'autres attributs comme aria-label
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  srcSet,
  sizes,
  fill: _fill,
  alt,
  width,
  height,
  className,
  priority: _priority,
  style,
  ...rest
}) => (
  <img
    src={src}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    width={width}
    height={height}
    className={className}
    style={style}
    {...rest}
  />
);

export default ResponsiveImage;
