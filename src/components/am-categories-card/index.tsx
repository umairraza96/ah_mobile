import {Image, Text, View} from 'native-base';

interface AMCategoryCardProps {
  name: string;
  image: string;
  description: string;
}

const AMCategoryCard = ({name, image, description}: AMCategoryCardProps) => {
  return (
    <View
      rounded={'md'}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor="white"
      borderWidth={'1'}
      borderColor="gray.300"
      style={{
        display: 'flex',
        padding: 15,
      }}>
      <Text mb={1} textAlign={'center'} fontSize={'md'} bold>
        {name}
      </Text>
      <Image
        source={{uri: image}}
        resizeMode="contain"
        rounded="md"
        alt="no reso"
        height={100}
        width={100}
      />
      {/* <Text>{description}</Text> */}
    </View>
  );
};

export default AMCategoryCard;
