function MyObj(){

  this.dom = {  //Cоздание кнопки 
    createButton:function(elem,text,func){

      var button = document.createElement("button");  
      button.textContent = text;

      if (button.addEventListener){
        button.addEventListener("click",func,false);
      } else if(button.attachEvent) {
        button.attachEvent("onclick",func);
      }

      elem.appendChild(button);
    }

  }

  this.task1 = function(){ //Выполнение пунка №1

    function createTable() {

      var myTable =  document.getElementsByTagName("table");
      var context = document.getElementById("tables");
      
      var newTable = myTable[0].cloneNode(true); 
      newTable.className = "t2";

      var arrTh = newTable.getElementsByTagName("th");
      arrTh[1].parentNode.insertBefore(arrTh[2],arrTh[1]) //Перестановка названия столбцов таблицы
             
      var arrTd = newTable.getElementsByTagName("td");

      var countTh,countTd,i; //Переменные для храннения количества элементов th и td и счетчик в циклах

      for ( i = 0, countTh = arrTh.length; i < countTh; i++){  //Присвоение класса 
        arrTh[i].className = "t2";         
      }      

      

      for ( i = 0, countTd = arrTd.length; i < arrTd.length; i++){  
        arrTd[i].className = "t2"; //Присвоение всем таблице класс t2

        if( (i+1)%3 == 0 ) {  //Перестановка значиний в 3ем столбце во второй п
        arrTd[i].parentNode.insertBefore(arrTd[i],arrTd[i-1])
        }

      }

      context.appendChild(newTable); //Добавление новой таблицы в документ
    
    }

    var div = document.getElementById("buttons");
    this.dom.createButton(div,"task1",createTable);

  };

  this.task2 = function(){ //Выполнение пунка №2

    function createTable() {
      var myTable =  document.getElementsByTagName("table");
      var context = document.getElementById("tables");
      
      var newTable = myTable[0].cloneNode(true);
      newTable.className = "t2";
      
      var newTh = document.createElement("th");//Добавление колончи 4 
      newTh.textContent = 4;
      newTh.className = "t2";

      var arrTh = newTable.getElementsByTagName("th");
      arrTh[0].parentNode.appendChild(newTh);
      
      var arrTd = newTable.getElementsByTagName("td");
      
      var masBuff = [].slice.call(arrTd);  //Копирование живой html коллекции в массив

      var countTh,countTd,i; //Переменные для храннения количества элементов th и td и счетчик в циклах


      for ( i = 0, countTh = arrTh.length; i < countTh; i++){  //Присвоение класса 
        arrTh[i].className = "t2";         
      }    

     
      for (var i = 0; i < masBuff.length; i++){
        masBuff[i].className = "t2";
        if( (i+1)%3 == 0 ) {

          var newTd = document.createElement("td");  //Вычисление значения для колонки 4 
          newTd.textContent = (+masBuff[i].textContent + +masBuff[i-1].textContent).toFixed(2);;
          newTd.className = "t2";
          masBuff[i].parentNode.appendChild(newTd);

        }
      }



      context.appendChild(newTable);
    
    }

  var div = document.getElementById("buttons");

  this.dom.createButton(div,"task2",createTable);

  }

  this.task3 = function(){ //Выполнение пунка 3 
  
  function createCookie() { //Изменение cookie при нажатии на клавишу 
    var cookie = "bbb=" + encodeURIComponent("43");
    document.cookie = cookie;
    
    
  }


  var div = document.getElementById("buttons");

  this.dom.createButton(div,"task3",createCookie);  
  }
 
  this.task4 = function(){//Выполнение пунка 4 

  function postMessage(){
    var i,data ={};
    
    var tds = document.getElementsByTagName("td");
    
    for ( i = 0; i < 9; i++){ //9 количестов элементов td в исходной таблице

      if ( (i+1)%3 == 0 ) {

        var sum = +tds[i].textContent + +tds[i-1].textContent;

        if ( sum > 5) {
          
          data[tds[i-2].textContent] = sum; //заполнение объекта свойством из первой колонки и суммой 2 и 3ей

        }
      } 

    }
    
    alert(JSON.stringify(data));
    

    var request = new XMLHttpRequest();
    request.open("GET","http://domain.com")
    request.setRequestHeader("Content-Type","application/json")
    request.send(JSON.stringify(data));
  }
  
  var div = document.getElementById("buttons");

  this.dom.createButton(div,"task4",postMessage);  

  }
  
  this.task5 = function(){//Выполнение пунка 5
    function iframeCreate(){
      var div = document.getElementById("iframes");//создание ifame
      var iframe = document.createElement('iframe');  
      var iframeId = "iframe" + i++;
      

      var url = document.URL + (document.URL.match(/\?/) ? '&' : '?');

     
      iframe.id = iframe.name = iframeId; 
      iframe.style.width = "600px";
      iframe.style.height = "600px";
      iframe.src = url;
      div.appendChild(iframe);
    }
    var i = 0;  //счетчик количества созданных фреймов
    var div = document.getElementById("buttons");

    this.dom.createButton(div,"task5",iframeCreate);  
  }

  window.onload = function(){ //изменение исходной таблицы если у нас данные в cookie
    var tds = document.getElementsByTagName("td");
    var cookies = {};

    var cookie = document.cookie;
    
    if (cookie === "") return;

    var p = cookie.indexOf("=");
    var name = cookie.substring(0,p);
    var value = cookie.substring(p+1);
    var i,countTd;

    cookies[name] = value;
    


    for ( i = 0, countTd = arrTd.length; i < countTd; i++){
      if ( (i+1)%3 == 0 ) {
      tds[i].textContent = (+tds[i].textContent - +cookies[name]).toFixed(2);
      tds[i-1].textContent = (+tds[i-1].textContent - +cookies[name]).toFixed(2);
      } 
    }
  }

  this.task1();
  this.task2();
  this.task3();
  this.task4();
  this.task5();

}

new MyObj();
