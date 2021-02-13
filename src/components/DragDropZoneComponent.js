import React from 'react'
import { useDropzone } from 'react-dropzone'
import { View, Image, Text, Button } from 'react-native'
import {
    responsiveScreenHeight
} from "react-native-responsive-dimensions";
function DropZoneComponent() {
    const { getRootProps, getInputProps } = useDropzone()
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{
                marginTop: 10,
                paddingLeft: 10,
                height: responsiveScreenHeight(50),
                width: responsiveScreenHeight(50),
                marginBottom: 10,
                borderWidth: 10,
                borderStyle: 'dashed',
                borderColor: 'blue',
                borderRadius: 1,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                {...getRootProps()}>
                <input {...getInputProps()} />
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 50,
                        height: 50
                    }} source="https://img.icons8.com/pastel-glyph/2x/upload.png"></Image>
                    <Text>
                        Upload File
                    </Text>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{
                            flex: 1,
                            flexShrink: 'wrap',
                            flexWrap: 'wrap',
                            width: 250,
                            textAlign: 'center'
                        }}>Drag 'n' drop some files here, or click to select files</Text>
                    </View>
                </View>
            </View>

            <View style={{
                flexDirection:'column',
                flex:'1',
                justifyContent:'space-between',
                height:70
            }}>
                <Button title="Submit" style={{

                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#68a0cf',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#fff'
                }} />
                <Button title="Cancel" style={{

                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#68a0cf',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#fff'
                }} />
            </View>

        </View>
    )
}




export default DropZoneComponent;