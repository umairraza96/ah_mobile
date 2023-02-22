import {Image, Text, View} from 'native-base';
import {useRef} from 'react';
import {Dimensions} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const AMCarousel = () => {
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1588421024623-940056140e58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
  ];

  const ref = useRef<ICarouselInstance>(null);

  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1, borderRadius: 10}}>
      <Carousel
        loop
        style={{borderRadius: 10}}
        width={width - 40}
        height={width / 2}
        autoPlay={true}
        data={data}
        ref={ref}
        autoPlayInterval={3000} // ms
        scrollAnimationDuration={3000} // ms
        pagingEnabled
        renderItem={datai => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Image
              source={{uri: datai.item.image}}
              alt="no reso"
              size={'100%'}
            />
          </View>
        )}
      />
    </View>
  );
};

export default AMCarousel;
