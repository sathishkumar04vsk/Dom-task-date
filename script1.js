var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.setAttribute('class','btn btn-primary')
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);



function displaydata(){
    let input=document.getElementById('date').value;
   if(Date.parse(input)){
       var inputdata=new Date(input);
       var currentdata=new Date();
       var millesecond=currentdata.getTime()-inputdata.getTime();
       var milleseconddiff=document.createElement('div')
       milleseconddiff.innerHTML="Milleseconds Diff: "+millesecond;
       document.body.append(milleseconddiff);
       
       var second=Math.floor(millesecond/1000);
       var seconddiff=document.createElement('div');
       seconddiff.innerHTML="Seconds Diff: "+second;
       document.body.append(seconddiff);
       
       var mintues=Math.floor(second/60);
       var mintuesdiff=document.createElement('div');
       mintuesdiff.innerHTML="Minutes Diff: "+mintues;
       document.body.append(mintuesdiff);
       
       var hours=Math.floor(mintues/60);
       var hoursdiff=document.createElement('div');
       hoursdiff.innerHTML="Hours Diff: "+hours;
       document.body.append(hoursdiff);

      
       var days=Math.floor(hours/24);
       var daysdiff=document.createElement('div');
       daysdiff.innerHTML="Days Diff: "+days;
       document.body.append(daysdiff);
       
       var weeks=Math.floor(days/7);
       var weeksdiff=document.createElement('div');
       weeksdiff.innerHTML="Weeks Diff: "+weeks;
       document.body.append(weeksdiff);

       var years=currentdata.getFullYear()-inputdata.getFullYear();
       var yearsdiff=document.createElement('div');
       yearsdiff.innerHTML="Years Diff: "+years;
       document.body.append(yearsdiff);
   

      console.log(currentdata.getMonth());
    var months=(years*12)+(currentdata.getMonth()-inputdata.getMonth());
    var monthsdiff=document.createElement('div');
        monthsdiff.innerHTML="Months Diff: "+months;
       document.body.append(monthsdiff);
    
       
   }
}
