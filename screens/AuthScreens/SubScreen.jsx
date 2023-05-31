import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Touchable } from 'react-native';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import * as FileSystem from 'expo-file-system';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const SubScreen = ({ navigation, Udata }) => {

 
    const downloadFromUrl = async (url) => {
        try {
            const filename = "file.pdf";
            const result = await FileSystem.downloadAsync(
                url,
                FileSystem.documentDirectory + filename
            );
            console.log(result);
            var downloadF = Parser('lastName') + "_" + Parser('paperID');
            save(result.uri, `${downloadF + '.pdf'}`, 'application/pdf');
        } catch (error) {
            console.log(error);
        }
    };
    const save = async (uri, filename, mimetype) => {
        try {
            if (Platform.OS === "android") {
                const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
                if (permissions.granted) {
                    const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
                    await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
                        .then(async (uri) => {
                            await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
                        })
                        .catch(e => console.log(e));
                    const contentUri = `file://${fileUri}`;
                    const trigger = {
                        seconds: 1, // Trigger the notification after 10 seconds
                      };
                    await Notifications.scheduleNotificationAsync({
                        content: {
                            title: 'Download Completed',
                            body: 'The PDF file has been downloaded successfully.',
                        },
                        trigger: trigger,
                        // attachments: [{ identifier: contentUri, url: contentUri, mimeType: mimetype }],
                    });
                } else {
                    shareAsync(uri);
                }
            } else {
                shareAsync(uri);
            }
        } catch (error) {

        }

    };
 
    // total calculator
    const [Rtotal, setRtotal] = useState([]);
    var GrandTotal = 0
    const [gTotal, setgTotal] = useState(0);
    const [clicked, setclicked] = useState([10, 10]);
    console.log("in Author SUbmision Screen");
    console.log(Udata);
    function Parser(field) {
        console.log(JSON.parse(Udata)[field]);
        return `${JSON.parse(Udata)[field]}`
    }
    useEffect(() => {
        let total = 0;
        var index = 0
        var eachRpoints = [0, 0, 0]
        JSON.parse(Udata).reviewerApproval.forEach((element) => {
            Object.keys(element).forEach((i) => {
                if (i !== 'email' && i !== 'approve') {
                    total += Number(element[i].points);
                    console.log(total);

                }
                eachRpoints[index] = Number(total)
            });
            index++
            total = 0
        });
        console.log(eachRpoints);
        eachRpoints.forEach(e => {
            GrandTotal = e + GrandTotal
        })
        setgTotal(GrandTotal)
        setRtotal(eachRpoints);
    }, [Udata]);

    return (
        <>
            <TopNav navigation={navigation} />
            <ScrollView>

                <View style={styles.block} >
                    {(JSON.parse(Udata)['title']).length > 0 ? <>
                        <Text style={styles.textSetting}>
                            <Text style={styles.heading}>PaperID -</Text>
                            {Parser('paperID')}</Text>
                        <Text style={[styles.textSetting]}>
                            <Text style={styles.heading}>Title -</Text>
                            {Parser('title')}</Text>
                        {/* <Text style={styles.textSetting}>
                        <Text style={styles.heading}>Abstract -</Text>
                        {Parser('abstract')}</Text> */}
                        <Text style={styles.textSetting}>
                            <Text style={styles.heading}>Key Words -</Text>
                            {Parser('otherKeyword')}</Text>

                        <View style={styles.yon1}>
                            <Text style={styles.heading}>Group Submission  -
                            </Text>
                            {(JSON.parse(Udata)['groupSubmission']) ? <>
                                <View style={[styles.yon, { backgroundColor: 'green' }]} >
                                    <Icon name={'done'} size={20} color="#ffffff" />
                                    <Text style={{ color: 'white' }} >
                                        yes</Text>
                                </View>
                            </> : <>
                                <View style={[styles.yon, { backgroundColor: 'red' }]} >
                                    <Icon name={'highlight-off'} size={20} color="#ffffff" />
                                    <Text style={{ color: 'white' }} >
                                        No</Text>
                                </View></>}
                        </View>

                        <View style={styles.yon1}>
                            <Text style={styles.heading}>Document Included ? -
                            </Text>
                            {(JSON.parse(Udata)['document']).length > 5 ? <View style={{}}>
                                <View style={[styles.yon, { backgroundColor: 'green' }]} >
                                    <Icon name={'done'} size={20} color="#ffffff" />
                                    <Text style={{ color: 'white' }} >
                                        yes</Text>
                                </View>

                            </View> : <>
                                <View style={[styles.yon, { backgroundColor: 'red' }]} >
                                    <Icon name={'highlight-off'} size={20} color="#ffffff" />
                                    <Text style={{ color: 'white' }} >
                                        No</Text>
                                </View></>}
                        </View>
                        {(JSON.parse(Udata)['document']).length > 5 ?
                            <View style={{ width: 100, marginLeft: 15, }}>
                                <Button color={'green'} size='sm' radius={'25'} onPress={() => downloadFromUrl(JSON.parse(Udata)['document'])} title={'Download'}></Button>
                            </View> :
                            null}
                        <View style={styles.yon1}>
                            <Text style={styles.heading}>Status -
                            </Text>
                            {(JSON.parse(Udata)['approved']) == "Pending" ? <>
                                <View style={[styles.yon, { backgroundColor: '#ffa200' }]} >
                                    <Text style={{ color: 'white' }} >
                                        Pending</Text>
                                </View>
                            </> : <>
                                {(JSON.parse(Udata)['approved']) == "Approved" ? <>
                                    <View style={[styles.yon, { backgroundColor: 'green' }]} >
                                        <Icon name={'check-circle'} size={20} color="#ffffff" />

                                        <Text style={{ color: 'white' }} >
                                            Approved</Text>
                                    </View>
                                </> : <>
                                    <View style={[styles.yon, { backgroundColor: 'red' }]} >
                                        <Text style={{ color: 'white' }} >
                                            Rejected</Text>
                                    </View></>}</>}
                        </View>
                        {(true) ?
                            <Text style={styles.textSetting}>
                                {(JSON.parse(Udata)['reviewerApproval']).map((element, count) => (

                                    <View key={count} style={styles.rewF}>
                                        <Text style={[{
                                            textAlign: 'center', color: 'green',
                                            fontWeight: 'bold', marginVertical: 10,
                                        }]}>Reviewer {count + 1} Feedback </Text>
                                        {
                                            Object.keys(element).map((i, index) => (
                                                <View key={index}>

                                                    {(i == 'email' || i == 'approve') ? <></> : <>
                                                        <TouchableOpacity style={styles.table} onPress={() => { setclicked([count, index]) }} >

                                                            <View style={{ width: Dimensions.get('screen').width / 2.3, borderColor: 'black', borderWidth: 1 }}>
                                                                <Text style={{ textAlign: 'center', paddingVertical: 10 }}>{i}</Text>
                                                            </View>
                                                            <View style={{ width: Dimensions.get('screen').width / 2.3, borderColor: 'black', borderWidth: 1 }}>
                                                                <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
                                                                    {element[i].points}/10
                                                                </Text>
                                                            </View>

                                                        </TouchableOpacity>
                                                        {(clicked[0] == count && clicked[1] == index) ? <>
                                                            <TouchableOpacity onPress={() => { setclicked(10, 10) }} style={{ width: Dimensions.get('screen').width - 47, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, overflow: 'hidden' }}>
                                                                <Text style={{ textAlign: 'center', color: 'white', paddingHorizontal: 10, padding: 5, backgroundColor: '#502a2aa8', borderBottomEndRadius: 20, }}>
                                                                    comments -   {element[i].comments}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        </> : null}

                                                        {/* <Text style={[styles.heading,{margin:5, fontWeight: 'bold' }]}>{i} - {element[i].points}</Text>
                                            <Text>comments - {element[i].comments}</Text> */}
                                                    </>}

                                                </View>

                                            ))
                                        }
                                        <View style={styles.table}>
                                            <View style={{ width: Dimensions.get('screen').width / 2.3, borderColor: 'black', borderWidth: 1 }}>
                                                <Text style={{ textAlign: 'center', paddingVertical: 10, color: 'green', fontWeight: 'bold' }}>Total</Text>
                                            </View>
                                            <View style={{ width: Dimensions.get('screen').width / 2.3, borderColor: 'black', borderWidth: 1 }}>
                                                <Text style={{ textAlign: 'center', paddingVertical: 10, fontWeight: 'bold' }}>
                                                    {Rtotal[count]}/50
                                                </Text>
                                            </View>
                                        </View>

                                    </View>

                                ))}
                                {gTotal != 0 && <View style={{ width: Dimensions.get('screen').width - 45 }}>
                                    <Text style={[styles.Tbold]}>Grand Total - {gTotal}</Text>
                                </View>}

                            </Text>

                            : null}
                    </> :
                        <View style={[styles.subCard, { minHeight: 100 }]}>
                            <Text style={[styles.Tbold, { textAlign: 'center' }]}> No Submissions</Text>
                        </View>
                    }

                </View>
            </ScrollView>
            <BottomNav navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    Tbold: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
        marginVertical: 10
    },
    textSetting: {
        margin: 15,
    },
    block: {
        overflow: 'hidden',
        textAlign: 'justify',
        margin: 10,
        marginBottom: 150,
        // borderWidth: 2,
        // alignItems: 'center',
        borderColor: 'green',
        gap: 1,
        borderRadius: 28,
    },
    table: {
        flexDirection: 'row',
    },
    rewF: {

    },
    heading: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'justify',

    },
    yon1: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    yon: {

        flexDirection: 'row',
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginLeft: 5,
        overflow: 'hidden',
        borderRadius: 20,
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default SubScreen;
