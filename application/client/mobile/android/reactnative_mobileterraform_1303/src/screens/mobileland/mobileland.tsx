import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, Alert, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default class mobileland extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
    }


    render() {
        return(
            <>
                <ScrollView>
                    <SafeAreaView>
                                <View style={[this.styles.template_i176,this.style.gjs_row]}>
    <ImageBackground source={{uri: 'undefined'}}style={[this.styles.template_iymf,this.style.gjs_cell]}>
        <Text style={this.styles.template_iozg}>Welcome to</Text>
        <Image style={this.styles.template_i919} source={{uri:
        'https://grapesjs-images.s3.amazonaws.com/grapesjsimages/image%203.png'}}/>
        <View style={[this.styles.template_icre,this.style.gjs_row]}>
            <View style={[this.styles.template_irli,this.style.gjs_cell]}>
                <Text style={[this.styles.template_im6n,]}>User Name</Text>
                <TextInput style={[this.styles.template_iu4y6,]} />
            </View>
            <View style={[this.styles.template_iacw6,this.style.gjs_cell]}>
                <Text style={[this.styles.template_i052e,]}>Password</Text>
                <TextInput style={[this.styles.template_i2s8l,]} />
            </View>
            <View style={[this.styles.template_ix5dn,this.style.gjs_cell]}>
                <Button color="#2196f3" style={[this.styles.template_ib2ec,]}>LOGIN</Button>
            </View>
        </View>
    </ImageBackground>
</View>
                    </SafeAreaView>
                </ScrollView>
            </>
        );
    };

    public styles = StyleSheet.create(
        {
  "gjs_row": { display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', flexWrap: 'wrap', paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10 },
  "gjs_cell": { flexBasis: 50 },
  "template_i176": {
    "paddingTop": 0,
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingBottom": 0
  },
  "template_iymf": {
    "backgroundRepeatX": "no-repeat",
    "backgroundRepeatY": "no-repeat",
    "backgroundPositionX": "center",
    "backgroundPositionY": "top",
    "backgroundAttachment": "scroll",
    "backgroundSize": "cover",
    "paddingTop": 145,
    "paddingRight": 0,
    "paddingBottom": 145,
    "paddingLeft": 0,
    "textAlign": "center"
  },
  "template_iozg": {
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10,
    "color": "rgb(255, 255, 255)",
    "textAlign": "center",
    "fontFamily": "Helvetica sans-serif",
    "fontWeight": "700",
    "fontSize": 34
  },
  "template_i919": {
    "color": "black",
    "marginTop": 6,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "template_irli": {
    "textAlign": "left",
    "flexBasis": "80%",
    "maxWidth": "80%"
  },
  "template_im6n": {
    "fontFamily": "Helvetica sans-serif",
    "color": "rgb(255, 255, 255)"
  },
  "template_icre": {
    "marginTop": 55,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "justifyContent": "center"
  },
  "template_iu4y6": {
    "height": 48,
    "backgroundColor": "rgb(237, 241, 255)"
  },
  "template_i052e": {
    "fontFamily": "Helvetica sans-serif",
    "color": "rgb(255, 255, 255)"
  },
  "template_i2s8l": {
    "height": 48,
    "backgroundColor": "rgb(237, 241, 255)"
  },
  "template_iacw6": {
    "textAlign": "left",
    "flexBasis": "80%",
    "maxWidth": "80%",
    "marginTop": 30,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "template_ib2ec": {
    "paddingTop": 10,
    "paddingRight": 20,
    "paddingBottom": 10,
    "paddingLeft": 20,
    "width": "100%",
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50,
    "borderBottomRightRadius": 50,
    "borderBottomLeftRadius": 50,
    "backgroundColor": "rgb(30, 41, 141)",
    "fontFamily": "Helvetica sans-serif",
    "fontWeight": "600"
  },
  "template_ix5dn": {
    "textAlign": "left",
    "flexBasis": "80%",
    "maxWidth": "80%",
    "marginTop": 30,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "display": "flex",
    "alignItems": "center"
  }
}
    );

    public style = StyleSheet.create({
        gjs_row:
            {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 10
}
        gjs_cell:
            {
  flexBasis: 50
}
    });
}