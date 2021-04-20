function szamol() {
    var letszam = parseInt(document.getElementById("letszam").value);
    var ejszaka = parseInt(document.getElementById("ejszaka").value);
    var orszag = document.getElementById("orszag").value;
    
    var ar = 5600; //Bulgária
    if (orszag == "g"){  
        ar = 6200;     //Görögország
    }
    if (orszag == "h"){
        ar = 5000;    //Horvátország
    }
    if (orszag == "t"){
        ar = 5800;    //Törökország
    }

    var fizetendo = ejszaka * letszam *ar;
    //--számolás--
      
    //------------
    document.getElementById('eredmeny').value = fizetendo.toLocaleString()+" Ft";
    
}