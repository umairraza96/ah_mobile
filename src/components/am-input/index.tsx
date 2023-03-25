import {Input, Text, View} from 'native-base';

interface AMInputProps {
  title: string;
  placeholder: string;
  hint?: string;
  onChangeText: (text: string) => void;
}

const AMInput = ({title, placeholder, hint, onChangeText}: AMInputProps) => {
  return (
    <View>
      <Text mb="1">{title}</Text>
      <Input placeholder={placeholder} onChangeText={onChangeText} />
      {hint && (
        <Text opacity="0.7" fontSize="xs">
          {hint}
        </Text>
      )}
    </View>
  );
};

export default AMInput;
