function KeyPress(term)
{
    var request=null;           // создаем новый объект запроса
    try
    {
        request = new XMLHttpRequest();     // для Firefox, Opera, Safari
    }
    catch (e)
    {
        request=new ActiveXObject("Microsoft.XMLHTTP");     // для Internet Explorer
    }

    if(request==null)
    {
        return;     // если не удалось создать объект запроса, конец выполнения функции
    }

    // формируем url-адрес
    var url = "products.php" + "?s=" + encodeURIComponent(term) + "&sid=" + Math.random();       // encodeURIComponent кодирует символы в UTF-8

    request.onreadystatechange =  function(){           
        // проверка состояния готовности (4) и статуса запроса
        if (request.readyState == 4 && request.status == 200)
        {
            // делаем div с id "searchresults" видимым
            ShowDiv("searchresults");

            // очищаем результаты
            ClearResults();
            
            // получаем данные
            var answer = request.responseText;
            //alert(answer);
            console.log(answer);

            // преобразуем строку текста в массив, определяем его размер
            var array = answer.split(",");
            var count = array.length;

            // находим searchresults
            var div = document.getElementById("searchresults");

            // создаем таблицу внутри этого div
            var tbl = document.createElement("table");
            var tblbody = document.createElement("tbody");
            var tblRow, tblCell, tblNode;

            // перебираем все элементы массива array
            for(var i = 0; i < count; i++)
            {
                var text = array[i];
                //создаем строки таблицы и добавляем в ее тело
                tblRow = document.createElement("tr");
                tblCell = document.createElement("td");
                //задаем атрибуты и функции ячеек
                tblCell.onmouseover = function(){this.className='mouseOver';};
                tblCell.onmouseout = function(){this.className='mouseOut';};
                tblCell.setAttribute("border", "0");
                tblCell.onclick = function(){
                    Replace(this);
                };
                tblNode = document.createTextNode(text);
                tblCell.appendChild(tblNode);
                tblRow.appendChild(tblCell);
                tblbody.appendChild(tblRow);
            }

            //добавляем в таблицу ее тело
            tbl.appendChild(tblbody);
            
            //помещаем таблицу в слой
            div.appendChild(tbl);
        }
    };  
    request.open("GET", url, true);     // метод, ссылка, асинхронно / синхронно
    request.send();                     // отправляет запрос
}

function ShowDiv(id)            // div виден
{
    if (document.layers) document.layers[id].visibility="show";
    else document.getElementById(id).style.visibility="visible";
}

function HideDiv(id)            // div не виден
{
    if (document.layers) document.layers[id].visibility="hide";
    else document.getElementById(id).style.visibility="none";
}

function ClearResults()         // удаление существующих строк из таблицы результатов
{
    var div = document.getElementById("searchresults");
    var counter = div.childNodes.length;
    for(var i = counter-1; i >= 0; i--)
    {
        div.removeChild(div.childNodes[i]);
    }
}

function Replace(tblCell)       // заменяем значение в поле ввода значением, выбранным щелчком лкм
{
    var inputbox = document.getElementById("country");
    console.log(tblCell.firstChild.nodeValue);
    inputbox.value = tblCell.firstChild.nodeValue;
    ClearResults();
    HideDiv("searchresults");
}