import {Icon, Input, Stack, Text, View} from 'native-base';
import {MaterialCommunityIcons} from '../../common/icons';
import useDebounce from '../../hooks/useDebounce';

interface AMSearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}
const AMSearchBar = ({searchQuery, onSearch}: AMSearchBarProps) => {
  return (
    <View my="2">
      <Input
        color="black"
        value={searchQuery}
        onChangeText={onSearch}
        fontSize="md"
        w={{
          base: '100%',
          md: '25%',
        }}
        InputLeftElement={
          <Icon
            as={<MaterialCommunityIcons name="magnify" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Search"
      />
    </View>
  );
};

export default AMSearchBar;
