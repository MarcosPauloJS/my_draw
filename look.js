'use strict';
var CAMINHO='/request/mobile/';
var ENDERECO='/room/';
var popSistema=false;window.addEventListener('DOMContentLoaded',function(){$('#popup .sair').addEventListener('click',function(){fecharPopup();},false);},false);function $(id,elem){if(!elem)
    elem=document;return elem.querySelector(id);}
    function _(id,elem){if(!elem)
    elem=document;return elem.querySelectorAll(id);}
    function alerta(titulo,txt,callback,sistema){popSistema=sistema;$('#popup h3').innerText=titulo;$('#popup .popupContent > .descricao').innerHTML=txt;$('#popup').className='popupAlerta';if(!callback){callback=function(){fecharPopup();};}
    var elemOK=$('#popupBt1');elemOK.innerText=idioma.popup.ok;elemOK.onclick=callback;elemOK.focus();}
    function confirma(titulo,txt,bt1Txt,bt1Callback,bt2Txt,bt2Callback,sistema){popSistema=sistema;$('#popup h3').innerText=titulo;$('#popup .popupContent > .descricao').innerHTML=txt;$('#popup').className='popupConfirmacao';var elemBt1=$('#popupBt1');elemBt1.innerText=(bt1Txt)?bt1Txt:idioma.popup.ok;elemBt1.onclick=bt1Callback;elemBt1.focus();var elemBt2=$('#popupBt2');elemBt2.innerText=(bt2Txt)?bt2Txt:idioma.popup.cancelar;if(bt2Callback)
    elemBt2.onclick=bt2Callback;else
    elemBt2.onclick=fecharPopup;}

    function aviso(txt,sistema){
        popSistema=sistema;
        $('#popup .popupContent > .descricao').innerHTML=txt;
        $('#popup').className='popupAviso';
    }

    function carregando(sistema){
        popSistema=sistema;
        $('#popup').className='carregando';
    }

    function fecharPopup(sistema){
        if(sistema&&!popSistema)return;$('#popup').className='';
    }
    function html_entity_decode(string){
        string =string.replace(/&c.*;/gi,'c');string=string.replace(/&a.*;/gi,'a');string=string.replace(/&e.*;/gi,'e');
        string=string.replace(/&i.*;/gi,'i');string=string.replace(/&o.*;/gi,'o');string=string.replace(/&u.*;/gi,'u');
        return string;
    }
    function semAcento(palavra){
        palavra=palavra.replace(/[áàãâä]/gi,'a');
        palavra=palavra.replace(/[éèêë]/gi,'e');palavra=palavra.replace(/[íìîï]/gi,'i');
        palavra=palavra.replace(/[óòõôö]/gi,'o');palavra=palavra.replace(/[úùûü]/gi,'u');
        palavra=palavra.replace(/[ç]/gi,'c');palavra=palavra.replace(/[-]/gi,' ');
    return palavra;
}
    function validaBusca(formElem){var valor=formElem.querySelector('.buscar input').value;return(valor.length>0);}!@