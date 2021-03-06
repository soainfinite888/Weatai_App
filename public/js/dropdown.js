var locationlist={};
locationlist['北部']={'基隆市':{'基隆':1,'彭佳嶼':24},'臺北市':{'竹子湖':4,'鞍部':5,'臺北':31},'新北市':{'淡水':2,'板橋':3,'新店':30},'桃園市':{'拉拉山':27,'新屋':37},'新竹縣':{'新竹':6}};
locationlist['中部']={'臺中市':{'臺中':7,'梧棲':8,'武陵':28},'彰化縣':{'彰師大':32},'南投縣':{'日月潭':10,'玉山':12},'雲林縣':{'麥寮':36,'古坑':39},'嘉義市':{'嘉義':13},'嘉義縣':{'阿里山':11}};
locationlist['南部']={'臺南市':{'臺南':14,'永康':26},'高雄市':{'高雄':15},'屏東縣':{'恆春':16}};
locationlist['東部']={'宜蘭縣':{'宜蘭':17,'蘇澳':18},'花蓮縣':{'花蓮':19,'太魯閣':29},'臺東縣':{'成功':20,'臺東':21,'大武':22,'蘭嶼':23}};
locationlist['外島']={'澎湖縣':{'澎湖':9,'東吉島':25,'吉貝':33},'金門縣':{'金門':34},'連江縣':{'馬祖':35,'九宮碼頭':38}};
  
var keys1 = Object.keys(locationlist['北部']);
var keys2 = Object.keys(locationlist['中部']);
var keys3 = Object.keys(locationlist['南部']);
var keys4 = Object.keys(locationlist['東部']);
var keys5 = Object.keys(locationlist['外島']);
  
var nloc=[['基隆','彭佳嶼'],['竹子湖','鞍部','臺北'],['淡水','板橋','新店'],['拉拉山','新屋'],['新竹']];
var nlocid=[[1,24],[4,5,31],[2,3,30],[27,37],[6]];
var mloc=[['臺中','梧棲','武陵'],['彰師大'],['日月潭','玉山'],['麥寮','古坑'],['嘉義'],['阿里山']];
var mlocid=[[7,8,28],[32],[10,12],[36,39],[13],[11]];
var sloc=[['臺南','永康'],['高雄'],['恆春']];
var slocid=[[14,26],[15],[16]];
var eloc=[['宜蘭','蘇澳'],['花蓮','太魯閣'],['成功','臺東','大武','蘭嶼']];
var elocid=[[17,18],[19,29],[20,21,22,23]];
var oloc=[['澎湖','東吉島','吉貝'],['金門'],['馬祖','九宮碼頭']];
var olocid=[[9,25,33],[34],[35,38]];


function make_select2(){
  var fm = document.form1;
  // 清除舊的選項, 只保留第一個 "縣市　" 選項
  for ( var i= fm.select2.length-1 ; i > 0 ; i-- ){
    fm.select2.remove( i );
  }

  // 加上動態選單

  switch ( fm.select1.selectedIndex ){
    case 1:
      for ( var i= 0 ; i < keys1.length ; i++){
        var oOption = document.createElement("OPTION");
        oOption.text=keys1[i];
        oOption.value="nloc".concat(i.toString());
        fm.select2.add( oOption );
      }
      break;

    case 2:
      for ( var i= 0 ; i < keys2.length ; i++){
        var oOption = document.createElement("OPTION");
        oOption.text=keys2[i];
        oOption.value="mloc".concat(i.toString());
        fm.select2.add( oOption );
      }
      break;

    case 3:
      for ( var i= 0 ; i < keys3.length ; i++){
        var oOption = document.createElement("OPTION");
        oOption.text=keys3[i];
        oOption.value="sloc".concat(i.toString());
        fm.select2.add( oOption );
      }
      break;

    case 4:
      for ( var i= 0 ; i < keys4.length ; i++){
        var oOption = document.createElement("OPTION");
        oOption.text=keys4[i];
        oOption.value="eloc".concat(i.toString());
        fm.select2.add( oOption );
      }
      break;

    case 5:
      for ( var i= 0 ; i < keys5.length ; i++){
        var oOption = document.createElement("OPTION");
        oOption.text=keys5[i];
        oOption.value="oloc".concat(i.toString());
        fm.select2.add( oOption );
      }
      break;
  }
}

  function make_select3()
  {
    var fm = document.form1;
    // 清除舊的選項, 只保留第一個 "行政區" 選項
    for ( var i= fm.select3.length-1 ; i > 0 ; i-- )
    {
      fm.select3.remove( i );
    }

    // 加上動態選單
    switch ( fm.select2[ fm.select2.selectedIndex ].value )
    {
      case "nloc0":
        for ( var i= 0 ; i < nloc[0].length ; i++){
          var oOption = document.createElement("OPTION");
          oOption.text=nloc[0][i];
          oOption.value=nlocid[0][i];
          fm.select3.add( oOption );
        }
      break;

      case "nloc1":
        for ( var i= 0 ; i < nloc[1].length ; i++){
        var oOption = document.createElement("OPTION");
        oOption.text=nloc[1][i];
        oOption.value=nlocid[1][i];
        fm.select3.add( oOption );
        }
      break;

      case "nloc2":
      for ( var i= 0 ; i < nloc[2].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=nloc[2][i];
      oOption.value=nlocid[2][i];
      fm.select3.add( oOption );
      }
      break;

      case "nloc3":
      for ( var i= 0 ; i < nloc[3].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=nloc[3][i];
      oOption.value=nlocid[3][i];
      fm.select3.add( oOption );
      }
      break;

      case "nloc4":
      for ( var i= 0 ; i < nloc[4].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=nloc[4][i];
      oOption.value=nlocid[4][i];
      fm.select3.add( oOption );
      }
      break;

      case "mloc0":
      for ( var i= 0 ; i < mloc[0].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=mloc[0][i];
      oOption.value=mlocid[0][i];
      fm.select3.add( oOption );
      }
      break;

      case "mloc1":
      for ( var i= 0 ; i < mloc[1].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=mloc[1][i];
      oOption.value=mlocid[1][i];
      fm.select3.add( oOption );
      }
      break;

      case "mloc2":
      for ( var i= 0 ; i < mloc[2].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=mloc[2][i];
      oOption.value=mlocid[2][i];
      fm.select3.add( oOption );
      }
      break;

      case "mloc3":
      for ( var i= 0 ; i < mloc[3].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=mloc[3][i];
      oOption.value=mlocid[3][i];
      fm.select3.add( oOption );
      }
      break;

      case "mloc4":
      for ( var i= 0 ; i < mloc[4].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=mloc[4][i];
      oOption.value=mlocid[4][i];
      fm.select3.add( oOption );
      }
      break;

      case "mloc5":
      for ( var i= 0 ; i < mloc[5].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=mloc[5][i];
      oOption.value=mlocid[5][i];
      fm.select3.add( oOption );
      }
      break;

      case "sloc0":
      for ( var i= 0 ; i < sloc[0].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=sloc[0][i];
      oOption.value=slocid[0][i];
      fm.select3.add( oOption );
      }
      break;

      case "sloc1":
      for ( var i= 0 ; i < sloc[1].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=sloc[1][i];
      oOption.value=slocid[1][i];
      fm.select3.add( oOption );
      }
      break;

      case "sloc2":
      for ( var i= 0 ; i < sloc[2].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=sloc[2][i];
      oOption.value=slocid[2][i];
      fm.select3.add( oOption );
      }
      break;

      case "eloc0":
      for ( var i= 0 ; i < eloc[0].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=eloc[0][i];
      oOption.value=elocid[0][i];
      fm.select3.add( oOption );
      }
      break;

      case "eloc1":
      for ( var i= 0 ; i < eloc[1].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=eloc[1][i];
      oOption.value=elocid[1][i];
      fm.select3.add( oOption );
      }
      break;

      case "eloc2":
      for ( var i= 0 ; i < eloc[2].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=eloc[2][i];
      oOption.value=elocid[2][i];
      fm.select3.add( oOption );
      }
      break;

      case "oloc0":
      for ( var i= 0 ; i < oloc[0].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=oloc[0][i];
      oOption.value=olocid[0][i];
      fm.select3.add( oOption );
      }
      break;

      case "oloc1":
      for ( var i= 0 ; i < oloc[1].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=oloc[1][i];
      oOption.value=olocid[1][i];
      fm.select3.add( oOption );
      }
      break;

      case "oloc2":
      for ( var i= 0 ; i < oloc[2].length ; i++){
      var oOption = document.createElement("OPTION");
      oOption.text=oloc[2][i];
      oOption.value=olocid[2][i];
      fm.select3.add( oOption );
      }
      break;
    }
  }

  $('#weather-form-submit').click(function (event) {
    event.preventDefault();     
    if(history.pushState) {
      history.pushState(null, null, $('#myform').attr('action'));
    }
    return false;
  });

  //function myFunction() {
    //var temp = document.getElementById("station").value;
    //api_url='http://localhost:9292/api/v0.1/weather/1';
    //api_url='https://weataiapi.herokuapp.com/api/v0.1/weather/'.concat(temp.toString()).concat('?jsoncallback=?');
    //document.getElementById("demo").innerHTML = api_url;
    //api_url='http://weataiapi.herokuapp.com/api/v0.1/weather/1?jsonp=readJSON&?callback=?';
    //document.getElementById("demo").innerHTML = 'sata';
    //$.getJSON(api_url, function(data) {
     // document.getElementById("demo").innerHTML = data.township;
    //});
  //}