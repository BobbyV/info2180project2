{"filter":false,"title":"fifteen.js","tooltip":"/fifteen.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":74}},"text":"//The animation and transition of tiles additional feature was implemented"},{"action":"insertText","range":{"start":{"row":0,"column":74},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":229,"column":0}},"lines":["//id: 620057710","var space=15; //Empty tile","var move=\"none\";// direction","var boxes1;//Array of tiles","var counter=0;","var adder=0;","var str;","var inProgress= false;//Is tile still moving..","","//Loads tiles when webpage loads","window.onload = function(){","\tvar boxes = document.getElementById('puzzlearea').getElementsByTagName('div');","\tboxes1=boxes;","\tvar btn = document.getElementById('shufflebutton');","\tbtn.onclick=shuffle;","\tfor(var i=0; i<boxes.length;i++){","\t\tboxes[i].className = 'puzzlepiece';","\t\tboxes[i].onmouseover = canMove;","\t\tboxes[i].onmouseout = clear;","\t\tboxes[i].onclick = moveTile;","","\t\tif(i>=0 && i<=3){","\t\t\tboxes[i].style.left+=i*100+'px';","\t\t\tboxes[i].style.top=0+'px';","\t\t\tboxes[i].style.backgroundPosition = -i*100+'px '+'0px';","\t\t}else if(i>=4 && i<=7){","\t\t\tboxes[i].style.left+=(i-4)*100+'px';","\t\t\tboxes[i].style.top=100+'px';","\t\t\tboxes[i].style.backgroundPosition = -(i-4)*100+'px '+'-100px';","\t\t}else if(i>=8 && i<=11){","\t\t\tboxes[i].style.left+=(i-8)*100+'px';","\t\t\tboxes[i].style.top=200+'px';","\t\t\tboxes[i].style.backgroundPosition = -(i-8)*100+'px '+'-200px';","\t\t}else{","\t\t\tboxes[i].style.left+=(i-12)*100+'px';","\t\t\tboxes[i].style.top=300+'px';","\t\t\tboxes[i].style.backgroundPosition = -(i-12)*100+'px '+'-300px';","\t\t}","\t\t","\t}","};","","//Check if tile can move","function canMove(){","\tif(!inProgress){","\t\tif((parseInt(this.style.left)+parseInt(this.offsetWidth)) === parseInt(getX()) && this.style.top===getY()){","\t\tthis.className = this.className + \" movablepiece\";","\t\tmove=\"right\";","\t\t}else if(parseInt(this.style.left) === (parseInt(getX())+parseInt(this.offsetWidth)) && this.style.top===getY()){","\t\t\tthis.className = this.className + \" movablepiece\";","\t\t\tmove= \"left\";","\t\t}else if((parseInt(this.style.top)+parseInt(this.offsetHeight)) === parseInt(getY()) && this.style.left===getX()){","\t\t\tthis.className = this.className + \" movablepiece\";","\t\t\tmove= \"down\";","\t\t}else if(parseInt(this.style.top) === (parseInt(getY())+parseInt(this.offsetHeight)) && this.style.left===getX()){","\t\t\tthis.className = this.className + \" movablepiece\";","\t\t\tmove= \"up\";","\t\t}else{","\t\t\tmove= \"none\";","\t\t}","\t}","\t","","}","","//remove .moveablepiece class when mouse exits tile","function clear(){","\tthis.className = 'puzzlepiece';","}","","//Check method for shuffle","function canMove1(elmt){","\tif((parseInt(elmt.style.left)+parseInt(elmt.offsetWidth)) === parseInt(getX()) && elmt.style.top===getY()){","\t\tmove=\"right\";","\t\treturn \"right\";","\t}else if(parseInt(elmt.style.left) === (parseInt(getX())+parseInt(elmt.offsetWidth)) && elmt.style.top===getY()){","\t\tmove= \"left\";","\t\treturn \"left\";","\t}else if((parseInt(elmt.style.top)+parseInt(elmt.offsetHeight)) === parseInt(getY()) && elmt.style.left===getX()){","\t\tmove= \"down\";","\t\treturn \"down\";","\t}else if(parseInt(elmt.style.top) === (parseInt(getY())+parseInt(elmt.offsetHeight)) && elmt.style.left===getX()){","\t\tmove= \"up\";","\t\treturn \"up\";","\t}else{","\t\tmove= \"none\";","\t\treturn \"none\";","\t}","","}","","//Animates tile movement","function shift(){","\tvar indx = 0;","\tfor(var i=0; i<boxes1.length;i++){","\t\tif(boxes1[i].textContent===str){","\t\t\tindx=i;\t","\t\t}","\t}","\t","\tif(adder!=100){","\t\tif(move===\"left\" || move===\"right\"){","\t\t\tboxes1[indx].style.left=parseInt(boxes1[indx].style.left)+counter+'px';","\t\t}else{","\t\t\tboxes1[indx].style.top=parseInt(boxes1[indx].style.top)+counter+'px';","\t\t}","\t\tadder+=1;","\t\tinProgress=true;","\t\tsetTimeout(\"shift()\", \"1 * 1000\");","\t}else{","\t\tadder=0;","\t\tinProgress=false;","\t\tmove=\"none\";","\t}\t","\t","}","","//Gets direction and then calls shift() to move tile","function moveTile(){","\tif(!inProgress){","\t\tswitch(move){","\t\tcase \"right\":","\t\tcounter=1;","\t\tspace-=1;","\t\tstr=this.textContent;","\t\tshift();","\t\tbreak;","\t\tcase \"left\":","\t\tcounter=-1;","\t\tspace+=1;","\t\tstr=this.textContent;","\t\tshift();","\t\tbreak;","\t\tcase \"down\":","\t\tcounter=1;","\t\tspace-=4;","\t\tstr=this.textContent;","\t\tshift();","\t\tbreak;","\t\tcase \"up\":","\t\tcounter=-1;","\t\tspace+=4;","\t\tstr=this.textContent;","\t\tshift();","\t\tbreak;","","\t}","\t}","}","","//Move method for shuffle","function moveTile1(elmt){","\t","\tswitch(move){","\t\tcase \"right\":","\t\telmt.style.left=parseInt(elmt.style.left)+100+'px';","\t\tspace-=1;","\t\tbreak;","\t\tcase \"left\":","\t\telmt.style.left=parseInt(elmt.style.left)-100+'px';","\t\tspace+=1;","\t\tbreak;","\t\tcase \"down\":","\t\telmt.style.top=parseInt(elmt.style.top)+100+'px';","\t\tspace-=4;","\t\tbreak;","\t\tcase \"up\":","\t\telmt.style.top=parseInt(elmt.style.top)-100+'px';","\t\tspace+=4;","\t\tbreak;","","\t\tdefault:","","","\t}","}","","//shuffles tiles","function shuffle(){","\tvar num=100;","\tfor(var i =0; i<num; i++){","\t\tvar lst = [];","\t\tfor(var i1 =0; i1<boxes1.length; i1++){","\t\t\tif(canMove1(boxes1[i1])!=\"none\"){","\t\t\t\tlst.push(i1);","\t\t\t}","","\t\t}","\t\tif(lst.length!=0){","\t\t\tvar n = lst[Math.floor((Math.random()*lst.length)+0)];","\t\t\tcanMove1(boxes1[n]);","\t\t\tmoveTile1(boxes1[n]);","\t\t}","\t}","\tmove=\"none\";","}","","//Returns the corresponding X for the empty tile","function getX(){","\t\tif(space>=0 && space<=3){","\t\t\treturn space*100+'px';","\t\t}else if(space>=4 && space<=7){","\t\t\treturn (space-4)*100+'px';","\t\t\t","\t\t}else if(space>=8 && space<=11){","\t\t\treturn (space-8)*100+'px';","\t\t\t","\t\t}else{","\t\t\treturn (space-12)*100+'px';","\t\t\t","\t\t}","\t\t//return 0;","}","","//Returns the corresponding Y for the empty tile","function getY(){","\tif(space>=0 && space<=3){","\t\t\treturn '0px';","\t\t}else if(space>=4 && space<=7){","\t\t\treturn '100px';","\t\t\t","\t\t}else if(space>=8 && space<=11){","\t\t\treturn '200px';","\t\t\t","\t\t}else{","\t\t\treturn '300px';","\t\t\t","\t\t}"]},{"action":"insertText","range":{"start":{"row":229,"column":0},"end":{"row":229,"column":1}},"text":"}"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":8},"end":{"row":7,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1414735478280,"hash":"13874c1559369c63c5b8c05cb60edf5cfb67180d"}