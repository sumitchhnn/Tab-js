var tab = tab || {};
tab = {
	counter : 0,
	divCount : 0,
		init : function () {
			tab.initializeCSS();
			tab.initializeHTML();
			for(var i=0;i<document.getElementsByClassName('tab-content').length;i++)
			{
				document.getElementsByClassName('tab-control')[i].addEventListener('click',tab.clickEvent);
			}
		}, //end init function
		clickEvent:function(){
			for(var i=0;i<this.parentNode.parentNode.parentNode.getElementsByClassName('tab-control').length;i++)
			{
				this.parentNode.parentNode.parentNode.getElementsByClassName('tab-content')[i].classList.add('disableContent');
				this.parentNode.parentNode.parentNode.getElementsByClassName('tab-content')[i].classList.remove('contentActive');
			}
			for(var i=0;i<this.parentNode.parentNode.parentNode.getElementsByClassName('tab-control').length;i++) {
			  this.parentNode.parentNode.parentNode.getElementsByClassName('tab-control')[i].classList.add('disableButton');
			  this.parentNode.parentNode.parentNode.getElementsByClassName('tab-control')[i].classList.remove('buttonActive');
			}
			if(document.getElementById('tab-content-' + this.getAttribute('data-for')) !== undefined) {
			  document.getElementById('tab-content-' + this.getAttribute('data-for')).classList.add('contentActive');
			  document.getElementById('tab-content-' + this.getAttribute('data-for')).classList.remove('disableContent');
			  this.classList.add('buttonActive');
			  this.classList.remove('disableButton');
			} 
		},
		initializeHTML:function(){
			var elemButton;
			var elemDiv;
			for(var i=0;i<document.getElementsByClassName('tab-container').length;i++) {
				elemButton = (document.getElementsByClassName('tab-container')[i].getElementsByClassName('tab-control'));
				elemDiv = (document.getElementsByClassName('tab-container')[i].getElementsByClassName('tab-content'));
				for(var no=0;no<elemButton.length;no++) {
					tab.counter ++;
					elemButton[no].setAttribute('data-for', tab.counter);
				}
				for(var divNo=0;divNo<elemDiv.length;divNo++){
					tab.divCount++;
					elemDiv[divNo].setAttribute('id', 'tab-content-' + tab.divCount);
				}
			}
			for(var i=0; i< document.getElementsByClassName('tab-container').length ; i++){
				document.getElementsByClassName('tab-container')[i].getElementsByClassName('tab-control')[0].className += ' buttonActive';
				document.getElementsByClassName('tab-container')[i].getElementsByClassName('tab-content')[0].className += ' contentActive';
			}
		},
		initializeCSS :  function () {
			var style = document.createElement('style');
			var tabCss = ".tab-container { width : 500px; border-width : 1px; border-style : inset; boorder-color : black; border-radius : 5px} "+
			".row { width : 490px; border-radius: 5px; padding : 5px; background-color : #efefef}" + 
			".col { width: 500px;}" + ".tab-control {height: 50px; width : 100px; border : none; border-radius: 5px; color: black; background-color : #f6f6f6}" + 
			".tab-content{padding:10px; display: none;}.buttonActive{background-color:#007fff;color:#fff;}" + 
			".contentActive {padding:10px;display:block;}" + ".disableButton { color : black; background-color:#f6f6f6}" + ".disableContent { display: none;}";
			style.innerHTML = tabCss;
			document.head.append(style);
		}
};