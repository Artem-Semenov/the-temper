import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export default (galleryContainer, horizontalOrder) => {
  imagesLoaded(galleryContainer, () => {
    window.msnry = new Masonry(galleryContainer, {
      percentPosition: true,
      columnWidth: 1,
      horizontalOrder,
    });
  });
};
