import * as React from 'react';
import {View,Text,StyleSheet,SafeAreaView,Image} from 'react-native';  
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { color } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';

Feather.loadFont();

export default  Home = () => {
   const renderCategoryItem = ({ item }) => {
       return (
        <View style={[
            styles.categoryItemWrapper,
            {
                backgroundColor:item.selected? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20:0,
            }
            ]} >
        <Image source={item.image} style={styles.categoryItemImage}/>
        <Text style={styles.categoryItemTitle} > {item.title} </Text>
    <View style={[
        styles.categorySelectWrapper,
        {
            backgroundColor : item.selected ? colors.white : colors.secondary,
        }
    ]}>
    <Feather 
    name="chevron-right" 
    size={8}
    style={styles.categorySelectIcon}
    color={item.selected ? colors.black : colors.white}
    />
    </View>
    </View>
       );
   };

   return (
       <View style={styles.container}>
        { /* Header */}
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <Image source={require('../assets/images/profile.png')}
                style={styles.profileImage} />
                <Feather name="menu" size={24} color={colors.textDark} />
            </View>
        </SafeAreaView>

        {/* Ttile */}
        <View style={styles.titlesWrapper}>
            <Text style={styles.titlesSubtitle}>Food</Text>
            <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/*Search*/}
        <View Style={styles.searchWrapper}>
            <Feather name="search" size={16} color={colors.textDark} />
            <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
        </View>
        </View>    

        {/*Category*/}
       <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
        <FlatList 
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal={true} />
        </View>
       </View>

       {/* Popupar */}
       <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map((item) => ( 
            <View>
                <Text>Hello</Text>
            </View>
        ))}
       </View>
       </View>
   );
};

const styles = StyleSheet.create({
container: {
    flex:1,
    
},
headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems:"center",
},
profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
},
titlesWrapper:{
    marginTop: 30,
    paddingHorizontal: 20,
},
titlesSubtitle:{
    fontFamily:"Montserrat-Regular",
    fontSize: 16,
    color: colors.textDark,
},
titlesTitle:{
    fontFamily:"Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
},
searchWrapper:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    marginTop: 30,
    },
    search:{
        flexDirection:'row',
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
        },
    searchText:{
            flexShrink: 1 ,
            fontFamily:'Montserrat-Semibold',
            fontSize:14,
            marginBottom: 5,
            color:colors.textLight,
            },
        categoriesWrapper:{
                marginTop: 30,
                },
        categoriesTitle:{
                fontFamily: "Montserrat-Bold",
                fontSize: 16,
                paddingHorizontal: 20,
                },
        categoriesListWrapper:{},
        
        categoryItemWrapper:{
            backgroundColor:"#F5CA48",
            marginRight:20,
            alignSelf:'center',
            borderRadius: 20,

        },
        categoryItemImage:{
            width: 60,
            height: 60,
            marginTop: 25,
            alignSelf: 'center',
            marginHorizontal: 20,
        },
        categoryItemTitle:{
            textAlign:'center',
            fontFamily:'Montserrat-Medium',
            fontSize: 14,
            marginTop: 10,
        },
        categorySelectWrapper:{
            alignSelf:'center',
            justifyContent:'center',
            marginTop: 20,
            width: 26,
            height: 26,
            borderRadius: 26,
            marginBottom: 20,
        },
        categorySelectIcon:{
           alignSelf: 'center',

        },
        popularWrapper:{
            paddingHorizontal:20,
        },
        popularTitle:{
            fontFamily:"Montserrat-Bold",
            fontSize:16,
        },

});
