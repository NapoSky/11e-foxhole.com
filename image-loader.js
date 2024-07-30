const customLoader = ({ src, width }) => {
    const sizes = [1920, 1200, 768, 320];
    const size = sizes.find(s => s >= width) || sizes[sizes.length - 1];
  
    // Génère le chemin correct pour les images
    const cleanSrc = src.replace('/images/', '');
    const extension = cleanSrc.split('.').pop(); // Récupère l'extension du fichier
    const srcWithoutExtension = cleanSrc.replace(/\.[^/.]+$/, "");
  
    return `/images/${srcWithoutExtension}-${size}.${extension}`;
  };
  
  export default customLoader;