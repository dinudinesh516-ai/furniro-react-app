import { galleryColumns } from '../../data/homeData';

// "#FuniroFurniture" collage – columns of images rendered with nested .map()
function FurnitureGallery() {
  return (
    <section className="furniture-gallery">
      <div className="text-center">
        <p className="gallery-small">Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>

      <div className="gallery-viewport">
        <div className="gallery-track">
          {galleryColumns.map((column, colIndex) => (
            <div key={colIndex} className={`gallery-col gcol-${colIndex}`}>
              {column.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt="Furniro setup"
                  style={{ '--w': `${image.w}px`, '--h': `${image.h}px` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FurnitureGallery;
