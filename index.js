const nuevoSigno=signo="";
const nuevoCompatible=compatibilidad="";
const array=[];

function agregarObjeto(){
    const nombre=document.getElementById("formName").value;
    const dia=document.getElementById("formDay").value;
    const mes=document.getElementById("formMonth").value;
    const persona={nombre:nombre, dia:dia, mes:mes};
    array.push(persona);
    document.getElementById("formulario").reset();

    if ((dia>20 && mes==3)||(dia<20 && mes==4)){
        persona.signo="Aries";
        persona.compatibilidad="Libra";
        Swal.fire({
            title: 'ARIES!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://png.pngtree.com/template/20220612/ourmid/pngtree-aries-zodiac-sign-horoscope-constellation-image_1830889.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Aries',
          })
    }else if ((dia>20 && mes==4)||(dia<21 && mes==5)){
        persona.signo="Tauro";
        persona.compatibilidad="Escorpio";
        Swal.fire({
            title: 'TAURO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://st.depositphotos.com/1634428/4544/v/450/depositphotos_45448011-stock-illustration-taurus-zodiac-sign-black-white.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Taurus',
          })
    }else if ((dia>20 && mes==5)||(dia<21 && mes==6)){
        persona.signo="Géminis";
        persona.compatibilidad="Sagitario";
        Swal.fire({
            title: 'GEMINIS!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://previews.123rf.com/images/insima/insima1708/insima170800007/84252979-gemini-astrological-horoscope-sign-in-the-zodiac-wheel-black-and-white-vector-illustration.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Gemini',
          })
    }else if ((dia>20 && mes==6)||(dia<23 && mes==7)){
        persona.signo="Cáncer";
        persona.compatibilidad="Capricornio";
        Swal.fire({
            title: 'CANCER!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/692/737/non_2x/cancer-is-a-sign-of-the-zodiac-horoscope-and-astrology-hand-drawn-illustration-in-a-flat-style-vector.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Cancer',
          })
    }else if ((dia>22 && mes==7)||(dia<23 && mes==8)){
        persona.signo="Leo";
        persona.compatibilidad="Acuario";
        Swal.fire({
            title: 'LEO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://previews.123rf.com/images/insima/insima1404/insima140400016/27904725-leo-or-lion-astrological-zodiac-sign-black-and-white-image.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Leo',
          })
    }else if ((dia>22 && mes==8)||(dia<23 && mes==9)){
        persona.signo="Virgo";
        persona.compatibilidad="Piscis";
        Swal.fire({
            title: 'VIRGO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://png.pngtree.com/png-vector/20190528/ourlarge/pngtree-virgo-zodiac-vintage-vector-illustration-png-image_1111065.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Virgo',
          })
    }else if ((dia>22 && mes==9)||(dia<23 && mes==10)){
        persona.signo="Libra";
        persona.compatibilidad="Aries";
        Swal.fire({
            title: 'LIBRA!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://image.spreadshirtmedia.com/image-server/v1/compositions/T127A1PA4192PT21X7Y5D1025837625W1903H2283/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/libra-zodiac-sign-stars-september-and-october-small-buttons.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Libra',
          })
    }else if ((dia>22 && mes==10)||(dia<22 && mes==11)){
        persona.signo="Escorpio";
        persona.compatibilidad="Tauro";
        Swal.fire({
            title: 'ESCORPIO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://m.media-amazon.com/images/I/6188LW2aKlL._AC_UF894,1000_QL80_.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Escorpio',
          })
    }else if ((dia>21 && mes==11)||(dia<22 && mes==12)){
        persona.signo="Sagitario";
        persona.compatibilidad="Géminis";
        Swal.fire({
            title: 'SAGITARIO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://cdn.create.vista.com/api/media/small/433216440/stock-vector-constellation-sagittarius-sign-zodiac-sagittarius',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Sagitario',
          })
    }else if ((dia>21 && mes==12)||(dia<20 && mes==1)){
        persona.signo="Capricornio";
        persona.compatibilidad="Cáncer";
        Swal.fire({
            title: 'CAPRICORNIO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/692/877/non_2x/capricorn-is-a-sign-of-the-zodiac-horoscope-and-astrology-illustration-in-a-flat-style-vector.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Capricornio',
          })
    }else if ((dia>19 && mes==1)||(dia<19 && mes==2)){
        persona.signo="Acuario";
        persona.compatibilidad="Leo";
        Swal.fire({
            title: 'ACUARIO!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://previews.123rf.com/images/insima/insima1708/insima170800005/84252976-aquarius-astrological-horoscope-sign-in-the-zodiac-wheel-black-and-white-vector-illustration.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Acuario',
          })
    }else if ((dia>18 && mes==2)||(dia<21 && mes==3)){
        persona.signo="Piscis";
        persona.compatibilidad="Virgo";
        Swal.fire({
            title: 'PISCIS!',
            text: persona.nombre+' sos '+persona.signo+' por haber nacido el día '+persona.dia+' del mes '+persona.mes+', y tu signo opuesto complementario es '+persona.compatibilidad,
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/023/578/905/small/cartoon-style-clip-art-illustration-of-yin-and-yang-pattern-koi-carp-perfect-for-web-designers-publishers-and-content-creators-generative-ai-photo.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Piscis',
          })
    }
    const personaJSON=JSON.stringify(array, null, 2);
    sessionStorage.setItem("objetoGuardado", personaJSON);
    const traigo=JSON.parse(sessionStorage.getItem("objetoGuardado"));

    const final=document.getElementById("lista");
    
    const listItem=document.createElement('li');
    listItem.textContent="NOMBRE: "+persona.nombre+" - SIGNO SOLAR: "+persona.signo+" - SIGNO OPUESTO: "+persona.compatibilidad+" - DIA DE NACIMIENTO: "+persona.dia+" - MES DE NACIMIENTO: "+persona.mes+".";
    final.appendChild(listItem);
}

const apiKey='GRTOpYR2IF2aX5dCZY8W4PiKVZDEY7vL8aR8qykeICz4hJVAHgv07XLo';
const url='https://api.pexels.com/v1/search?query=universe&per_pag=1';
const imagenPexels=document.getElementById('imagen-pexels');
fetch(url, {
    method:'GET',
    headers:{
        'Authorization': apiKey
    }
})
    .then(response=>response.json())
    .then(data=>{
        const imageUrl=data.photos[0].src.large;
        imagenPexels.src=imageUrl;
    })
    .catch(error=>console.error('error:', error));