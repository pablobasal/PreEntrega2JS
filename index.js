const nuevo=signo="";
const nuevo1=compatibilidad="";
const array=[];

function agregarObjeto(){
    const nombre=document.getElementById("formName").value;
    const dia=document.getElementById("formDay").value;
    const mes=document.getElementById("formMonth").value;
    const persona={nombre:nombre, dia:dia, mes:mes};
    array.push(persona);
    document.getElementById("formularioo").reset();

    if ((dia>20 && mes==3)||(dia<20 && mes==4)){
        persona.signo="Aries";
        persona.compatibilidad="Libra";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>20 && mes==4)||(dia<21 && mes==5)){
        persona.signo="Tauro";
        persona.compatibilidad="Escorpio";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>20 && mes==5)||(dia<21 && mes==6)){
        persona.signo="Géminis";
        persona.compatibilidad="Sagitario";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>20 && mes==6)||(dia<23 && mes==7)){
        persona.signo="Cáncer";
        persona.compatibilidad="Capricornio";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>22 && mes==7)||(dia<23 && mes==8)){
        persona.signo="Leo";
        persona.compatibilidad="Acuario";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>22 && mes==8)||(dia<23 && mes==9)){
        persona.signo="Virgo";
        persona.compatibilidad="Piscis";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>22 && mes==9)||(dia<23 && mes==10)){
        persona.signo="Libra";
        persona.compatibilidad="Aries";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>22 && mes==10)||(dia<22 && mes==11)){
        persona.signo="Escorpio";
        persona.compatibilidad="Tauro";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>21 && mes==11)||(dia<22 && mes==12)){
        persona.signo="Sagitario";
        persona.compatibilidad="Géminis";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>21 && mes==12)||(dia<20 && mes==1)){
        persona.signo="Capricornio";
        persona.compatibilidad="Cáncer";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>19 && mes==1)||(dia<19 && mes==2)){
        persona.signo="Acuario";
        persona.compatibilidad="Leo";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }else if ((dia>18 && mes==2)||(dia<21 && mes==3)){
        persona.signo="Piscis";
        persona.compatibilidad="Virgo";
        const nuevoTitulo=document.getElementById("parrafo");
        nuevoTitulo.innerText=persona.nombre+" tu signo solar es "+persona.signo+" y tu signo opuesto complementario es "+persona.compatibilidad;
    }
    const personaJSON=JSON.stringify(array, null, 2);
    sessionStorage.setItem("objetoGuardado", personaJSON);
    const traigo=JSON.parse(sessionStorage.getItem("objetoGuardado"));

    const final=document.getElementById("lista");
    
    const listItem=document.createElement('li');
    listItem.textContent="NOMBRE: "+persona.nombre+" - SIGNO SOLAR: "+persona.signo+" - SIGNO OPUESTO: "+persona.compatibilidad+" - DIA DE NACIMIENTO: "+persona.dia+" - MES DE NACIMIENTO: "+persona.mes+".";
    final.appendChild(listItem);
}