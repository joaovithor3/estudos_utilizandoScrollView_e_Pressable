import React from 'react';
import {Pressable, View, Text, Image} from 'react-native';

import imagem from '../assets/Galaxia.jpg'
import estilos from './estilos';

export default function TelaInicial(props) {
    return (
  <View style={estilos.container}>
        <Image source = {imagem} style ={estilos.imgTelaInicial}/>

        <Text style={estilos.titulo}>Conheceça um pouco sobre o o universo</Text>

        <Text style={estilos.texto}>Toque nos botões abaixo e conheça mais sobre o que existe no céu.</Text>

        <View style={ estilos.boxBotoes }>
        <Pressable
          onPress={ () => { props.navigation.navigate("Planetas") } }
          style={ estilos.botaoContainer }
        >
          <Text style={ estilos.botaoLabel }>Planetas</Text>
        </Pressable>
        
        <Pressable
          onPress={ () => { props.navigation.navigate("Galaxias") } }
          style={ estilos.botaoContainer }
        >
          <Text style={ estilos.botaoLabel }>Galáxias</Text>
        </Pressable>
        
        <Pressable
          onPress={ () => { props.navigation.navigate("Buraco Negro") } }
          style={ estilos.botaoContainer }
        >
          <Text style={ estilos.botaoLabel }>Buraco Negro</Text>
        </Pressable>
        </View>
  </View>
 
 );
 }

 //OK