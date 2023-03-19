import {ScrollView, View} from 'native-base';
import AMCarousel from '../../components/am-carousel';
import AMHeading from '../../components/am-heading';
import AMCategoryCard from '../../components/am-categories-card';
import AMProduct from '../../components/am-product';
import AMSearchBar from '../../components/am-search-bar';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import {getProducts} from '../../redux/features/product/products.thunk';
import {getCategories} from '../../redux/features/categoy/category.thunk';

const HomeScreen = () => {
  const {products, productPending, categories, categoryPending} =
    useAppSelector(state => ({
      products: state.product.products,
      productPending: state.product.pending,
      categories: state.categories.categories,
      categoryPending: state.categories.pending,
    }));

  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState<string>('');

  function onSearch(query: string) {
    setSearchText(query);
    console.log('searchText', searchText);
  }

  async function fetchProducts() {
    await dispatch(getProducts());
  }
  async function fetchCategories() {
    await dispatch(getCategories());
  }

  async function initFetch() {
    await Promise.all([fetchProducts(), fetchCategories()]);
  }

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <ScrollView>
      <View
        pb={'5'}
        bgColor="white"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <AMSearchBar searchQuery={searchText} onSearch={onSearch} />
        <View my="3">
          <AMCarousel />
        </View>

        <AMHeading my={2} title="Popular Categories" />

        <ScrollView horizontal>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 15,
              marginBottom: 10,
            }}>
            {categories.map((category, index) => {
              return (
                <AMCategoryCard
                  key={index}
                  name={category.name}
                  description={category.description}
                  image={category.image}
                />
              );
            })}
          </View>
        </ScrollView>

        <AMHeading my={2} title="Popular Products" />
        <ScrollView horizontal>
          <View
            display="flex"
            flexDirection="row"
            style={{
              gap: 10,
            }}>
            {products.map((product, index) => {
              return (
                <AMProduct
                  key={index}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
