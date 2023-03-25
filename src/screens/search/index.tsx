import {Divider, ScrollView, Text, View} from 'native-base';
import {useState} from 'react';
import AMProduct from '../../components/am-product';
import AMSearchBar from '../../components/am-search-bar';
import {useAppSelector} from '../../redux/types';
import styles from './styles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>('');
  const {products} = useAppSelector(state => state.product);

  function onSearch(text: string) {
    setSearchText(text);
  }

  function filterProducts() {
    const filteredProducts = products.filter(product =>
      product.name.includes(searchText),
    );
    return filteredProducts;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View py="1">
          <AMSearchBar searchQuery={searchText} onSearch={onSearch} />
          <Divider mb="2" />
          <View display="flex" flexDirection="row" mr="1">
            {filterProducts().map((product, index) => (
              <AMProduct key={index} {...product} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
