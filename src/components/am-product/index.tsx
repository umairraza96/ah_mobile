import {Image, Text, View} from 'native-base';

interface AMProductProps {
  name: string;
  image: string;
  description: string;
  price: number;
}

const AMProduct = ({name, image, description, price}: AMProductProps) => {
  return (
    <View
      bgColor="blue.200"
      p="10px"
      rounded="md"
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center">
      <Image
        source={{uri: image}}
        resizeMode="contain"
        rounded="md"
        alt="no reso"
        height={120}
        width={120}
        mb="0.5"
      />
      <Text bold fontSize={'md'}>
        {name}
      </Text>
      <Text opacity={0.7} fontSize="xs">
        {description}
      </Text>
      <Text bold fontSize="sm">
        Rs. {price}
      </Text>
    </View>
  );
};

export default AMProduct;
