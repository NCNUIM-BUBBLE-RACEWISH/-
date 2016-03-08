$(document).ready(function(){

//長條圖
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '申請場地人數'
        },
        subtitle: {
            text: ': <a href=""></a>'
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '17:00~20:00',
            data: [12,22,2,20]
        }, {
            name: '20:00~23:00',
            data: [13,15,4,4]
        }, ]
    });
});



//顯示對應的次數
$("#wish1").change(function(){
  var time=$("#YourTime1").val();
  var ball=$("#YourBall1").val();
  var place=$("#YourPlace1").val();
  if((time!=-1)&&(ball!=-1)&&(place!=-1)){
  	$.ajax({
        url: "http://163.22.17.184:8080/bubble/apply_count2/json",
        data:{},
        type: "GET",
        success: function(data) {
            $.each(data, function(key,value){
            	$("#wish1 > input").val(value).show();
            	console.log(key+": "+value);

            });    		
        }
    });
  }
});
$("#wish2").change(function(){
  var time=$("#YourTime2").val();
  var ball=$("#YourBall2").val();
  var place=$("#YourPlace2").val();
  if((time!=-1)&&(ball!=-1)&&(place!=-1)){
  	$.ajax({
        url: "http://163.22.17.184:8080/bubble/apply_count2/json",
        data:{},
        type: "GET",
        success: function(data) {
            $.each(data, function(key,value){
            	$("#wish2 > input").val(value).show();
            	console.log(key+": "+value);

            });    		
        }
    });
  }
});
$("#wish3").change(function(){
  var time=$("#YourTime3").val();
  var ball=$("#YourBall3").val();
  var place=$("#YourPlace3").val();
  if((time!=-1)&&(ball!=-1)&&(place!=-1)){
  	$.ajax({
        url: "http://163.22.17.184:8080/bubble/apply_count2/json",
        data:{},
        type: "GET",
        success: function(data) {
            $.each(data, function(key,value){
            	$("#wish3 > input").val(value).show();
            	console.log(key+": "+value);

            });    		
        }
    });
  }
});
$("#wish4").change(function(){
  var time=$("#YourTime4").val();
  var ball=$("#YourBall4").val();
  var place=$("#YourPlace4").val();
  if((time!=-1)&&(ball!=-1)&&(place!=-1)){
  	$.ajax({
        url: "http://163.22.17.184:8080/bubble/apply_count2/json",
        data:{},
        type: "GET",
        success: function(data) {
            $.each(data, function(key,value){
            	$("#wish4 > input").val(value).show();
            	console.log(key+": "+value);

            });    		
        }
    });
  }
});

$("#wish5").change(function(){
  var time=$("#YourTime5").val();
  var ball=$("#YourBall5").val();
  var place=$("#YourPlace5").val();
  if((time!=-1)&&(ball!=-1)&&(place!=-1)){
  	/* 列出所選時間
  	$("#wish5 > input").val(" 　"+time+" "+ball+" "+place).show();
  	*/
  	$.ajax({
        url: "http://163.22.17.184:8080/bubble/apply_count2/json",
        data:{},
        type: "GET",
        success: function(data) {
            $.each(data, function(key,value){
            	$("#wish5 > input").val(value).show();
            	console.log(key+": "+value);

            });    		
        }
    });

   }
});




});




//點選確認後跳出的窗口--->改  GG
function confirmTwice(){
	var reply =confirm();
	$("#myp").html(Data);
	if(reply==true){
		alert('Thank you,we receive your answer.');
		//↓↓↓↓↓↓不知道為什麼T______T↓↓↓↓↓↓↓
		location.href='第二次分流.html';
	}else{
		close();
	}
}
