import { StyleSheet } from "react-native";







const estilos = StyleSheet.create({

container:{
    flex: 1,
    backgroundColor:'#2e2e2e',
    alignItems:'center',
    justifyContent:'center',
    padding: 20,
    
},
imgTelaInicial:{
    width:350,
    height: 200,
    borderColor:'white',
    borderWidth: 0.3,
},
boxBotoes:{
    flexDirection: "row",
},
botaoContainer:{
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#cf9556',
    margin: 5,
    borderRadius: 20,   
},
botaoLabel:{
    color: '#252535',
    fontWeight: "bold",
    textAlign: "center"
},
texto:{
    fontSize: 12,
    color:'#F0D9AF',
    margin:5,
    marginBottom: 15,

},
titulo:{
    fontWeight: "bold",
    textAlign: "center",
    color:'#cf9556',
    fontSize:20,
    marginBottom: 10,
},

});


export default estilos