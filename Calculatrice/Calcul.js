var V=0
var X=0
var W=0
var L=0
var Q=0
var FSL=1
var len=0
var moinmoin=0

var A=document.getElementById('a')
var a=document.getElementById('A')
var b=document.getElementById('B')
var c=document.getElementById('C')
var d=document.getElementById('D')
var e=document.getElementById('E')
var f=document.getElementById('F')
var g=document.getElementById('G')
var h=document.getElementById('H')
var i=document.getElementById('I')
var j=document.getElementById('J')
var k=document.getElementById('K')
var l=document.getElementById('L')
var m=document.getElementById('M')
var n=document.getElementById('N')
var o=document.getElementById('O')
var fs=document.getElementById('Fs')
var p=document.getElementById('P')
var Ms=document.getElementById('MS7')

a.addEventListener('click',CC)
b.addEventListener('click',seb3)
c.addEventListener('click',tmn)
d.addEventListener('click',ts3d)
e.addEventListener('click',njma)
f.addEventListener('click',rb3a)
g.addEventListener('click',khms)
h.addEventListener('click',setta)
i.addEventListener('click',slax)
j.addEventListener('click',yan)
k.addEventListener('click',sin)
l.addEventListener('click',krad)
m.addEventListener('click',na9is)
n.addEventListener('click',ZeRo)
o.addEventListener('click',tosawi)
fs.addEventListener('click',fasila)
p.addEventListener('click',zayd)
Ms.addEventListener('click',mse7)

function CC(){
    A.innerHTML=0
    V=0
    W=0
    X=0
    Q=0
    L=0
    FSL=1
    len=0
    moinmoin=0
}
function yan(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+1
        break

        default : V+=1/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function sin(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+2
        break

        default : V+=2/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function krad(){ 
    if (len<14){  
    switch (FSL){
        case 1 : V=(V*10)+3
        break

        default : V+=3/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function rb3a(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+4
        break

        default : V+=4/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function khms(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+5
        break

        default : V+=5/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function setta(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+6
        break

        default : V+=6/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function seb3(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+7
        break

        default : V+=7/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function tmn(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+8
        break

        default : V+=8/FSL
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function ts3d(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)+9
        break

        default : V+=9/FSL
                  FSL*=10
                  
    }
    len++}
    A.innerHTML=V
}
function ZeRo(){
    if (len<14){
    switch (FSL){
        case 1 : V=(V*10)
        break
        
        default : A.innerHTML=V+'0'
                  FSL*=10
    }
    len++}
    A.innerHTML=V
}
function slax(){
    W='/'
    X=V
    V=0
    A.innerHTML='/'
    L=1
    Q=1
    FSL=1
    moinmoin=0
}
function njma(){
    W='*'
    X=V
    V=0
    A.innerHTML='*'
    L=1
    Q=1
    FSL=1
    moinmoin=0
}
function na9is(){
    switch (Q){
        case 0 :
         X=V
         V=0
         moinmoin++
        break
}
L=0
A.innerHTML='-'
FSL=1
}
function zayd(){
    W='+'
    X=V
    V=0
    A.innerHTML='+'
    L=1
    Q=1
    FSL=1
    moinmoin=0
}
function fasila(){
    switch (FSL){
        case 1 :
            A.innerHTML=V+'.'
            FSL*=10
            switch (V){
                case 0 : len+=2
                break
                default :len++
            }
        break

        default : A.innerHTML=V
    }
    
}
function mse7(){
    switch (FSL){
        case 1 :  V=Math.floor(V/10)
        break

        case 100: V*=FSL/100
                  V=Math.floor(V)/(FSL/100)
                  FSL/=100
        break

        default : V*=FSL/100
                  V=Math.floor(V)/(FSL/100)
                  FSL/=10
    }
    if(len>=1){
        len--
    }
    A.innerHTML=V
    
}

function tosawi(){
    switch (Q){
    case 0 :
       switch (L){
        case 0 :switch(moinmoin){
                case 1: V=X-V
                break
                default: V=-X-V}
       }
       A.innerHTML=V
    
    break
    case 1 :
    switch (L){
    case 1 : 
        switch(W){
        case '+': V+=X
                  A.innerHTML=V
        break

        case '*': V*=X
                  A.innerHTML=V
        break

        case '/': if(V!=0){
                    V=X/V
                    A.innerHTML=V}
                    else{
                        A.innerHTML="Errour"
                        V=0
                        }
    }
    break
    case 0 : 
        switch(W){
            case '+': V=X-V
                      A.innerHTML=V
            break
            case '*':  V=X*(-V)
                       A.innerHTML=V
            break
            case '/': if(V!=0){
                        V=X/(-V)
                        A.innerHTML=V
                        }
                        else{
                          A.innerHTML="Errour"
                          V=0
                          }
    }
    }}
    W=0
    Q=0
    X=0
    L=0
    FSL=1
    len=1
    moinmoin=0
}






