import React from 'react';
import {Text,Image, View, ScrollView,Pressable} from 'react-native';


import imgPlaneta from '../../assets/planetas1.png'
import imgPlaneta2 from '../../assets/planetas.png'
import terra from '../../assets/planeta-terra.png'
import IconGalaxia from '../../assets/icon-galaxy.png';
import home from '../../assets/icon-home.png'
import estilos from './estilos';
export default function Planetas(props) {
    return (
    <View  style = {estilos.container}>
<Text style={{color:'#FFE419', fontSize: 30, textAlign:'center',}}>Planetas</Text>
          <ScrollView>
  
      <Text style={estilos.texto}>Os planetas do Sistema Solar são, corpos celestes que orbitam o Sol com massa suficiente para que a sua própria gravidade possibilite que assumam uma forma arredondada, ou seja, a forma de equilíbrio estático.</Text>
      
      <Image source={imgPlaneta} style = {estilos.img}/>

      <Text style={estilos.texto}>Os planetas do nosso Sistema Solar formam um conjunto de oito planetas que giram em torno do sol. Ele são: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.</Text>
      
      <Image source={imgPlaneta2} style = {estilos.img}/>

      <Text style={estilos.texto}>A Terra é o terceiro planeta a contar do Sol e o quinto maior do Sistema Solar. Até onde se sabe o planeta em que vivemos é o único do nosso sistema solar em condições de abrigar vida da forma como a conhecemos.</Text>
      
      <Image source={terra} style = {estilos.img}/>
             
    <View style={estilos.box}>
      <Pressable
          onPress={ () => { props.navigation.navigate("Galaxias") } }
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
    
          </ScrollView>

    </View>
    );
  }