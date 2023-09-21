class persona{
    constructor(nombre, dia, mes){
        this.nombre=nombre;
        this.dia=dia;
        this.mes=mes;
    }
}
const personas=[];
let parar=prompt("Bienvenidos a 'Tierra y Aire', veamos cuál es tu signo!! (presione enter para continuar//escriba 'no' para ir a la página)");
while(parar!="no"){
    personas.push(new persona((prompt("ingrese nombre")), parseInt(prompt ("ingrese dia de nacimiento, ej: '1'")), 
    (prompt ("ingrese mes de nacimiento, ej: '1' o 'Enero'"))));
    parar=prompt("Desea agregar más personas? (enter para continuar // escriba 'no' para terminar)");
}

const nuevo=signo="";
const nuevo1=compatibilidad="";

personas.forEach((persona)=>{
    if((persona.dia>20 && (persona.mes==3 || persona.mes=="Marzo" || 
    persona.mes=="marzo"))||(persona.dia<20 && (persona.mes==4 || persona.mes=="Abril" || persona.mes=="abril"))){
    persona.signo="Aries";
    persona.compatibilidad="Libra";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>19 && (persona.mes==4 || persona.mes=="Abril" || 
    persona.mes=="abril"))||(persona.dia<21 && (persona.mes==5 || persona.mes=="Mayo" || persona.mes=="mayo"))){
        persona.signo="Tauro";
        persona.compatibilidad="Escorpio";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>20 && (persona.mes==5 || persona.mes=="Mayo" || 
    persona.mes=="mayo"))||(persona.dia<21 && (persona.mes==6 || persona.mes=="Junio" || persona.mes=="junio"))){
        persona.signo="Géminis";
        persona.compatibilidad="Sagitario";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>20 && (persona.mes==6 || persona.mes=="Junio" || 
    persona.mes=="junio"))||(persona.dia<23 && (persona.mes==7 || persona.mes=="Julio" || persona.mes=="julio"))){
        persona.signo="Cáncer";
        persona.compatibilidad="Capricornio";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>22 && (persona.mes==7 || persona.mes=="Julio" || 
    persona.mes=="julio"))||(persona.dia<23 && (persona.mes==8 || persona.mes=="Agosto" || persona.mes=="agosto"))){
        persona.signo="Leo";
        persona.compatibilidad="Capricornio";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>22 && (persona.mes==8 || persona.mes=="Agosto" || 
    persona.mes=="agosto"))||(persona.dia<23 && (persona.mes==9 || persona.mes=="Septiembre" || persona.mes=="septiembre"))){
        persona.signo="Virgo";
        persona.compatibilidad="Piscis";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>22 && (persona.mes==9 || persona.mes=="Septiembre" || 
    persona.mes=="septiembre"))||(persona.dia<23 && (persona.mes==10 || persona.mes=="Octubre" || persona.mes=="octubre"))){
        persona.signo="Libra";
        persona.compatibilidad="Aries";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>22 && (persona.mes==10 || persona.mes=="Octubre" || 
    persona.mes=="octubre"))||(persona.dia<22 && (persona.mes==11 || persona.mes=="Noviembre" || persona.mes=="noviembre"))){
        persona.signo="Escorpio";
        persona.compatibilidad="Tauro";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>21 && (persona.mes==11 || persona.mes=="Noviembre" || 
    persona.mes=="noviembre"))||(persona.dia<22 && (persona.mes==12 || persona.mes=="Diciembre" || persona.mes=="diciembre"))){
        persona.signo="Sagitario";
        persona.compatibilidad="Géminis";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>21 && (persona.mes==12 || persona.mes=="Diciembre" || 
    persona.mes=="diciembre"))||(persona.dia<20 && (persona.mes==1 || persona.mes=="Enero" || persona.mes=="enero"))){
        persona.signo="Capricornio";
        persona.compatibilidad="Cáncer";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>19 && (persona.mes==1 || persona.mes=="Enero" || 
    persona.mes=="enero"))||(persona.dia<19 && (persona.mes==2 || persona.mes=="Febrero" || persona.mes=="febrero"))){
        persona.signo="Acuario";
        persona.compatibilidad="Leo";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    } else if((persona.dia>18 && (persona.mes==2 || persona.mes=="Febrero" || 
    persona.mes=="febrero"))||(persona.dia<21 && (persona.mes==3 || persona.mes=="Marzo" || persona.mes=="marzo"))){
        persona.signo="Piscis";
        persona.compatibilidad="Virgo";
        console.log(persona.nombre+" tu signo solar es "+persona.signo+", y tu opuesto complementario es "+persona.compatibilidad);
    }
});

console.log(personas);