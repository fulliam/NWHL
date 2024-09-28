import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

type AnimatedImageProps = {
  path: Record<string, any>;
  enable?: boolean; // Указывает, должна ли анимация быть активна
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  path,
  enable = true,
}) => {
  const images = Object.values(path);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const animationSpeed = 100; // Скорость анимации в миллисекундах
  let animationIntervalId: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (enable && images.length > 0) {
      startAnimation();
    } else {
      stopAnimation();
    }

    // Чистка при размонтировании
    return () => stopAnimation();
  }, [enable, images]);

  const startAnimation = () => {
    if (!animationIntervalId) {
      animationIntervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, animationSpeed);
    }
  };

  const stopAnimation = () => {
    if (animationIntervalId) {
      clearInterval(animationIntervalId);
      animationIntervalId = null;
    }
  };

  return (
    <View style={styles.container}>
      {images.length > 0 && (
        <Image
          source={images[currentImageIndex]} // передаем require напрямую, без использования uri
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default AnimatedImage;
