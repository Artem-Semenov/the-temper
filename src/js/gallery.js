import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export default (galleryContainer) => {
  imagesLoaded(galleryContainer, () => {
    window.msnry = new Masonry(galleryContainer, {
      percentPosition: true,
      columnWidth: 1,
      horizontalOrder: true,
    });
  });
};
