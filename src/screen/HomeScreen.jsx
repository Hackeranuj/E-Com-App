import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartwatch';
import {headphones} from '../data/headphones';

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch);
  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');
  const handleUpdateCategory = newCategory => {
    if (newCategory === 'Smart Watch') {
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setData(headphones);
    } else if (newCategory === 'Apple') {
      setData(smartWatch);
    }
    setSelectedCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headline}>Find your suitable watch now.</Text>
            {/* Search Input component */}
            <View style={styles.mainInputContainer}>
              {/* Input Container */}
              <View style={styles.inputWrapper}>
                {/* Icon */}
                <Image
                  source={require('../assets/search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              {/* Category Container */}
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../assets/category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />
          </>
        }
        data={data}
        renderItem={({item}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{padding: spacing.md, paddingBottom: 500}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.background,
    // padding: spacing.md,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSizes.md,
    width: iconSizes.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
