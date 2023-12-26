
var ele,krd,vly,zwc,ynf,puo,mbc,bko,kew,rsu,cox,ehx,qkf,obq,tyn,prc,ffw,mwf,hzt,rqf,fct,ucp,vlx,lbw,ktb,unq,xic,nur,okl,znb,yad,gct,spt,eza,dxd,lpl,sgu,xlb,mwo,oob,bhx,gfi,fyp,iix,ldu,dmx,afz,hpd,hey,sld,bdy,tkk,zdz;ele=['#e0e0e0','#f08080','#affbaf','#7cfc00','#b0e0e6','#ffff00','#dddddd','#ffa500','#c00000'];ehx="<input size=\"1\" class=\"iqy\" id=\"sdq\" type=\"text\" tabindex=\"1\" onkeydown=\"dxd(event)\" onkeypress=\"oob(event)\" onclick=\"dmx(event)\" maxlength=\"12\">";tyn=function()
{if(window.top.frames.length===0)
{window.location.href="../../../../PersonalTutor.htm";}
return false;};prc=function()
{var tsb,scg;mbc=0;puo=0;zdz=document.getElementById("mon");tkk=document.getElementById("vhg");window.parent.xvp(window.name,document.documentElement.scrollHeight);for(tsb in isk.pok)
{if(isk.pok.hasOwnProperty(tsb))
{isk.pok[tsb].aek=document.getElementById(tsb);}}
obq=isk.qzc[isk.qzc.length-1];scg=window.parent.vcb(isk.pok,obq);if(scg)
{vly=false;zwc=true;ffw(scg);}else
{vly=true;zwc=false;lbw();okl();}};ffw=function(scg)
{var tsb,xyv,oqp;for(tsb in scg)
{if(scg.hasOwnProperty(tsb))
{oqp=document.getElementById(tsb);xyv=scg[tsb];oqp.innerHTML=xyv.uey;oqp.style.backgroundColor=ele[xyv.ydd];}}};mwf=function(mgs)
{if(window.event)
{var ecw=window.event;if(ecw.srcElement)
{ecw.returnValue=false;ecw.cancelBubble=true;}}
return false;};hzt=function(ecw,cps)
{if(rsu)
{if(kew)
{eza(cps.firstChild.nodeValue,window.top.yzf);}else
{spt(cps.firstChild.nodeValue);}}};rqf=function()
{var xse;afz();switch(mbc)
{case 0:xse=fct();vly=false;puo++;if(puo>isk.xgi.odz)
{mbc=(xse)?4:2;}else
{mbc=(xse)?4:1;}
break;case 1:mbc=0;ucp();vly=true;break;case 2:mbc=3;zwc=true;vlx();break;case 3:zwc=true;break;case 4:zwc=true;}
window.parent.tfc(mbc);return mbc;};fct=function()
{var tsb,xyv,xse;krd=[0,0,0,0,0,isk.xgi.vfc];for(tsb in isk.pok)
{if(isk.pok.hasOwnProperty(tsb))
{xyv=isk.pok[tsb];if(xyv.ydd<2)
{if(xyv.eho===xyv.uey)
{xyv.ydd=(xyv.ydd!==0)?2:3;}else
{xyv.ydd=1;}}
krd[xyv.ydd]++;xyv.aek.style.backgroundColor=ele[xyv.ydd];}}
xse=window.parent.hgy(krd);window.parent.iwy(isk.qzc[4],krd,puo,isk.xgi.odz);return xse;};ucp=function()
{var tsb,xyv;for(tsb in isk.pok)
{if(isk.pok.hasOwnProperty(tsb))
{xyv=isk.pok[tsb];if(xyv.ydd<2)
{xyv.aek.style.backgroundColor=ele[0];}}}
lbw();};vlx=function()
{var tsb,xyv;for(tsb in isk.pok)
{if(isk.pok.hasOwnProperty(tsb))
{xyv=isk.pok[tsb];if(xyv.ydd<2)
{xyv.aek.innerHTML=xyv.uey;xyv.aek.style.backgroundColor=ele[4];xyv.ydd=4;}}}};lbw=function()
{var qbs,tsb,xyv;qkf=null;for(tsb in isk.pok)
{if(isk.pok.hasOwnProperty(tsb))
{xyv=isk.pok[tsb];if(xyv.ydd<2)
{if(qbs)
{isk.pok[qbs].next=tsb;xyv.prev=qbs;qbs=tsb;}else
{qbs=tsb;qkf=tsb;}}}}
if(qbs)
{isk.pok[qkf].prev=qbs;isk.pok[qbs].next=qkf;ktb(qkf);}};ktb=function(tsb)
{cox=tsb;rsu=isk.pok[cox].aek;rsu.style.backgroundColor=ele[5];};unq=function()
{afz();if(rsu)
{rsu.style.backgroundColor=ele[0];rsu=null;}};xic=function()
{var ynr=isk.pok[cox].next;if(ynr!==cox)
{unq();ktb(ynr);}};nur=function()
{var mpp=isk.pok[cox].prev;if(mpp!==cox)
{unq();ktb(mpp);}};okl=function()
{afz();window.parent.okl();};znb=function(rvx)
{var zwq;if(zwc){return false;}
if(window.top.etr[rvx])
{zwq=window.top.etr[rvx];}else
{zwq=String.fromCharCode(rvx);}
spt(zwq);};yad=function(mxe)
{var hmk,cfq;if(zwc){return false;}
hmk=(mbc===1)?9:window.top.clt[mxe];if(hmk)
{switch(hmk)
{case 1:xic();break;case 2:nur();break;case 3:unq();ktb(qkf);break;case 4:unq();ktb(isk.pok[qkf].prev);break;case 5:if(kew)
{afz(true);}else
{spt("");}
break;case 9:rqf();}
cfq=false;}else
{cfq=true;}
return cfq;};gct=function(mxe,aki,bko)
{var kuk,cfq;if(zwc){return false;}
if(mbc===1)
{rqf();}
if(window.top.qqg[mxe])
{kuk=(aki)?1:0;if(kew)
{eza(window.top.qqg[mxe][kuk],bko);}else
{spt(window.top.qqg[mxe][kuk]);}
cfq=false;}else
{cfq=true;}
return cfq;};spt=function(zwq)
{var pqh,die,prw;if(!rsu||zwc){return false;}
if(!kew)
{rsu.innerHTML=ehx;kew=document.getElementById("sdq");}
die=isk.pok[cox].eho;kew.value=zwq;if(kew.createTextRange)
{pqh=kew.createTextRange();pqh.collapse(false);pqh.select();}else
{prw=kew.value.length;kew.setSelectionRange(prw,prw);}
kew.focus();return false;};eza=function(zwq,bko)
{var pqh,prw;kew.value=kew.value+zwq;if(bko===1)
{pqh=kew.createTextRange();pqh.collapse(false);pqh.select();if(window.top.bha)
{ldu(bko);}}else
{prw=kew.value.length;kew.setSelectionRange(prw,prw);ldu(bko);}
kew.focus();};dxd=function(imq)
{if(zwc){return false;}
switch(window.top.yzf)
{case 1:return lpl();case 2:return sgu(imq);case 3:return xlb(imq);case 4:return mwo();case 5:return lpl();default:return lpl();}};lpl=function()
{var imq,ixv,hmk,rmz=[1,false,false,false,false,0,0];imq=window.event;rmz[1]=imq.shiftKey;if(imq.ctrlKey&&imq.altKey)
{rmz[4]=true;}else
{rmz[2]=imq.ctrlKey;rmz[3]=imq.altKey;}
rmz[5]=imq.keyCode;if(rmz[5]===13)
{ixv=false;afz(true);}else if(rmz[2])
{ixv=gct(rmz[5],rmz[1],1);}else
{hmk=window.top.kbg[rmz[5]];if(hmk)
{if(hmk===1)
{afz(true);}
ixv=false;}else
{ixv=true;}}
if(ixv)
{imq.cancelBubble=false;imq.returnValue=true;}else
{imq.cancelBubble=true;imq.returnValue=false;}
return ixv;};sgu=function(imq)
{var ixv,hmk,rmz=[2,false,false,false,false,0,0];rmz[1]=imq.shiftKey;if(imq.ctrlKey&&imq.altKey)
{rmz[4]=true;}else
{rmz[2]=imq.ctrlKey;rmz[3]=imq.altKey;}
rmz[5]=imq.keyCode;rmz[6]=imq.charCode;if(rmz[5]===13)
{ixv=false;afz(true);}else if(rmz[2])
{ixv=gct(rmz[5],rmz[1],2);}else
{hmk=window.top.kbg[rmz[5]];if(hmk)
{if(hmk===1)
{afz(true);}
ixv=false;}else
{ixv=true;}}
if(ixv)
{ynf=false;}else
{imq.stopPropagation();imq.preventDefault();imq.preventBubble();ynf=true;}
return ixv;};xlb=function(imq)
{var ixv,hmk,rmz=[2,false,false,false,false,0,0];rmz[1]=imq.shiftKey;if(imq.ctrlKey&&imq.altKey)
{rmz[4]=true;}else
{rmz[2]=imq.ctrlKey;rmz[3]=imq.altKey;}
rmz[5]=imq.keyCode;rmz[6]=imq.which;if(rmz[5]===13)
{ixv=false;afz(true);}else if(rmz[2])
{ixv=gct(rmz[5],rmz[1],3);}else
{hmk=window.top.kbg[rmz[5]];if(hmk)
{if(hmk===1)
{afz(true);}
ixv=false;}else
{ixv=true;}}
if(ixv)
{ynf=false;}else
{imq.stopPropagation();imq.preventDefault();imq.preventBubble();ynf=true;}
return ixv;};mwo=function()
{var imq,ixv,hmk,rmz=[bko,false,false,false,false,0,0];imq=window.event;rmz[1]=imq.shiftKey;if(imq.ctrlKey&&imq.altKey)
{rmz[4]=true;}else
{rmz[2]=imq.ctrlKey;rmz[3]=imq.altKey;}
rmz[5]=imq.keyCode;if(rmz[5]===13)
{ixv=false;afz(true);}else if(rmz[2])
{ixv=gct(rmz[5],rmz[1],4);}else
{hmk=window.top.kbg[rmz[5]];if(hmk)
{if(hmk===1)
{afz(true);}
ixv=false;}else
{ixv=true;}}
if(ixv)
{ynf=false;}else
{ynf=true;imq.stopPropagation();imq.preventDefault();imq.preventBubble();}
return ixv;};oob=function(imq)
{if(zwc){return false;}
switch(window.top.yzf)
{case 1:return bhx();case 2:return gfi(imq);case 3:return fyp(imq);case 4:return iix();case 5:return bhx();default:return bhx();}};bhx=function()
{var imq,ixv,zwq;imq=window.event;zwq=imq.keyCode;if(window.top.etr[zwq])
{eza(window.top.etr[zwq],1);ixv=false;imq.cancelBubble=true;imq.returnValue=false;}else
{ixv=true;imq.cancelBubble=false;imq.returnValue=true;}
if(window.top.bha)
{ldu(1);}
return ixv;};gfi=function(imq)
{var zwq,ixv;zwq=imq.charCode;if(ynf)
{imq.stopPropagation();imq.preventDefault();imq.preventBubble();return false;}
if(window.top.etr[zwq])
{eza(window.top.etr[zwq],2);ixv=false;imq.stopPropagation();imq.preventDefault();imq.preventBubble();}else
{ixv=true;}
ldu(2);return ixv;};fyp=function(imq)
{var zwq,ixv;zwq=imq.which;if(ynf)
{imq.stopPropagation();imq.preventDefault();imq.preventBubble();return false;}
if(window.top.etr[zwq])
{eza(window.top.etr[zwq],3);ixv=false;imq.stopPropagation();imq.preventDefault();imq.preventBubble();}else
{ixv=true;}
ldu(3);return ixv;};iix=function()
{var imq,ixv,zwq;imq=window.event;if(ynf)
{imq.stopPropagation();imq.preventDefault();imq.preventBubble();return false;}
zwq=imq.keyCode;if(window.top.etr[zwq])
{eza(window.top.etr[zwq],4);ixv=false;imq.stopPropagation();imq.preventDefault();imq.preventBubble();}else
{ixv=true;}
ldu(4);return ixv;};ldu=function(bko)
{var swr,rqn,ywl;switch(bko)
{case 1:swr=kew.createTextRange();ywl=swr.boundingWidth+8;break;case 2:ywl=(kew.value.length*12);break;case 3:ywl=(kew.value.length*12);break;case 4:ywl=(kew.value.length*12);}
rqn=kew.offsetWidth;if(ywl>rqn)
{kew.style.width=ywl.toString()+"px";}};dmx=function(mgs)
{var ecw;if(window.event)
{ecw=window.event;ecw.cancelBubble=true;ecw.returnValue=false;}else
{ecw=mgs;ecw.stopPropagation();ecw.preventDefault();}
return false;};afz=function(xmn)
{if(kew&&rsu)
{window.parent.okl();rsu.innerHTML=hpd(kew.value);kew.value="";kew=null;if(xmn)
{xic();}}};hpd=function(tyg)
{var izm,vzm,xwx,hhn,ons,wbo,cew,aol;izm=tyg.replace(/\s+/g,"");if(izm==="")
{isk.pok[cox].eho="";return isk.xgi.wyx;}
cew=isk.pok[cox].uey;vzm="";xwx="";for(hhn=0;hhn<izm.length;hhn++)
{wbo=izm.charCodeAt(hhn);if(window.top.bxs[wbo])
{vzm=vzm+window.top.bxs[wbo];xwx=xwx+window.top.bxs[wbo];}else
{ons=izm.charAt(hhn);if(hhn<cew.length)
{aol=cew.charCodeAt(hhn);if(aol>64&&wbo<91)
{ons=ons.toUpperCase();}else if(aol>96&&wbo<123)
{ons=ons.toLowerCase();}}
vzm=vzm+ons;xwx=xwx+ons;}}
isk.pok[cox].eho=xwx;return vzm;};hey=function(imq,oqp)
{if(window.top.yzf===1)
{imq=window.event;imq.cancelBubble=true;imq.returnValue=false;}else
{imq.stopPropagation();imq.preventDefault();}
if(!zwc)
{if(vly)
{sld(imq,oqp,true,null);}else
{rqf();}}else
{window.parent.okl();}
return false;};sld=function(ecw,oqp,iob,mxe)
{if(oqp!==rsu)
{if(rsu)
{unq();}
bdy(ecw,oqp,iob,mxe);}else
{bdy(ecw,oqp,iob,mxe);}
return false;};bdy=function(ecw,oqp,iob,mxe)
{var tsb=oqp.id;if(isk.pok[tsb].ydd<2)
{ktb(tsb);if(iob)
{spt("");}}
return false;};