lat=41.874035;
lon=-87.639999;
col = "orange";
offset = 0;
url = "";
function getFilterData(val){
    
    map = new google.maps.Map(d3.select("#map").node(), {
          zoom: 10,
          center: new google.maps.LatLng(lat, lon),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });
        
    limit = 0;
    switch (val) {
        case 'time1':
            var year = [2015,2014,2013,2012,2011];
            var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
            
            yobj = "<div class='col-md-3' style='padding-top:5px;font-weight:bold;'>From: </div><div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='year' class='options select-year selectpicker' data-max-options='1' title='Year' style='float:left;margin-top:10px;'>";
            for(var i=0;i<year.length; i++){
                if(i==0){
                    temp = "<option value='"+year[i]+"' selected>"+year[i]+"</option>"; 
                }else{
                    temp = "<option value='"+year[i]+"'>"+year[i]+"</option>";
                }
                yobj = yobj + temp;
            }
            yobj = yobj+"</select></div>";
            
            mobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='month' class='select-month selectpicker' data-max-options='1' title='Month' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<month.length; i++){
                if(i==0){
                    temp = "<option value='"+(i+1)+"' selected>"+month[i]+"</option>";
                }else{
                    temp = "<option value='"+(i+1)+"'>"+month[i]+"</option>";
                }
                
                mobj = mobj + temp;
            }
            mobj = mobj+"</select></div>";
            
            dobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='day' class='select-day selectpicker' data-max-options='1' title='Day' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<day.length; i++){
                if(i==0){
                    temp = "<option value='"+checkDay(day[i])+"' selected>"+day[i]+"</option>"
                }else{
                    temp = "<option value='"+checkDay(day[i])+"'>"+day[i]+"</option>";
                }
                
                dobj = dobj + temp;
            }
            dobj = dobj+"</select></div><br>";
            var d1 = yobj+mobj+dobj;
            yobj = "<div class='col-md-3' style='padding-top:5px;font-weight:bold;'>To: </div><div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='year1' class='options select-year selectpicker' data-max-options='1' title='Year' style='float:left;margin-top:10px;'>";
            for(var i=0;i<year.length; i++){
                if(i==0){
                    temp = "<option value='"+year[i]+"' selected>"+year[i]+"</option>";
                }else{
                    temp = "<option value='"+year[i]+"'>"+year[i]+"</option>";
                }
                
                yobj = yobj + temp;
            }
            yobj = yobj+"</select></div>";
            
            mobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='month1' class='select-month selectpicker' data-max-options='1' title='Month' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<month.length; i++){
                if(i==0){
                    temp = "<option value='"+(i+1)+"' selected>"+month[i]+"</option>";
                }else{
                    temp = "<option value='"+(i+1)+"'>"+month[i]+"</option>";
                }
                
                mobj = mobj + temp;
            }
            mobj = mobj+"</select></div>";
            
            dobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='day1' class='select-day selectpicker' data-max-options='1' title='Day' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<day.length; i++){
                if(i==0){
                    temp = "<option value='"+checkDay(day[i])+"' selected>"+day[i]+"</option>";
                }else{
                    temp = "<option value='"+checkDay(day[i])+"'>"+day[i]+"</option>";
                }
                
                dobj = dobj + temp;
            }
            dobj = dobj+"</select></div>";
            var d2 = yobj+mobj+dobj;
            
            var list1 = '<select title="Select Crime Categories" multiple class="selectpicker" name="crimeTypes"><option value="ASSAULT" selected>ASSAULT</option><option value="CRIMINAL TRESPASS">CRIMINAL TRESPASS</option><option value="KIDNAPPING">KIDNAPPING</option><option value="LIQUOR LAW VIOLATION">LIQUOR LAW VIOLATION</option><option value="MOTOR VEHICAL THEFT">MOTOR VEHICAL THEFT</option><option value="PROSTITUTION">PROSTITUTION</option><option value="ROBBERY">ROBBERY</option><option value="SEX OFFENSE">SEX OFFENSE</option><option value="THEFT">THEFT</option></select><br>';
            var obj1 = "<ul class='nav collegend' style='margin-top:10px;margin-left:10px;'>";
            $.each(crimejson, function(key,value){
                var temp1 = "<li colid='"+value.Color+"'><div style='height:15px;width:15px;background-color:"+value.Color+";float:left;margin-right:10px;margin-top:2px'></div>"+value.Name+"</li>";
                obj1 = obj1 + temp1;
            });
            obj1 = obj1+"</ul>"
            
            var list2 = '<select title="Select Districts" multiple class="selectpicker" name="districtTypes"><option value="001" selected>Central</option><option value="002">Wentworth</option><option value="003">Grand Crossing</option><option value="004">South Chicago</option><option value="005">Calumet</option><option value="006">Gresham</option><option value="7">Englewood</option><option value="008">Chicago Lawn</option><option value="009">Deering</option><option value="010">Ogden</option><option value="011">Harrison</option><option value="012">Near West</option><option value="014">Shakespear</option><option value="015">Austin</option><option value="016">Jefferson Park</option><option value="017">Albany Park</option><option value="018">Near North</option><option value="019">Town Hall</option><option value="020">Foster</option><option value="022">Morgan Park</option><option value="024">Rogers Park</option><option value="025">Grand Central</option></select><br>';
            
            $('.filterData1').html(list1+list2+obj1);
            $('.filterData').html(d1+d2);
            $('.selectpicker').selectpicker();
            
            break;
        case 'time':
            var year = [2011,2012,2013,2014,2015];
            var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
            
            yobj = "<div class='col-md-3' style='padding-top:5px;font-weight:bold;'>From: </div><div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='year' class='options select-year selectpicker' data-max-options='1' title='Year' style='float:left;margin-top:10px;'>";
            for(var i=0;i<year.length; i++){
                temp = "<option value='"+year[i]+"'>"+year[i]+"</option>";
                yobj = yobj + temp;
            }
            yobj = yobj+"</select></div>";
            
            mobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='month' class='select-month selectpicker' data-max-options='1' title='Month' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<month.length; i++){
                temp = "<option value='"+(i+1)+"'>"+month[i]+"</option>";
                mobj = mobj + temp;
            }
            mobj = mobj+"</select></div>";
            
            dobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='day' class='select-day selectpicker' data-max-options='1' title='Day' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<day.length; i++){
                temp = "<option value='"+checkDay(day[i])+"'>"+day[i]+"</option>"
                dobj = dobj + temp;
            }
            dobj = dobj+"</select></div><br>";
            var d1 = yobj+mobj+dobj;
            yobj = "<div class='col-md-3' style='padding-top:5px;font-weight:bold;'>To: </div><div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='year1' class='options select-year selectpicker' data-max-options='1' title='Year' style='float:left;margin-top:10px;'>";
            for(var i=0;i<year.length; i++){
                temp = "<option value='"+year[i]+"'>"+year[i]+"</option>";
                yobj = yobj + temp;
            }
            yobj = yobj+"</select></div>";
            
            mobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='month1' class='select-month selectpicker' data-max-options='1' title='Month' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<month.length; i++){
                temp = "<option value='"+(i+1)+"'>"+month[i]+"</option>";
                mobj = mobj + temp;
            }
            mobj = mobj+"</select></div>";
            
            dobj = "<div class='col-md-3 smallsize' style='float:left;padding-left:0px;'><select name='day1' class='select-day selectpicker' data-max-options='1' title='Day' style='float:left;margin-top:10px;margin-left:10px;'>";
            for(var i=0;i<day.length; i++){
                temp = "<option value='"+checkDay(day[i])+"'>"+day[i]+"</option>"
                dobj = dobj + temp;
            }
            dobj = dobj+"</select></div>";
            var d2 = yobj+mobj+dobj;
            
            $('.filterData').html(d1+d2);
            $('.selectpicker').selectpicker();
            
            break;
        case 'crimeType':
            $('.filterData1').css({'display':'none'});
            var obj = "<select name='crimeTypes' class='selectpicker' multiple title='Select Crime Categories'>";
            var obj1 = "<ul class='nav collegend' style='margin-top:10px;margin-left:10px;'>";
            
            for(var i=0;i<crimeList.length; i++){
                if(i==0){
                    temp = "<option value='"+crimeList[i]+"' selected>"+crimeList[i]+"</option>";
                }else{
                    temp = "<option value='"+crimeList[i]+"'>"+crimeList[i]+"</option>";    
                }
                
                obj = obj + temp;
            }
            $.each(crimejson, function(key,value){
                var temp1 = "<li colid='"+value.Color+"'><div style='height:15px;width:15px;background-color:"+value.Color+";float:left;margin-right:10px;margin-top:2px'></div>"+value.Name+"</li>";
                obj1 = obj1 + temp1;
            });
            obj = obj+"</select><br>";
            obj1 = obj1+"</ul>"
            $('.filterData').html(obj+obj1);
            $('.selectpicker').selectpicker();
            
            break;
        case 'community':
            $('.filterData1').css({'display':'none'});
            var obj = "<select name='communities' class='selectpicker' multiple title='Select Communities'>";
            d3.json('json/community.json',
                function (data, textStatus, jqXHR) {
                    $.each(data, function(key,value){
                        if(key==0){
                            var temp = "<option value='"+value.Community_id+"' selected>"+value.Name+"</option>";    
                        }else{
                            var temp = "<option value='"+value.Community_id+"'>"+value.Name+"</option>";
                        }
                        
                        obj = obj + temp;
                    });
                    obj = obj+"</select><br>";
                    $('.filterData').html(obj);
                    $('.selectpicker').selectpicker();
                }
            );
            
            break;
        case 'district':
            $('.filterData1').css({'display':'none'});
            var obj = "<select name='districts' class='selectpicker' multiple title='Select Districts'>";
            var obj1 = "<ul class='nav collegend' style='margin-top:10px;margin-left:10px;'>";
            d3.json('json/districts.json',
                function (data, textStatus, jqXHR) {
                    $.each(data, function(key,value){
                        if(key==0){
                            var temp = "<option value='"+value.District_id+"' selected>"+value.Name+"</option>";
                        }else{
                            var temp = "<option value='"+value.District_id+"'>"+value.Name+"</option>";
                        }
                        
                        var temp1 = "<li colid='"+value.Color+"'><div style='height:15px;width:15px;background-color:"+value.Color+";float:left;margin-right:10px;margin-top:2px'></div>"+value.Name+"</li>";
                        obj = obj + temp;
                        obj1 = obj1 + temp1;
                    });
                    obj = obj+"</select><br>";
                    obj1 = obj1+"</ul>";
                    
                    $('.filterData').html(obj+obj1);
                    $('.selectpicker').selectpicker();
                }
            );
            
            break;
        case 'crimeLocationType':
            $('.filterData1').css({'display':'none'});
            var list = ["SCHOOL","APARTMENT,CHURCH/SYNAGOGUE/PLACE OF WORSHIP","CONSTRUCTION SITE","DEPARTMENT STORE","HOSPITAL BUILDING/GROUNDS","RESIDENCE","STREET","TAXICAB"];
            var obj = "<select name='crimeLocationTypes' class='selectpicker' multiple>";
            var obj1 = "<ul class='nav collegend' style='margin-top:10px;margin-left:10px;'>";
            
            for(var i=0;i<list.length; i++){
                if(i==0){
                    temp = "<option value='"+list[i]+"' selected>"+list[i]+"</option>";
                }else{
                    temp = "<option value='"+list[i]+"'>"+list[i]+"</option>";
                }
                obj = obj + temp;
            }
            $.each(crimeLocationTypeJson, function(key,value){
                var temp1 = "<li colid='"+value.Color+"'><div style='height:15px;width:15px;background-color:"+value.Color+";float:left;margin-right:10px;margin-top:2px'></div>"+value.Name+"</li>";
                obj1 = obj1 + temp1;
            });
            obj = obj+"</select><br>";
            obj1 = obj1+"</ul>"
            
            $('.filterData').html(obj+obj1);
            $('.selectpicker').selectpicker();
            break;
        case 'arrest':
            $('.filterData1').css({'display':'none'});
            var obj = "<select name='arrest' class='selectpicker'><option value='true'>Yes</option><option value='false'>No</option></select>"
            $('.filterData').html(obj);
            $('.selectpicker').selectpicker();
            break;
        case 'domestic':
            $('.filterData1').css({'display':'none'});
            var obj = "<select name='domestic' class='selectpicker'><option value='true'>Yes</option><option value='false'>No</option></select>"
            $('.filterData').html(obj);
            $('.selectpicker').selectpicker();
            break;
        
        default:
            // code
    }
}

function checkDay(val){
    if(val<10){
        return '0'+val;
    }else{
        return val;
    }
}
function checkDistrict(val){
    if(val<10){
        return '00'+val;
    }else if(val>=10){
        return '0'+val;
    }
}

$(document).ready(function(){
    
    $('.contact').on('click', function(){
        $('#contact').modal('show');    
    });
    $('.disclaimer').on('click', function(){
        $('#disclaimer').modal('show');    
    });
    
    $('.selectpicker').selectpicker();
    $('.filter ul li a').on('click', function(){
        $('.filter-val').html($(this)[0].innerHTML);
        $('.plot').css({'display':'block'});
    });
    
    $('body').on('mouseover', '.collegend li', function(){
        $(this).css({'transform':'scale(1.1)'});
        $('circle').css({'display':'none'});
        $("circle[fill='"+$(this).attr('colid')+"'").css({'display':'block'});
    });
    $('body').on('mouseout', '.collegend li', function(){
        $(this).css({'transform':'scale(1)'});
        $('circle').css({'display':'block'});
    });
    
    $('.plot').on('click', function(){
        $('.loading').css({'display':'block'});
        var type = $('.filter-val')[0].innerHTML;
        // Create the Google Map…
        map = new google.maps.Map(d3.select("#map").node(), {
          zoom: 10,
          center: new google.maps.LatLng(lat, lon),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });
        
        switch(type){
            case 'Time1':
                var year = $("select[name='year']").val();
                var month = $("select[name='month']").val();
                var day = $("select[name='day']").val();
                
                var year1 = $("select[name='year1']").val();
                var month1 = $("select[name='month1']").val();
                var day1 = $("select[name='day1']").val();
                
                if(year==null || year1==null){
                    alert("Please select years");
                    return false;
                }
                
                month = checkDay(month);
                var date1 = year+'-'+month+'-'+day+'T00:00:00';
                var date2 = year1+'-'+month1+'-'+day1+'T23:59:59';
                
                var crimeTypes = $("select[name='crimeTypes']").val();
                var districtTypes = $("select[name='districtTypes']").val();
                
                var tempobj = [];
                var tempobj1 = [];
                $.each(crimeTypes, function(key, value){
                    tempobj[key]='"'+value+'"';
                });
                
                $.each(districtTypes, function(key, value){
                    tempobj1[key]='"'+value+'"';
                });
                
                for(var i=0; i<crimeTypes.length; i++){
                    var col = '';
                    $.each(crimejson, function(key,value){
                        if(value.Name==crimeTypes[i]){
                            col = value.Color;
                        }
                    });
                    if(month==null || day==null){
                        var date1 = year+'0101T00:00:00';
                        var date2 = year1+'1231T23:59:59';
                        var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=district IN("+tempobj1+") AND primary_type IN("+tempobj[i]+") AND date BETWEEN '"+date1+"' AND '"+date2+"'";
                    }else{
                        var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=district IN("+tempobj1+") AND primary_type IN("+tempobj[i]+") AND date BETWEEN '"+date1+"' AND '"+date2+"'";
                    }
                    
                    plotCrime(url1,col);    
                }
                
                
                break;
            case 'Time':
                var year = $("select[name='year']").val();
                var month = $("select[name='month']").val();
                var day = $("select[name='day']").val();
                
                var year1 = $("select[name='year1']").val();
                var month1 = $("select[name='month1']").val();
                var day1 = $("select[name='day1']").val();
                
                if(year==null || year1==null){
                    alert("Please select years");
                    return false;
                }
                
                month = checkDay(month);
                var date1 = year+'-'+month+'-'+day+'T00:00:00';
                var date2 = year1+'-'+month1+'-'+day1+'T23:59:59';
                
                if(month==null || day==null){
                    var date1 = year+'0101T00:00:00';
                    var date2 = year1+'1231T23:59:59';
                    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+date1+"' AND '"+date2+"'";
                }else{
                    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+date1+"' AND '"+date2+"'";
                }
                
                plotCrime(url1);
                
                break;
            case 'Crime Type':
                var data = $("select[name='crimeTypes']").val();
                
                for(var i=0; i<data.length; i++){
                    tempval = data[i];
                    var col = '';
                    $.each(crimejson, function(key,value){
                        if(value.Name==data[i]){
                            col = value.Color;
                        }
                    });
                    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?primary_type="+tempval;
                    plotCrime(url1, col);
                }
                break;
            case 'Community':
                var data = $("select[name='communities']").val();
                
                for(var i=0; i<data.length; i++){
                    tempval = data[i];
                    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?community_area="+tempval;
                    plotCrime(url1);
                }
                break;
            case 'District':
                var data = $("select[name='districts']").val();
                
                if(data.length==1){
                    d3.json("json/districts.json", function(data) {
                        console.log(data[0]);
                        $.each(data, function(key,value){
                            if(value.Name==data[0].Name){
                                lat = value.latitude;
                                lon = value.longitude; 
                                // Create the Google Map…
                                map = new google.maps.Map(d3.select("#map").node(), {
                                  zoom: 12,
                                  center: new google.maps.LatLng(lat, lon),
                                  mapTypeId: google.maps.MapTypeId.TERRAIN
                                });
                            }
                        });
                    });
                }else{
                    // Create the Google Map…
                    map = new google.maps.Map(d3.select("#map").node(), {
                      zoom: 10,
                      center: new google.maps.LatLng(lat, lon),
                      mapTypeId: google.maps.MapTypeId.TERRAIN
                    });
                }
                
                
                for(var i=0; i<data.length; i++){
                    tempval = checkDistrict(data[i]);
                    var col = '';
                    $.each(districtjson, function(key,value){
                            if(value.District_id==data[i]){
                                col = value.Color;
                            }
                        });
                    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?district="+tempval;
                    plotCrime(url1, col);
                }
                
                break;
            case 'Crime Location Type':
                var data = $("select[name='crimeLocationTypes']").val();
                var col = '';
                for(var i=0; i<data.length; i++){
                    tempval = data[i];
                    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?location_description="+tempval;
                    
                    $.each(crimeLocationTypeJson, function(key,value){
                        if(data[i]==value.Name){
                            col = value.Color;
                        }
                    });
                    plotCrime(url1, col);
                }

                break;
            case 'Arrest':
                var data = $("select[name='arrest']").val();
                var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?arrest="+data;
                plotCrime(url1);

                break;
            case 'Domestic':
                var data = $("select[name='domestic']").val();
                var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?domestic="+data;
                plotCrime(url1);

                break;
            
            default:
                // code
        }
        
    });
    $('.play').on('click', function(){
        $('.loading').css({'display':'block'});
        $('.stop').css({'display':'block'});
        $('.play').css({'display':'none'});
        
        // Create the Google Map…
        map = new google.maps.Map(d3.select("#map").node(), {
          zoom: 10,
          center: new google.maps.LatLng(lat, lon),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });
        
        myAni = setInterval(function(){crimePlotAnimate(2015);}, 200);
    });
    $('.stop').on('click', function(){
        clearInterval(myAni);
        $('.loading').css({'display':'none'});
        $('.play').css({'display':'block'});
        $('.stop').css({'display':'none'});
    });
    
    
    $('.cplot').on('click', function(){
        $('.loading').css({'display':'block'});
        var chartyears = $("select[name='chartyears']").val();
        var xaxisvalue = $("select[name='xaxisvalue']").val();
        var yaxisvalue = $("select[name='yaxisvalue']").val();
        var type = xaxisvalue+','+yaxisvalue;
        
        switch(type){
            case '1,1':
                $('#chart').html('');
                var tempobj = [{}];
                for(var i=0; i<chartyears.length; i++){
                    $.each(yearlyCrimeData, function(key, value){
                        if(chartyears[i]==value.name){
                            tempobj[i] = value;
                        }
                    });
                }
                console.log(tempobj);
                histogram(tempobj);

                break;
            case '2,1':
                $('#chart').html('');
                var ctypeCount = {};
                var i=0;
                var url = ["https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0"];
                for(var i=0;i<chartyears.length; i++){
                    url[i] = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+chartyears[i];
                }
                
                d3.json(url[0], function(data){
                    $.each(data, function(key,value){
                        if(ctypeCount[value.primary_type] == undefined){
                            ctypeCount[value.primary_type] = 1;
                        }else{
                            ctypeCount[value.primary_type] = ctypeCount[value.primary_type]+1;
                        }
                    });
                    d3.json(url[1], function(data){
                        $.each(data, function(key,value){
                            if(ctypeCount[value.primary_type] == undefined){
                                ctypeCount[value.primary_type] = 1;
                            }else{
                                ctypeCount[value.primary_type] = ctypeCount[value.primary_type]+1;
                            }
                        });
                        d3.json(url[2], function(data){
                            $.each(data, function(key,value){
                                if(ctypeCount[value.primary_type] == undefined){
                                    ctypeCount[value.primary_type] = 1;
                                }else{
                                    ctypeCount[value.primary_type] = ctypeCount[value.primary_type]+1;
                                }
                            });
                            d3.json(url[3], function(data){
                                $.each(data, function(key,value){
                                    if(ctypeCount[value.primary_type] == undefined){
                                        ctypeCount[value.primary_type] = 1;
                                    }else{
                                        ctypeCount[value.primary_type] = ctypeCount[value.primary_type]+1;
                                    }
                                });
                                d3.json(url[4], function(data){
                                    $.each(data, function(key,value){
                                        if(ctypeCount[value.primary_type] == undefined){
                                            ctypeCount[value.primary_type] = 1;
                                        }else{
                                            ctypeCount[value.primary_type] = ctypeCount[value.primary_type]+1;
                                        }
                                    });
                                    
                                    var jsondata = [];
                                    for(var i=0; i<crimeList.length; i++){
                                        var flag = true;
                                        $.each(ctypeCount, function(key, value){
                                            if(crimeList[i]==key){
                                                var temp ={};
                                                temp["name"] = key;
                                                temp["value"] = ctypeCount[key];
                                                jsondata[i] = temp;
                                                flag=false;
                                            }
                                        });
                                        if(flag){
                                            var temp ={};
                                            temp["name"] = crimeList[i];
                                            temp["value"] = 0;
                                            jsondata[i] = temp;
                                        }
                                    }
                                    histogram(jsondata);
                                });
                            });
                        });
                    });
                });
                
                break;
            case '3,1':
                $('#chart').html('');
                var ctypeCount = {};
                var i=0;
                var url = ["https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0"];
                for(var i=0;i<chartyears.length; i++){
                    url[i] = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+chartyears[i];
                }
                
                d3.json(url[0], function(data){
                    $.each(data, function(key,value){
                        if(ctypeCount[value.community_area] == undefined){
                            ctypeCount[value.community_area] = 1;
                        }else{
                            ctypeCount[value.community_area] = ctypeCount[value.community_area]+1;
                        }
                    });
                    d3.json(url[1], function(data){
                        $.each(data, function(key,value){
                            if(ctypeCount[value.community_area] == undefined){
                                ctypeCount[value.community_area] = 1;
                            }else{
                                ctypeCount[value.community_area] = ctypeCount[value.community_area]+1;
                            }
                        });
                        d3.json(url[2], function(data){
                            $.each(data, function(key,value){
                                if(ctypeCount[value.community_area] == undefined){
                                    ctypeCount[value.community_area] = 1;
                                }else{
                                    ctypeCount[value.community_area] = ctypeCount[value.community_area]+1;
                                }
                            });
                            d3.json(url[3], function(data){
                                $.each(data, function(key,value){
                                    if(ctypeCount[value.community_area] == undefined){
                                        ctypeCount[value.community_area] = 1;
                                    }else{
                                        ctypeCount[value.community_area] = ctypeCount[value.community_area]+1;
                                    }
                                });
                                d3.json(url[4], function(data){
                                    $.each(data, function(key,value){
                                        if(ctypeCount[value.community_area] == undefined){
                                            ctypeCount[value.community_area] = 1;
                                        }else{
                                            ctypeCount[value.community_area] = ctypeCount[value.community_area]+1;
                                        }
                                    });
                                    
                                    var jsondata = [];
                                    console.log(communitiesjson);
                                    console.log(ctypeCount);
                                    var i=0;
                                    $.each(ctypeCount, function(key1, value1){
                                        $.each(communitiesjson, function(key, value){
                                            //console.log("key1="+key1+"::value1="+value1+"::key="+key+"::value="+value.Community_id);
                                            if(value.Community_id==key1){
                                                var temp ={};
                                                temp["name"] = value.Name;
                                                temp["value"] = ctypeCount[key1];
                                                jsondata[i] = temp;
                                                i = i+1;
                                            }
                                        });
                                    });
                                    histogram(jsondata);
                                    
                                });
                            });
                        });
                    });
                });
                
                break;
            case '4,1':
                $('#chart').html('');
                var ctypeCount = {};
                var i=0;
                var url = ["https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0"];
                for(var i=0;i<chartyears.length; i++){
                    url[i] = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+chartyears[i];
                }
                
                d3.json(url[0], function(data){
                    $.each(data, function(key,value){
                        if(ctypeCount[value.district] == undefined){
                            ctypeCount[value.district] = 1;
                        }else{
                            ctypeCount[value.district] = ctypeCount[value.district]+1;
                        }
                    });
                    d3.json(url[1], function(data){
                        $.each(data, function(key,value){
                            if(ctypeCount[value.district] == undefined){
                                ctypeCount[value.district] = 1;
                            }else{
                                ctypeCount[value.district] = ctypeCount[value.district]+1;
                            }
                        });
                        d3.json(url[2], function(data){
                            $.each(data, function(key,value){
                                if(ctypeCount[value.district] == undefined){
                                    ctypeCount[value.district] = 1;
                                }else{
                                    ctypeCount[value.district] = ctypeCount[value.district]+1;
                                }
                            });
                            d3.json(url[3], function(data){
                                $.each(data, function(key,value){
                                    if(ctypeCount[value.district] == undefined){
                                        ctypeCount[value.district] = 1;
                                    }else{
                                        ctypeCount[value.district] = ctypeCount[value.district]+1;
                                    }
                                });
                                d3.json(url[4], function(data){
                                    $.each(data, function(key,value){
                                        if(ctypeCount[value.district] == undefined){
                                            ctypeCount[value.district] = 1;
                                        }else{
                                            ctypeCount[value.district] = ctypeCount[value.district]+1;
                                        }
                                    });
                                    
                                    var jsondata = [];
                                    var i=0;
                                    $.each(ctypeCount, function(key1, value1){
                                        $.each(districtjson, function(key, value){
                                            if(checkDistrict(value.District_id)==key1){
                                                var temp ={};
                                                temp["name"] = value.Name;
                                                temp["value"] = ctypeCount[key1];
                                                jsondata[i] = temp;
                                                i = i+1;
                                            }
                                        });
                                    });

                                    histogram(jsondata);

                                });
                            });
                        });
                    });
                });
                
                break;
            case '5,1':
                $('#chart').html('');
                var ctypeCount = {};
                var i=0;
                var url = ["https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0"];
                for(var i=0;i<chartyears.length; i++){
                    url[i] = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+chartyears[i];
                }
                
                d3.json(url[0], function(data){
                    $.each(data, function(key,value){
                        if(ctypeCount[value.location_description] == undefined){
                            ctypeCount[value.location_description] = 1;
                        }else{
                            ctypeCount[value.location_description] = ctypeCount[value.location_description]+1;
                        }
                    });
                    d3.json(url[1], function(data){
                        $.each(data, function(key,value){
                            if(ctypeCount[value.location_description] == undefined){
                                ctypeCount[value.location_description] = 1;
                            }else{
                                ctypeCount[value.location_description] = ctypeCount[value.location_description]+1;
                            }
                        });
                        d3.json(url[2], function(data){
                            $.each(data, function(key,value){
                                if(ctypeCount[value.location_description] == undefined){
                                    ctypeCount[value.location_description] = 1;
                                }else{
                                    ctypeCount[value.location_description] = ctypeCount[value.location_description]+1;
                                }
                            });
                            d3.json(url[3], function(data){
                                $.each(data, function(key,value){
                                    if(ctypeCount[value.location_description] == undefined){
                                        ctypeCount[value.location_description] = 1;
                                    }else{
                                        ctypeCount[value.location_description] = ctypeCount[value.location_description]+1;
                                    }
                                });
                                d3.json(url[4], function(data){
                                    $.each(data, function(key,value){
                                        if(ctypeCount[value.location_description] == undefined){
                                            ctypeCount[value.location_description] = 1;
                                        }else{
                                            ctypeCount[value.location_description] = ctypeCount[value.location_description]+1;
                                        }
                                    });
                                    
                                    var jsondata = [];
                                    var i=0;
                                    $.each(ctypeCount, function(key1, value1){
                                        $.each(crimeLocationTypeJson, function(key, value){
                                            if(value.Name==key1){
                                                var temp ={};
                                                temp["name"] = value.Name;
                                                temp["value"] = ctypeCount[key1];
                                                jsondata[i] = temp;
                                                i = i+1;
                                            }
                                        });
                                    });

                                    histogram(jsondata);

                                });
                            });
                        });
                    });
                });
                
                break;
            case '6,1':
                $('#chart').html('');
                var ctypeCount = {};
                var i=0;
                var url = ["https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0"];
                for(var i=0;i<chartyears.length; i++){
                    url[i] = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+chartyears[i];
                }
                
                d3.json(url[0], function(data){
                    $.each(data, function(key,value){
                        if(ctypeCount[value.arrest] == undefined){
                            ctypeCount[value.arrest] = 1;
                        }else{
                            ctypeCount[value.arrest] = ctypeCount[value.arrest]+1;
                        }
                    });
                    d3.json(url[1], function(data){
                        $.each(data, function(key,value){
                            if(ctypeCount[value.arrest] == undefined){
                                ctypeCount[value.arrest] = 1;
                            }else{
                                ctypeCount[value.arrest] = ctypeCount[value.arrest]+1;
                            }
                        });
                        d3.json(url[2], function(data){
                            $.each(data, function(key,value){
                                if(ctypeCount[value.arrest] == undefined){
                                    ctypeCount[value.arrest] = 1;
                                }else{
                                    ctypeCount[value.arrest] = ctypeCount[value.arrest]+1;
                                }
                            });
                            d3.json(url[3], function(data){
                                $.each(data, function(key,value){
                                    if(ctypeCount[value.arrest] == undefined){
                                        ctypeCount[value.arrest] = 1;
                                    }else{
                                        ctypeCount[value.arrest] = ctypeCount[value.arrest]+1;
                                    }
                                });
                                d3.json(url[4], function(data){
                                    $.each(data, function(key,value){
                                        if(ctypeCount[value.arrest] == undefined){
                                            ctypeCount[value.arrest] = 1;
                                        }else{
                                            ctypeCount[value.arrest] = ctypeCount[value.arrest]+1;
                                        }
                                    });
                                    
                                    var jsondata = [];
                                    var i=0;
                                    console.log(ctypeCount);
                                    $.each(ctypeCount, function(key1, value1){
                                        if(key1=="true"){
                                            var temp ={};
                                            temp["name"] = "True";
                                            temp["value"] = ctypeCount[key1];
                                            jsondata[i] = temp;
                                            i = i+1;
                                        }else if(key1=="false"){
                                            var temp ={};
                                            temp["name"] = "False";
                                            temp["value"] = ctypeCount[key1];
                                            jsondata[i] = temp;
                                            i = i+1;
                                        }
                                    });

                                    histogram(jsondata);

                                });
                            });
                        });
                    });
                });
                
                break;
            case '7,1':
                $('#chart').html('');
                var ctypeCount = {};
                var i=0;
                var url = ["https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0",
                           "https://data.cityofchicago.org/resource/6zsd-86xi.json?year=0"];
                for(var i=0;i<chartyears.length; i++){
                    url[i] = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+chartyears[i];
                }
                
                d3.json(url[0], function(data){
                    $.each(data, function(key,value){
                        if(ctypeCount[value.domestic] == undefined){
                            ctypeCount[value.domestic] = 1;
                        }else{
                            ctypeCount[value.domestic] = ctypeCount[value.domestic]+1;
                        }
                    });
                    d3.json(url[1], function(data){
                        $.each(data, function(key,value){
                            if(ctypeCount[value.domestic] == undefined){
                                ctypeCount[value.domestic] = 1;
                            }else{
                                ctypeCount[value.domestic] = ctypeCount[value.domestic]+1;
                            }
                        });
                        d3.json(url[2], function(data){
                            $.each(data, function(key,value){
                                if(ctypeCount[value.domestic] == undefined){
                                    ctypeCount[value.domestic] = 1;
                                }else{
                                    ctypeCount[value.domestic] = ctypeCount[value.domestic]+1;
                                }
                            });
                            d3.json(url[3], function(data){
                                $.each(data, function(key,value){
                                    if(ctypeCount[value.domestic] == undefined){
                                        ctypeCount[value.domestic] = 1;
                                    }else{
                                        ctypeCount[value.domestic] = ctypeCount[value.domestic]+1;
                                    }
                                });
                                d3.json(url[4], function(data){
                                    $.each(data, function(key,value){
                                        if(ctypeCount[value.domestic] == undefined){
                                            ctypeCount[value.domestic] = 1;
                                        }else{
                                            ctypeCount[value.domestic] = ctypeCount[value.domestic]+1;
                                        }
                                    });
                                    
                                    var jsondata = [];
                                    var i=0;
                                    console.log(ctypeCount);
                                    $.each(ctypeCount, function(key1, value1){
                                        if(key1=="true"){
                                            var temp ={};
                                            temp["name"] = "True";
                                            temp["value"] = ctypeCount[key1];
                                            jsondata[i] = temp;
                                            i = i+1;
                                        }else if(key1=="false"){
                                            var temp ={};
                                            temp["name"] = "False";
                                            temp["value"] = ctypeCount[key1];
                                            jsondata[i] = temp;
                                            i = i+1;
                                        }
                                    });

                                    histogram(jsondata);
                                });
                            });
                        });
                    });
                });
                
                break;
                
            default:
                // code
        }
        
    });
    
    $('.cplot1').on('click', function(){
        $('.loading').css({'display':'block'});
        var op21 = $("select[name='op21']").val();  
        var op22 = $("select[name='op22']").val();
        
        $('#chart').html('');
        var jsondata = [];
        var i=0;
        
        var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-01-01T00:00:00' AND '"+op21+"-01-28T00:00:00'";
        var url2 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-02-01T00:00:00' AND '"+op21+"-02-28T00:00:00'";
        var url3 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-03-01T00:00:00' AND '"+op21+"-03-28T00:00:00'";
        var url4 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-04-01T00:00:00' AND '"+op21+"-04-28T00:00:00'";
        var url5 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-05-01T00:00:00' AND '"+op21+"-05-28T00:00:00'";
        var url6 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-06-01T00:00:00' AND '"+op21+"-06-28T00:00:00'";
        var url7 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-07-01T00:00:00' AND '"+op21+"-07-28T00:00:00'";
        var url8 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-08-01T00:00:00' AND '"+op21+"-08-28T00:00:00'";
        var url9 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-09-01T00:00:00' AND '"+op21+"-09-28T00:00:00'";
        var url10 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-10-01T00:00:00' AND '"+op21+"-10-28T00:00:00'";
        var url11 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-11-01T00:00:00' AND '"+op21+"-11-28T00:00:00'";
        var url12 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date BETWEEN '"+op21+"-12-01T00:00:00' AND '"+op21+"-12-28T00:00:00'";
        
        jsoni = 0;
        d3.json(url1, function(data){
            getFormatedData(jsondata, data, op21, op22, '01');
            d3.json(url2, function(data){
                getFormatedData(jsondata, data, op21, op22, '02');
                d3.json(url3, function(data){
                    getFormatedData(jsondata, data, op21, op22, '03');
                    d3.json(url4, function(data){
                        getFormatedData(jsondata, data, op21, op22, '04');
                        d3.json(url5, function(data){
                            getFormatedData(jsondata, data, op21, op22, '05');
                            d3.json(url6, function(data){
                                getFormatedData(jsondata, data, op21, op22, '06');
                                d3.json(url7, function(data){
                                    getFormatedData(jsondata, data, op21, op22, '07');
                                    d3.json(url8, function(data){
                                        getFormatedData(jsondata, data, op21, op22, '08');
                                        d3.json(url9, function(data){
                                            getFormatedData(jsondata, data, op21, op22, '09');
                                            d3.json(url10, function(data){
                                                getFormatedData(jsondata, data, op21, op22, '10');
                                                d3.json(url11, function(data){
                                                    getFormatedData(jsondata, data, op21, op22, '11');
                                                    d3.json(url12, function(data){
                                                        getFormatedData(jsondata, data, op21, op22, '12');
                                                        linechart(jsondata);

                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

function getFormatedData(jsondata,data,op21,op22,month){
    var ctypeCount = {};
    $.each(data, function(key,value){
        if(ctypeCount[value.location_description] == undefined){
            ctypeCount[value.location_description] = 1;
        }else{
            ctypeCount[value.location_description] = ctypeCount[value.location_description]+1;
        }
    });
    var temp = {};
    for(var i=0; i<op22.length; i++){
        var flag = true;
        $.each(ctypeCount, function(key,value){
            if(op22[i] == key){
                temp[op22[i]] = value;
                flag = false;
            }
        });
        if(flag){
            temp[op22[i]] = 0;
        }
        temp['date'] = op21+month+'01';
    }
    jsondata[jsoni] = temp;
    jsoni = jsoni+1;
}

function crimePlotAnimate(y){
    var url1 = "https://data.cityofchicago.org/resource/6zsd-86xi.json?year="+y+"&$limit=10&$offset="+offset;
    offset=offset+10;
    plotCrime(url1);
}

function plotCrime(url, col){
    $('.loading').css({'display':'block'});
    d3.json(url, function(data) {
            
      var overlay = new google.maps.OverlayView();
    
      // Add the container when the overlay is added to the map.
      overlay.onAdd = function() {
        var layer = d3.select(this.getPanes().overlayLayer).append("div")
            .attr("class", "stations");
    
        // Draw each marker as a separate SVG element.
        // We could use a single SVG, but what size would it have?
        overlay.draw = function() {
          var projection = this.getProjection(),
              padding = 10;
    
          var marker = layer.selectAll("svg")
              .data(d3.entries(data))
              .each(transform) // update existing markers
            .enter().append("svg:svg")
              .each(transform)
              .attr("class", "marker");
    
          // Add a circle.
          if(col==null){
              col = "orange";
          }
          marker.append("svg:circle")
              .attr("r", 2.5)
              .attr("cx", padding)
              .attr("cy", padding)
              .attr("fill", col);
        /*
         // Add a label.
          marker.append("svg:text")
              .attr("x", padding + 7)
              .attr("y", padding)
              .attr("dy", ".31em")
              .text(function(d) { return d.key; });
        */
        
          function transform(d) {
            d = new google.maps.LatLng(d.value["latitude"], d.value["longitude"]);
            d = projection.fromLatLngToDivPixel(d);
            return d3.select(this)
                .style("left", (d.x - padding) + "px")
                .style("top", (d.y - padding) + "px");
          }
        };
      };
    // Bind our overlay to the map…
      overlay.setMap(map);
      $('.loading').css({'display':'none'});
  });

}

function histogram(jsondata) {
    $('.loading').css({'display':'block'});
    var m = [20, 10, 10, 120],
    w = $('#chart').width() - m[1] - m[3],
    h = $('#chart').height() - m[0] - m[2];

    var format = d3.format(",.0f");
    
    var x = d3.scale.linear().range([0, w]),
        y = d3.scale.ordinal().rangeRoundBands([0, h], .01);
    
    var xAxis = d3.svg.axis().scale(x).orient("top").tickSize(-h),
        yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
    
    var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-10, 0])
          .html(function(d) {
            //return "<div style='widht:100px;height:50px;background-color:#777;'><strong>"+d.name+"</strong><br><strong>"+d.value+"</strong></div>";
          })
    
    var svg = d3.select("#chart").append("svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .append("g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
    
    svg.call(tip);
    
      data = jsondata;
      // Parse numbers, and sort by value.
      data.forEach(function(d) { d.value = +d.value; });
      data.sort(function(a, b) { return b.value - a.value; });
    
      // Set the scale domain.
      x.domain([0, d3.max(data, function(d) { return d.value; })]);
      y.domain(data.map(function(d) { return d.name; }));
    
      var bar = svg.selectAll("g.bar")
          .data(data)
          .enter().append("g")
          .attr("class", "bar")
          .attr("transform", function(d) { return "translate(0," + y(d.name) + ")"; })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide);
    
      bar.append("rect")
          .attr("width", function(d) { return x(d.value); })
          .attr("height", y.rangeBand());
    
      bar.append("text")
          .attr("class", "value")
          .attr("x", function(d) { return x(d.value); })
          .attr("y", y.rangeBand() / 2)
          .attr("dx", -3)
          .attr("dy", ".35em")
          .attr("text-anchor", "end")
          .text(function(d) { return format(d.value); });
    
      svg.append("g")
          .attr("class", "x axis")
          .call(xAxis);
    
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    $('.loading').css({'display':'none'});
}

function linechart(jsondata){
    $('.loading').css({'display':'block'});
    $('#chart').html('');
    var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = $('#chart').width() - margin.left - margin.right,
    height = $('#chart').height() - margin.top - margin.bottom;

    var parseDate = d3.time.format("%Y%m%d").parse;
    
    var x = d3.time.scale()
        .range([0, width]);
    
    var y = d3.scale.linear()
        .range([height, 0]);
    
    var color = d3.scale.category10();
    
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    
    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.crimecount); });
    
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var data = jsondata;
    
      color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
    
      data.forEach(function(d) {
        d.date = parseDate(d.date);
      });
    
      var cities = color.domain().map(function(name) {
        return {
          name: name,
          values: data.map(function(d) {
            return {date: d.date, crimecount: +d[name]};
          })
        };
      });
    
      x.domain(d3.extent(data, function(d) { return d.date; }));
    
      y.domain([
        d3.min(cities, function(c) { return d3.min(c.values, function(v) { return v.crimecount; }); }),
        d3.max(cities, function(c) { return d3.max(c.values, function(v) { return v.crimecount; }); })
      ]);
    
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
         .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");
    
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Crime Count");
    
      var city = svg.selectAll(".city")
          .data(cities)
          .enter().append("g")
          .attr("class", "city");
    
      city.append("path")
          .attr("class", "line")
          .attr("d", function(d) { return line(d.values); })
          .style("stroke", function(d) { return color(d.name); });
    
      city.append("text")
          .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
          //.attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.crimecount) + ")"; })
          .attr("transform", function(d) { 
              return "translate(" + x(d.value.date) + "," + y(d.value.crimecount) + ")"; 
              
          })
          .attr("x", 3)
          .attr("dy", ".35em")
          .text(function(d) { return d.name; });
          
        $('.loading').css({'display':'none'});
}

var crimeList = ['ASSAULT','CRIMINAL TRESPASS','KIDNAPPING','LIQUOR LAW VIOLATION','MOTOR VEHICAL THEFT','PROSTITUTION','ROBBERY','SEX OFFENSE','THEFT'];
var crimejson = [
  {
    "Name":"ASSAULT",
    "Color":"#B452CD"
  },
  {
    "Name":"CRIMINAL TRESPASS",
    "Color":"#9400D3"
  },
  {
    "Name":"KIDNAPPING",
    "Color":"#AB82FF"
  },
  {
    "Name":"LIQUOR LAW VIOLATION",
    "Color":"#8470FF"
  },
  {
    "Name":"MOTOR VEHICAL THEFT",
    "Color":"#0000EE"
  },
  {
    "Name":"PROSTITUTION",
    "Color":"#B0C4DE"
  },
  {
    "Name":"ROBBERY",
    "Color":"#00E5EE"
  },
  {
    "Name":"SEX OFFENSE",
    "Color":"#C1CDCD"
  },
  {
    "Name":"THEFT",
    "Color":"#7FFFD4"
  }
];
var districtjson = [
  {
    "District_id":1,
    "Name":"Central",
    "Color":"#B452CD",
    "longitude":-87.623572,
    "latitude":41.880280
  },
  {
    "District_id":2,
    "Name":"Wentworth",
    "Color":"#9400D3",
    "longitude":-87.629161,
    "latitude":41.745228
  },
  {
    "District_id":3,
    "Name":"Grand Crossing",
    "Color":"#AB82FF",
    "longitude":-87.595383,
    "latitude":41.763414
  },
  {
    "District_id":4,
    "Name":"South Chicago",
    "Color":"#8470FF",
    "longitude":-87.554462,
    "latitude":41.739653
  },
  {
    "District_id":5,
    "Name":"Calumet",
    "Color":"#0000EE",
    "longitude":-87.561836,
    "latitude":41.692955
  },
  {
    "District_id":6,
    "Name":"Gresham",
    "Color":"#B0C4DE",
    "longitude":-87.658573,
    "latitude":41.747895
  },
  {
    "District_id":7,
    "Name":"Englewood",
    "Color":"#00E5EE",
    "longitude":-87.641642,
    "latitude":41.775305
  },
  {
    "District_id":8,
    "Name":"Chicago Lawn",
    "Color":"#C1CDCD",
    "longitude":-87.695410,
    "latitude":41.771942
  },
  {
    "District_id":9,
    "Name":"Deering",
    "Color":"#7FFFD4",
    "longitude":-87.561132,
    "latitude":41.699224
  },
  {
    "District_id":10,
    "Name":"Ogden",
    "Color":"#838B83",
    "longitude":-87.654973,
    "latitude":41.895962
  },
  {
    "District_id":11,
    "Name":"Harrison",
    "Color":"#A2CD5A",
    "longitude":-87.627461,
    "latitude":41.874146
  },
  {
    "District_id":12,
    "Name":"Near West",
    "Color":"#CDCD00",
    "longitude":-88.203961,
    "latitude":41.884751
  },
  {
    "District_id":14,
    "Name":"Shakespear",
    "Color":"#E3CF57",
    "longitude":-87.726611,
    "latitude":41.919926
  },
  {
    "District_id":15,
    "Name":"Austin",
    "Color":"#CD8500",
    "longitude":-87.761562,
    "latitude":41.892953
  },
  {
    "District_id":16,
    "Name":"Jefferson Park",
    "Color":"#FFEBCD",
    "longitude":-87.770397,
    "latitude":41.982515
  },
  {
    "District_id":17,
    "Name":"Albany Park",
    "Color":"#A0522D",
    "longitude":-87.719724,
    "latitude":41.968972
  },
  {
    "District_id":18,
    "Name":"Near North",
    "Color":"#C67171",
    "longitude":-87.628196,
    "latitude":41.895356
  },
  {
    "District_id":19,
    "Name":"Town Hall",
    "Color":"#848484",
    "longitude":-113.165284,
    "latitude":46.588117
  },
  {
    "District_id":20,
    "Name":"Foster",
    "Color":"#B8B8B8",
    "longitude":-87.746947,
    "latitude":41.975354
  },
  {
    "District_id":22,
    "Name":"Morgan Park",
    "Color":"#EE4000",
    "longitude":-87.669003,
    "latitude":41.687840
  },
  {
    "District_id":24,
    "Name":"Rogers Park",
    "Color":"#FFA54F",
    "longitude":-87.669553,
    "latitude":42.010636
  },
  {
    "District_id":25,
    "Name":"Grand Central",
    "Color":"#CDBA96",
    "longitude":-87.613563,
    "latitude":41.891896
  }
];
var crimeLocationTypeJson = [
  {
    "Name":"SCHOOL",
    "Color":"#B452CD"
  },
  {
    "Name":"APARTMENT,CHURCH/SYNAGOGUE/PLACE OF WORSHIP",
    "Color":"#9400D3"
  },
  {
    "Name":"CONSTRUCTION SITE",
    "Color":"#AB82FF"
  },
  {
    "Name":"DEPARTMENT STORE",
    "Color":"#8470FF"
  },
  {
    "Name":"HOSPITAL BUILDING/GROUNDS",
    "Color":"#0000EE"
  },
  {
    "Name":"RESIDENCE",
    "Color":"#B0C4DE"
  },
  {
    "Name":"STREET",
    "Color":"#00E5EE"
  },
  {
    "Name":"TAXICAB",
    "Color":"#C1CDCD"
  }
];
var yearlyCrimeData = [
  {
    "name":"2011",
    "value":351336
  },
  {
    "name":"2012",
    "value":335495
  },
  {
    "name":"2013",
    "value":306387
  },
  {
    "name":"2014",
    "value":273760
  },
  {
    "name":"2015",
    "value":231749
  }
];
var communitiesjson = [
  {
    "Community_id":1,
    "Name":"ROGERS PARK"
  },
  {
    "Community_id":2,
    "Name":"WEST RIDGE"
  },
  {
    "Community_id":3,
    "Name":"UPTOWN"
  },
  {
    "Community_id":4,
    "Name":"LINCOLN SQUARE"
  },
  {
    "Community_id":5,
    "Name":"NORTH CENTER"
  },
  {
    "Community_id":6,
    "Name":"LAKE VIEW"
  },
  {
    "Community_id":7,
    "Name":"LINCOLN PARK"
  },
  {
    "Community_id":8,
    "Name":"NEAR NORTH SIDE"
  },
  {
    "Community_id":9,
    "Name":"EDISON PARK"
  },
  {
    "Community_id":10,
    "Name":"NORWOOD PARK"
  },
  {
    "Community_id":11,
    "Name":"JEFFERSON PARK"
  },
  {
    "Community_id":12,
    "Name":"FOREST GLEN"
  },
  {
    "Community_id":13,
    "Name":"NORTH PARK"
  },
  {
    "Community_id":14,
    "Name":"ALBANY PARK"
  },
  {
    "Community_id":15,
    "Name":"PORTAGE PARK"
  },
  {
    "Community_id":16,
    "Name":"IRVING PARK"
  },
  {
    "Community_id":17,
    "Name":"DUNNING"
  },
  {
    "Community_id":18,
    "Name":"MONTCLARE"
  },
  {
    "Community_id":19,
    "Name":"BELMONT CRAGIN"
  },
  {
    "Community_id":20,
    "Name":"HERMOSA"
  },
  {
    "Community_id":21,
    "Name":"AVONDALE"
  },
  {
    "Community_id":22,
    "Name":"LOGAN SQUARE"
  },
  {
    "Community_id":23,
    "Name":"HUMBOLDT PARK"
  },
  {
    "Community_id":24,
    "Name":"WEST TOWN"
  },
  {
    "Community_id":25,
    "Name":"AUSTIN"
  },
  {
    "Community_id":26,
    "Name":"WEST GARFIELD PARK"
  },
  {
    "Community_id":27,
    "Name":"EAST GARFIELD PARK"
  },
  {
    "Community_id":28,
    "Name":"NEAR WEST SIDE"
  },
  {
    "Community_id":29,
    "Name":"NORTH LAWNDALE"
  },
  {
    "Community_id":30,
    "Name":"SOUTH LAWNDALE"
  },
  {
    "Community_id":31,
    "Name":"LOWER WEST SIDE"
  },
  {
    "Community_id":32,
    "Name":"LOOP"
  },
  {
    "Community_id":33,
    "Name":"NEAR SOUTH SIDE"
  },
  {
    "Community_id":34,
    "Name":"ARMOUR SQUARE"
  },
  {
    "Community_id":35,
    "Name":"DOUGLAS"
  },
  {
    "Community_id":36,
    "Name":"OAKLAND"
  },
  {
    "Community_id":37,
    "Name":"FULLER PARK"
  },
  {
    "Community_id":38,
    "Name":"GRAND BOULEVARD"
  },
  {
    "Community_id":39,
    "Name":"KENWOOD"
  },
  {
    "Community_id":40,
    "Name":"WASHINGTON PARK"
  },
  {
    "Community_id":41,
    "Name":"HYDE PARK"
  },
  {
    "Community_id":42,
    "Name":"WOODLAWN"
  },
  {
    "Community_id":43,
    "Name":"SOUTH SHORE"
  },
  {
    "Community_id":44,
    "Name":"CHATHAM"
  },
  {
    "Community_id":45,
    "Name":"AVALON PARK"
  },
  {
    "Community_id":46,
    "Name":"SOUTH CHICAGO"
  },
  {
    "Community_id":47,
    "Name":"BURNSIDE"
  },
  {
    "Community_id":48,
    "Name":"CALUMET HEIGHTS"
  },
  {
    "Community_id":49,
    "Name":"ROSELAND"
  },
  {
    "Community_id":50,
    "Name":"PULLMAN"
  },
  {
    "Community_id":51,
    "Name":"SOUTH DEERING"
  },
  {
    "Community_id":52,
    "Name":"EAST SIDE"
  },
  {
    "Community_id":53,
    "Name":"WEST PULLMAN"
  },
  {
    "Community_id":54,
    "Name":"RIVERDALE"
  },
  {
    "Community_id":55,
    "Name":"HEGEWISCH"
  },
  {
    "Community_id":56,
    "Name":"GARFIELD RIDGE"
  },
  {
    "Community_id":57,
    "Name":"ARCHER HEIGHTS"
  },
  {
    "Community_id":58,
    "Name":"BRIGHTON PARK"
  },
  {
    "Community_id":59,
    "Name":"MCKINLEY PARK"
  },
  {
    "Community_id":60,
    "Name":"BRIDGEPORT"
  },
  {
    "Community_id":61,
    "Name":"NEW CITY"
  },
  {
    "Community_id":62,
    "Name":"WEST ELSDON"
  },
  {
    "Community_id":63,
    "Name":"GAGE PARK"
  },
  {
    "Community_id":64,
    "Name":"CLEARING"
  },
  {
    "Community_id":65,
    "Name":"WEST LAWN"
  },
  {
    "Community_id":66,
    "Name":"CHICAGO LAWN"
  },
  {
    "Community_id":67,
    "Name":"WEST ENGLEWOOD"
  },
  {
    "Community_id":68,
    "Name":"ENGLEWOOD"
  },
  {
    "Community_id":69,
    "Name":"GREATER GRAND CROSSING"
  },
  {
    "Community_id":70,
    "Name":"ASHBURN"
  },
  {
    "Community_id":71,
    "Name":"AUBURN GRESHAM"
  },
  {
    "Community_id":72,
    "Name":"BEVERLY"
  },
  {
    "Community_id":73,
    "Name":"WASHINGTON HEIGHTS"
  },
  {
    "Community_id":74,
    "Name":"MOUNT GREENWOOD"
  },
  {
    "Community_id":75,
    "Name":"MORGAN PARK"
  },
  {
    "Community_id":76,
    "Name":"OHARE"
  },
  {
    "Community_id":77,
    "Name":"EDGEWATER"
  }
];