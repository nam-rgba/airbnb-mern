import { useState } from "react";

const Image = ({ name }) => {
  const [image, setImage] = useState();
  try {
    import(`./assets/${name}.svg`).then((image) => {
      setImage(image.default);
    });

    if (!image) return null;

    return <img src={image} alt={name} />;
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Image;
