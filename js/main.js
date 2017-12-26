window.languagePackage={
    //english
    'en':{
        'text1':'Elegant encounter every day...',
        'text2':'Beautiful wallpaper by designer selection of high-quality wallpaper every day, carefully precipitated monologue text, give your heart to touch every day!'
    },
    //russia
    'ru':{
        'text1':'Элегантный встреча каждый день',
        'text2':'Красивые обои на выбор дизайнера высокого качества обои каждый день, тщательно осаждают текст монолога, отдать свое сердце, чтобы коснуться каждый день!'
    },
    //Turkey
    'tr':{
        'text1':'Her gün Zarif karşılaşma...',
        'text2':'Yüksek kaliteli duvar kağıtları tasarımcı seçimi, her gün, dikkatle çöktürülmüş monolog metni ile güzel duvar kağıdı, her gün dokunmak kalbini ver!'
    },
    //Portuguese
    'pt':{
        'text1':'Encontro elegante todos os dias...',
        'text2':'Papel de parede bonito pela seleção designer de alta qualidade papel de parede todos os dias, texto monólogo cuidadosamente precipitada, dar o seu coração para tocar todos os dias!'
    },
    //Spanish
    'es':{
        'text1':'Encuentro elegante todos los días...',
        'text2':'Hermoso fondo de pantalla mediante la selección de diseño de fondos de escritorio de alta calidad cada día, texto monólogo cuidadosamente precipitado, darle a su corazón para tocar todos los días!'
    }
}
//step2 init language
var defaultLanguage='en';
function initLanguage()
{
    //first cookie information if set return the language
    var cookieArr = document.cookie.split(";");
    console.log(cookieArr);
    for(var i=0;i<cookieArr.length;i++)
    {
        var tempCookie = cookieArr[i].split("=");
        if(tempCookie[0]=="language")
        {
            return tempCookie[1];
        }
    }
    //second browser-information  if language-lib has this language return else return default language
    var languageInfo=(navigator.language).toLowerCase().substr(0,2);
    if(!languagePackage[languageInfo])
    {
        document.cookie='language='+defaultLanguage+";expires="+100*24*60*60*1000;
        return defaultLanguage;
    }
    else
    {
        return languageInfo;
    }
}
//step3 switch language args must come from initLanguage
function switchLanguage(languageType)
{
    //first set cookie
    if(!languagePackage[languageType])
    {
        languageType=defaultLanguage;
    }
    console.log(languageType);
    document.cookie='language='+languageType+";expires="+100*24*60*60*1000;
    //second replace text
    var items = $("[flag]");
    var desLanguage = languagePackage[languageType];
    items.each(function(){
        var oThis = $(this)
        var desName=oThis.attr("flag");
        var desValue = desLanguage[desName]||"";
        oThis.text(desValue);
    })
}
TheLanguage = initLanguage();
switchLanguage(TheLanguage);
var oul = document.getElementById("languageSwitch");
var olis = oul.getElementsByTagName("li");
for(var i=0;i<olis.length;i++){
    olis[i].onclick = function(){
        switchLanguage(this.id);
        for(var j=0;j<olis.length;j++){
            olis[j].className='default';
        }
        this.className='current';
    }
}
document.getElementById(TheLanguage).click();