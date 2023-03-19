import {useNavigation} from '@react-navigation/native';
import {IconButton, Image, Pressable, Text, View} from 'native-base';
import {MaterialCommunityIcons} from '../../common/icons';
import {useImageOrPlaceholder} from '../../utils';

interface AMProductProps {
  id: string;
  name: string;
  image?: string;
  description: string;
  price: number;
}

const AMProduct = ({id, name, image, description, price}: AMProductProps) => {
  const navigation = useNavigation();

  function addToCart() {
    console.log('Add To Cart');
  }

  function onProductPress() {
    navigation.navigate('product', {id});
  }

  return (
    <Pressable onPress={onProductPress}>
      <View
        p="10px"
        position="relative"
        rounded="md"
        display="flex"
        borderWidth={'1'}
        bgColor="white"
        borderColor="gray.400"
        width={180}
        flexDirection="column"
        justifyContent="center">
        <View
          display="flex"
          flex="1"
          justifyContent={'center'}
          alignItems="center">
          <Image
            source={useImageOrPlaceholder(image)}
            resizeMode="contain"
            rounded="md"
            alt="no reso"
            height={120}
            width={180}
            mb="0.5"
          />
        </View>
        <Text bold fontSize={'md'}>
          {name}
        </Text>
        <Text noOfLines={2} opacity={0.7} fontSize="xs">
          {description}
        </Text>
        <Text my={1} bold fontSize="md">
          Rs. {price}
        </Text>
        <IconButton
          position={'absolute'}
          right="2"
          bgColor="orange.500"
          bottom="2"
          borderRadius="full"
          icon={
            <MaterialCommunityIcons name={'plus'} size={18} color="white" />
          }
          onPress={addToCart}
        />
      </View>
    </Pressable>
  );
};

export default AMProduct;
