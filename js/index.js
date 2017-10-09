window.onload=function(){

//header开始
	let headerRight=document.getElementsByClassName('header-right')[0];
	let headerlis=headerRight.getElementsByTagName('li');
	// console.log(headerlis)
	let none1=headerRight.getElementsByClassName('none1');
	console.log(none1)
	headerlis[0].onmouseover=function(){
		headerlis[0].style.background='#fff';
		none1[0].style.display='block';
		
	}
	headerlis[0].onmouseout=function(){
		headerlis[0].style.background='none';
		none1[0].style.display='none';
	}
	headerlis[3].onmouseover=function(){
		headerlis[3].style.background='#fff';
		none1[1].style.display='block';
		
	}
	headerlis[3].onmouseout=function(){
		headerlis[3].style.background='none';
		none1[1].style.display='none';
	}
	headerlis[5].onmouseover=function(){
		headerlis[5].style.background='#fff';
		none1[2].style.display='block';
		
	}
	headerlis[5].onmouseout=function(){
		headerlis[5].style.background='none';
		none1[2].style.display='none';
	}
	headerlis[7].onmouseover=function(){
		headerlis[7].style.background='#fff';
		none1[3].style.display='block';
		
	}
	headerlis[7].onmouseout=function(){
		headerlis[7].style.background='none';
		none1[3].style.display='none';
	}
	headerlis[8].onmouseover=function(){
		headerlis[8].style.background='#fff';
		none1[4].style.display='block';
		
	}
	headerlis[8].onmouseout=function(){
		headerlis[8].style.background='none';
		none1[4].style.display='none';
	}


//////////////////////////////////////////////////////////////////////////
//侧导航开始
	let aside=document.getElementsByTagName('aside')[0];
	// console.log(aside)
	let lis=document.querySelectorAll('aside > .banner-left >li');
	// console.log(lis)
	
	// 只有用第三种方法时,才不需要下一行代码
	let items=aside.getElementsByClassName('item');
	
	console.log(items);
	
//第一种方法
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onmouseover=function(){
	// 		items[i].style.display='block';
	// 	}
	// 	lis[i].onmouseout=function(){
	// 		items[i].style.display='none';
	// 	}
	// }
// 第二种方法 
		// for(let i=0;i<lis.length;i++){
		// lis[i].onmouseover=function(){
		// 	items[i].className='item block';
		// }
		// lis[i].onmouseout=function(){
		// 	items[i].className='item';
		// }

//第三中方法 
		for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let item=this.getElementsByClassName('item')[0];	
			item.style.display='block';
		}
		lis[i].onmouseout=function(){
		let item=this.getElementsByClassName('item')[0];	
			item.style.display='none';
		}
	}

// btns开始
	let bannerbtnlist=document.getElementsByClassName('banner-btn-list')[0];
	let btnlis=bannerbtnlist.getElementsByTagName('li');
	// console.log(btnlis)
	let viewimg=document.getElementsByClassName('view-img')[0];
	let viewimgli=viewimg.getElementsByTagName('li');
// console.log(viewimgli)

//方法一	
// 默认第一个btn的颜色与边框显示
	let num=0;	
	btnlis[0].style.background='rgba(255,255,255,0.8)';
	for(let i=0;i<btnlis.length;i++){
		btnlis[i].onmouseover=function(){
			for(let i=0;i<viewimgli.length;i++){
				viewimgli[i].style.zIndex=1;
				btnlis[i].style.background='';
				
			}
			viewimgli[i].style.zIndex=2;
			btnlis[i].style.background='rgba(255,255,255,0.8)';
			num=i;
			}

	}

//图片自动轮播
	let t=setInterval(move,2000);
	
	function move(){
		num++;
		if(num==viewimgli.length){
			num=0;
		}
		for(let i=0;i<viewimgli.length;i++){
			viewimgli[i].style.zIndex=1;
			btnlis[i].style.background='#9D9890';
			
		}
		viewimgli[num].style.zIndex=2;
		btnlis[num].style.background='#fff';
		
	}


		
	//方法二 只操作两张图片(now默认第一张与下一张被点击的图)
	// let now=0;
	// btnlis[0].style.background='#fff';
	// for(let i=0;i<btnlis.length;i++){
	// 	btnlis[i].onmouseover=function(){
	// 		viewimgli[now].style.zIndex=1;
	// 		btnlis[now].style.background='';
	// 		viewimgli[i].style.zIndex=2;
	// 		btnlis[i].style.background='#fff';
	// 		now=i;
	// 		num=now;
	// 	}
	// }


//鼠标移入让轮播停止
	let view=$('.view')[0];

	view.onmouseenter=function(){
		clearInterval(t);
	}
	view.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	
/////////////////////////////////////////////////////////////////////////

//侧左导航开始
	let navwarpli=document.querySelectorAll('.nav-warp li');
	let asidezuo=document.querySelectorAll('.asidezuo');
	let ch=innerHeight;
	let floorArr=[];
	let flag=true;
	asidezuo.forEach(element=>{
		floorArr.push(element.offsetTop);
	})

	let color=['#ff0036','#64C333','#ff0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ff0036','#999'];
	navwarpli.forEach((element,index)=>{
				element.onclick=function(){
					for(let i=1;i<navwarpli.length;i++){
						navwarpli[0].style.background='#ff0036';
						navwarpli[i].style.background='#666';
						navwarpli[navwarpli.length-1].style.background='#999';
					}
					flag=false;
					element.style.background=color[index];
					animate(document.body,{scrollTop:floorArr[index]},function(){flag=true;})
				
				}

			})

	


		let navwrap=document.getElementsByClassName('nav-warp')[0];
		let tmsearch=document.getElementsByClassName('tm-search')[0];

	window.onscroll=function(){

		let scrolltop=document.body.scrollTop;
		let pinpai1=document.getElementsByClassName('pinpai1')[0];
		let navwarpright=document.getElementsByClassName('nav-warp-right')[0];
		console.log(navwarpright)
		
		let pinpai1top=pinpai1.offsetTop;
		if(!flag){
			return;
		}
		//滑动时侧导航的隐藏与显示    //////////////////////////////////////////////////
		if(scrolltop+ch>=pinpai1top+300){
			navwrap.style.opacity='1';
		}
		
		if(scrolltop+ch>=pinpai1top+500){
			tmsearch.style.transform='translateY(0px)';
			navwarpright.style.opacity=1;
		}
		if(scrolltop==0){
			navwrap.style.opacity='0';
			tmsearch.style.transform='translateY(-51px)';
		}
		
		
		console.log(scrolltop)
		floorArr.forEach((value,index)=>{
			if(scrolltop+ch >=value+400){
				for(let i=1;i<navwarpli.length;i++){
						navwarpli[0].style.background='#ff0036';
						navwarpli[i].style.background='#666';
						navwarpli[navwarpli.length-1].style.background='#999';
					}
					navwarpli[index].style.background=color[index];

			}
		})
	}
	
	//点击侧导航顶部按钮
	let scrolltop1=document.body.scrollTop;
	console.log(scrolltop1)
	console.log(navwarpli[9])
	navwarpli[9].onclick=function(){
		flag=false;
		animate(document.body,{scrollTop:floorArr[0]},function(){flag=true;})
		// navwrap.style.opacity='0';
		// tmsearch.style.display='none';
		
	}

//侧左导航方块显示
	let navwarplis=document.querySelectorAll('.nav-warp-right img');
	console.log(navwarplis);
	let yincangs=document.querySelectorAll('.nav-warp-right .yincang');
	
	let yincangarr=[];
	yincangs.forEach(element=>{
		yincangarr.push(element);
	})
	// console.log(yincangarr)
	navwarplis.forEach((element,index)=>{
		element.onmouseover=function(){
			// animate(yincangs[index],{transform:translateX(65px)});
			yincangs[index].style.transform='translateX(65px)';
			yincangs[index].style.opacity=1;
		}
		element.onmouseout=function(){
			yincangs[index].style.transform='translateX(0px)';
			yincangs[index].style.opacity='0';
		}
	})


}



