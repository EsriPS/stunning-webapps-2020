import image01 from 'assets/thumbnails/image01.jpg';
import image02 from 'assets/thumbnails/image02.jpg';
import image03 from 'assets/thumbnails/image03.jpg';
import image04 from 'assets/thumbnails/image04.jpg';
import image05 from 'assets/thumbnails/image05.jpg';
import image06 from 'assets/thumbnails/image06.jpg';
import image07 from 'assets/thumbnails/image07.jpg';
import image08 from 'assets/thumbnails/image08.jpg';
import image09 from 'assets/thumbnails/image09.jpg';
import image10 from 'assets/thumbnails/image10.jpg';
import image11 from 'assets/thumbnails/image11.jpg';
import image12 from 'assets/thumbnails/image12.jpg';
import image13 from 'assets/thumbnails/image13.jpg';
import image14 from 'assets/thumbnails/image14.jpg';
import image15 from 'assets/thumbnails/image15.jpg';
import image16 from 'assets/thumbnails/image16.jpg';
import image17 from 'assets/thumbnails/image17.jpg';
import image18 from 'assets/thumbnails/image18.jpg';

const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
];

const getRandomImage = () => {
  const index = Math.floor(Math.random() * 18);
  return images[index];
};

const getImageById = (id) => {
  return images[id];
};

export { getRandomImage, getImageById };
