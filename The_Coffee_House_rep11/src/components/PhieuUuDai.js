import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const DATA =[
    {
        id:1,
        name:'- Giảm 35% cho đơn hàng từ 5 món, tối đa 59K...',
        Photo: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/178868490_3584681758303160_7470825245228557689_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=2MqS7PUOuLsAX_Ua5lG&_nc_ht=scontent.fhan5-4.fna&oh=92b35a208acd2620266b69cb4a6cd5f6&oe=60B30AB7',
        Date:'Hết hạn 31/05/2021',
    },
    {
        id:2,
        name:'Giảm 30k cho đơn hàng 149k...',
        Photo: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/180948050_2872012936256969_3115294644303545894_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=IBsjuWSiaW0AX9fWLrY&_nc_ht=scontent.fhan5-6.fna&oh=1bb362a965298bd74eba9dace0dc2157&oe=60B3B33C',
        Date:'Hết hạn 31/05/2021',
    },
    {
        id:3,
        name:'Combo 1 Cà phê Việt Nam size L và 2 bánh mì...',
        Photo: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/181537485_938366606919425_6519365653654971292_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MKFYn8ExwSgAX_tYhDo&_nc_ht=scontent.fhan5-4.fna&oh=c6b8207bb1a20c46cea581ad47b0d616&oe=60B46F6B',
        Date:'Hết hạn 31/05/2021',
    },
    {
        id:4,
        name:'Combo 1 Cà phê Việt Nam size L và 2 bánh mì...',
        Photo: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/181537485_938366606919425_6519365653654971292_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MKFYn8ExwSgAX_tYhDo&_nc_ht=scontent.fhan5-4.fna&oh=c6b8207bb1a20c46cea581ad47b0d616&oe=60B46F6B',
        Date:'Hết hạn 31/05/2021',
    },
    {
        id:5,
        name:'Combo 1 Cà phê Việt Nam size L và 2 bánh mì...',
        Photo: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/181537485_938366606919425_6519365653654971292_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MKFYn8ExwSgAX_tYhDo&_nc_ht=scontent.fhan5-4.fna&oh=c6b8207bb1a20c46cea581ad47b0d616&oe=60B46F6B',
        Date:'Hết hạn 31/05/2021',
    },
]
const PhieuUuDai = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.Coupon}>
            <Image
                source={require('../assets/Icon/Coupon.png')}
                style={styles.SaleComp}
            />
            <Image
                source={{uri :item.Photo}}
                style={styles.Sale}
            />
            <View style={styles.CoupChild}>
                <Text style={styles.CoupTxt1}>{item.name}</Text>
                <Text style={styles.CoupTxt2}>{item.Date}</Text>
            </View>
        </TouchableOpacity>
      );
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListFooterComponent={()=>
                <View>
                    <TouchableOpacity style={styles.sch}>
                        <View style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
                            <Image
                                source={require('../assets/Icon/ticket.png')}
                                style={{
                                    width:30,
                                    height:25,
                                }}
                            />
                            <Text style={{marginLeft:15,fontSize:16}}>Nhập mã khuyến mại</Text>
                        </View>
                        <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,fontWeight:'bold',marginVertical:20,marginLeft:15}}>Sẵn sàng sử dụng</Text>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
                </View>
            }
            style={{height:550}}
        />
    )
}

export default PhieuUuDai

const styles = StyleSheet.create({
    sch:{
        width:'95%',
        height:50,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:10,
        borderBottomWidth:0.3,
        borderBottomColor:'grey'
    },
    Coupon:{
        width:'95%',
        height:120,
        borderRadius:10,
        borderBottomWidth:0.5,
        borderColor:'silver',
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center'
    },
    SaleComp:{
        width:'100%',
        height:'100%',
        borderRadius:15,
        position:'absolute'
    },
    Sale:{
        width:90,
        height:90,
        marginLeft:20,
    },
    CoupChild:{
        width:'110%',
        height:120,
        justifyContent:'space-around'
    },
    CoupTxt1:{
        marginLeft:45,
        width:'50%',
        fontSize:17
    },
    CoupTxt2:{
        marginLeft:45,
        width:'55%',
        fontSize:16,
        color:'grey'
    },
})
