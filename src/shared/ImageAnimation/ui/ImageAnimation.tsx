import classNames from 'classnames';
import cls from './ImageAnimation.module.scss';
import imgBack1 from '../assets/imgBack1.png';
import imgBack2 from '../assets/imgBack2.png';
import imgBack3 from '../assets/imgBack3.png';

export const ImageAnimation = () => {
    const images = [
        { id: 1, src: imgBack1, alt: 'Image 1' },
        { id: 2, src: imgBack2, alt: 'Image 2' },
        { id: 3, src: imgBack3, alt: 'Image 3' },
    ];

    return (
        <div className={classNames(cls.imageContainer, {}, [])}>
            {images.map((image, index) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className={`${cls.animatedImage} ${cls[`image-${index}`]}`}
                />
            ))}
        </div>
    );
};
