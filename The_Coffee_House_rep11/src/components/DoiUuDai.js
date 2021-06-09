import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableHighlight,TouchableOpacity,FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DATA=[
    {
        id:1,
        logo:'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/179495922_328294798731008_427922412596690988_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=n2snLR-mrBwAX-pKhJf&_nc_ht=scontent-hkg4-1.xx&oh=820e4de9842b0c22fb23b692a2fa07bc&oe=60B4CD86',
        script:'Ưu đãi 50% dịch vụ tổng quát tại Nha Khoa Kim',
        Bean:'59',
        Img:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/179804191_856067451788542_3007995402127574123_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=z4uIocUb35QAX_RT3L2&_nc_ht=scontent.fhan5-6.fna&oh=675b29e320d0a9d7c46d7cecddd7a5de&oe=60B2F01D'
    },
    {
        id:2,
        logo:'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/179495922_328294798731008_427922412596690988_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=n2snLR-mrBwAX-pKhJf&_nc_ht=scontent-hkg4-1.xx&oh=820e4de9842b0c22fb23b692a2fa07bc&oe=60B4CD86',
        script:'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
        Bean:'79',
        Img:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/179804191_856067451788542_3007995402127574123_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=z4uIocUb35QAX_RT3L2&_nc_ht=scontent.fhan5-6.fna&oh=675b29e320d0a9d7c46d7cecddd7a5de&oe=60B2F01D'
    },
    {
        id:3,
        logo:'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/179495922_328294798731008_427922412596690988_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=n2snLR-mrBwAX-pKhJf&_nc_ht=scontent-hkg4-1.xx&oh=820e4de9842b0c22fb23b692a2fa07bc&oe=60B4CD86',
        script:'Ưu đãi 15% đặt phòng khách sạn tại Mytour',
        Bean:'99',
        Img:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/179804191_856067451788542_3007995402127574123_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=z4uIocUb35QAX_RT3L2&_nc_ht=scontent.fhan5-6.fna&oh=675b29e320d0a9d7c46d7cecddd7a5de&oe=60B2F01D'
    },
]
const DoiUuDai = () => {
    const renderItem1 = ({ item }) => (
        <TouchableOpacity style={{width:340,height:420,backgroundColor:'white',margin:10,borderRadius:10}}>
            <Image
                source={{uri :item.Img}}
                style={{width:340,height:340}}
            />
            <View style={{flexDirection:'row'}}>
            <View>
                <Image
                    source={{uri :item.logo}}
                    style={{width:20,height:20,marginTop:15,marginLeft:20}}
                />
                <Text style={{width:250,marginLeft:20,color:'#585858'}}>{item.script}</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,marginTop:15}}>
                    <View style={{backgroundColor:'#A9F5BC',width:40,height:30,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Text style={{color:'#088A29'}}>{item.Bean}</Text>
                    </View>
                    <Text style={{fontSize:16,marginTop:5}}>BEAN</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItem2 = ({ item }) => (
        <TouchableOpacity style={{width:'95%',height:150,backgroundColor:'white',margin:5,alignSelf:'center',borderBottomColor:'silver',borderBottomWidth:0.4,borderRadius:8,flexDirection:'row'}}>
            <Image
                source={{uri :item.Img}}
                style={{
                    width:100,
                    height:100,
                    marginLeft:15,
                    borderRadius:8,
                    alignSelf:'center'
                }}
            />
            <View>
                <Image
                    source={{uri: item.logo}}
                    style={{
                        width:30,
                        height:30,
                        marginLeft:15,
                        marginTop:21,
                    }}
                />
                <Text style={{width:180,marginLeft:15,color:'#585858'}}>{item.script}</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,marginTop:50}}>
                    <View style={{backgroundColor:'#A9F5BC',width:40,height:30,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Text style={{color:'#088A29'}}>{item.Bean}</Text>
                    </View>
                    <Text style={{fontSize:16,marginTop:5}}>BEAN</Text>
            </View>
        </TouchableOpacity>
      );
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListFooterComponent={()=>
                <View>
                    <View style={styles.TitComp}>
                        <Text style={styles.title}>Nổi bật</Text>
                        <TouchableOpacity style={styles.Xtc}>
                            <Text style={styles.TxtBn}>XEM TẤT CẢ</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={DATA}
                    renderItem={renderItem1}
                    keyExtractor={item => item.id}
                    />
                    <View style={styles.TitComp}>
                        <Text style={styles.title}>Từ đối tác</Text>
                        <TouchableOpacity style={styles.Xtc}>
                            <Text style={styles.TxtBn}>XEM TẤT CẢ</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    />
                    <Text style={[styles.title,{marginTop:25}]}>By Category</Text>
                    <View style={styles.CateDad}>
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/crown.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Tất cả</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/tch.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>The Coffee House</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/eat.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Ăn uống</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/travel.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Du lịch</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/shop.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Mua sắm</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/entertai.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Giải trí</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/service.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Dịch vụ</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../assets/Icon/limit.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Giới hạn</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                    </View>
                </View>
            }
            style={{height:550}}
        />
    )
}

export default DoiUuDai

const styles = StyleSheet.create({
    TitComp:{
        flexDirection:'row',
        width:'100%',
        height:'auto',
        marginTop:25,
        justifyContent:'space-between',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:20
    },
    Xtc:{
        width:100,
        height:30,
        backgroundColor:'white',
        borderRadius:20,
        borderWidth:0.1,
        borderColor:'silver',
        justifyContent:'center',
        alignItems:'center',
        marginRight:15
    },
    TxtBn:{
        color:'#fe8f01'
    },
    CateDad:{
        width:'100%',
        height:'auto',
        marginBottom:15,
        backgroundColor:'white',
    },
    CateChild:{
        width:'100%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    Icon:{
        width:25,
        height:25,
        marginHorizontal:15
    },
    TxtCate:{
        fontSize:16
    },
    line:{
        height:1,
        width:'95%',
        backgroundColor:'#f2f2f2',
        alignSelf:'flex-end'
    },
})
