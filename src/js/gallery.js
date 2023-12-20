import Masonry from "masonry-layout";

export default (galleryContainer, horizontalOrder, imagesLoaded) => {
  imagesLoaded(galleryContainer, () => {
    window.msnry = new Masonry(galleryContainer, {
      percentPosition: true,
      columnWidth: 1,
      horizontalOrder,
    });
  });
};
