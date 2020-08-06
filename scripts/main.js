document.addEventListener('DOMContentLoaded',function(e){
    const btn=document.querySelector('#reset');
    const grid=document.querySelector('#grid');

    const bw=document.querySelector('#bw');
    const color=document.querySelector('#color')

    creategrid(16);
    btn.addEventListener('click',function(e){
        //reset function
        n=prompt('how many squares per side to make the new grid?');
        if(n>35){
            alert('enter a number less than 35');
        }
        else{
            while(grid.firstChild){
                grid.removeChild(grid.firstChild);
            }
            creategrid(n);
        }
        
    });
    //create function
    function creategrid(x){
        console.log('creating');
        for(var j=0;j<x;j++){
            console.log(x);
            const row=document.createElement('div');
            row.classList.add('rows');
            for(var i=0;i<x;i++){
                const cell=document.createElement('div');
                cell.classList.add('in-grid');
                var size=450/x;
                cell.style.width=size+'px';
                cell.style.height=size+'px';
                row.appendChild(cell);
                cell.addEventListener('mouseover',function(e){
                    if(bw.checked){
                        e.target.style.background='black';
                    }
                    else{
                        e.target.style.background=getRandomColor();
                    }
                    
                });
            }
            grid.appendChild(row);
        }
    };
    //colourful ink function
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
});

