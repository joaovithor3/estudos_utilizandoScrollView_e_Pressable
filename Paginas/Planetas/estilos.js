import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

 texto:{
    fontSize: 15,
    textAlign:'center',
    padding: 20,
    color:'#F0D9AF',
 },

img:{
    width: 300,
    height: 200,
    borderColor:'white',
    borderWidth: 0.3,
    margin: 10,
    alignSelf:'center',
},

boxBottom:{
    marginBottom: 15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    paddingVertical:5,
    width: 200,
    marginBottom: 10,
    backgroundColor:'#cf9556',
    flexDirection:'row',
    borderColor:'#D05D49',
    borderWidth: 2,
    

},
textoBox:{
fontSize: 20,
paddingHorizontal: 10,

},
container:{
    flex:1,
    backgroundColor:'#2e2e2e',
},
BottomHome:{
    width: 30,
    height:30,
},
box:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 15,
},

});
export default estilos