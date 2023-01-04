import React from 'react';
import {Text,Image,View,Pressable} from 'react-native'; 


import img from '../../assets/galaxias1.png';
import estilos from './estilo';
import IconGalaxia from '../../assets/icon-galaxy.png';
import home from '../../assets/icon-home.png'

export default function Buraco(props) {
    return (
<View style={estilos.container}>
<Text style={{color:'#FFE419', fontSize: 30, textAlign:'center'}}>Buraco Negro</Text>
<Text style={estilos.texto}>Buraco negro é uma região do espaço-tempo em que o campo gravitacional é tão intenso que nada pode escapar dela. A teoria da relatividade geral prevê que uma massa suficientemente compacta pode deformar o espaço-tempo para formar um buraco negro.
</Text>
<Image source={img} style={estilos.img}/>


<Pressable
          onPress={ () => { props.navigation.navigate("Galáxias") } }
          style={estilos.boxBottom} >
            <Image source ={IconGalaxia} style ={estilos.BottomHome}/>
          <Text style={estilos.textoBox}>Galáxias</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("Tela Inicial") } }
          style={estilos.boxBottom} >
            <Image source ={home} style ={estilos.BottomHome}/>
          <Text style={estilos.textoBox}>Inicio</Text>
        </Pressable>





</View>


);
}