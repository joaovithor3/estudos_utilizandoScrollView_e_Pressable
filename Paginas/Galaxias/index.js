import React from 'react';
import {Text,Image, View, ScrollView,Pressable} from 'react-native'; 

import imgGalaxia from '../../assets/galaxias1.png';
import imgGalaxia2 from '../../assets/galaxias2.png';
import BuracoNegro from '../../assets/icon-buraco-negro.png';
import Planeta from '../../assets/icon-planet.png';
import home from '../../assets/icon-home.png'
import estilos from './estilos';
export default function Galaxias(props) {
    return (
    <View  style = {estilos.container}>
            <Text style={{color:'#FFE419', fontSize: 30, textAlign:'center'}}>Galáxias</Text>
          <ScrollView>
  
      <Text style={estilos.texto}>Na cosmologia, uma galáxia é um grande sistema, gravitacionalmente ligado, que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira, e um, importante mas insuficientemente conhecido, componente apelidado de matéria escura.
</Text>
      
      <Image source={imgGalaxia} style = {estilos.img}/>

      <Text style={estilos.texto}>A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste, recortada por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.
</Text>
    
      <Image source={imgGalaxia2} style = {estilos.img}/>

    <View style={estilos.box}>
      <Pressable
          onPress={ () => { props.navigation.navigate("Planetas") } }
          style={estilos.boxBottom} >
            <Image source ={Planeta} style ={estilos.BottomHome}/>
          <Text style={estilos.textoBox}>Planeta</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("Tela Inicial") } }
          style={estilos.boxBottom} >
            <Image source ={BuracoNegro} style ={estilos.BottomHome}/>
          <Text style={estilos.textoBox}>Buraco Negro</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("Tela Inicial") } }
          style={estilos.boxBottom} >
            <Image source ={home} style ={estilos.BottomHome}/>
          <Text style={estilos.textoBox}>Inicio</Text>
        </Pressable>

    </View>
    
          </ScrollView>

    </View>
    );
}