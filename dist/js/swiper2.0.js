var swiper=function(){var e,t,n,l,i,o,c,r=0;return{init(r){e=document.querySelector(r),c=e.clientWidth,i=e.querySelector(".left-btn"),o=e.querySelector(".right-btn"),t=e.firstElementChild,n=t.nextElementSibling,l=n.children;for(let e=0;e<l.length;e++)l[e].index=e;var s=t.firstElementChild,a=t.lastElementChild;t.appendChild(s.cloneNode(!0)),t.insertBefore(a.cloneNode(!0),s),t.style.left=-c+"px",this.event()},event(){const e=this;n.addEventListener("click",function(t){var n=(t=t||window.event).target||t.srcElement;"LI"===n.nodeName&&(r=n.index,e.showImage())},!1),i.onclick=function(){r--,e.showImage()},o.onclick=function(){r++,e.showImage()}},showImage(){console.log(r),r<0?(t.style.left=-(l.length+1)*c+"px",r=l.length-1):r>l.length-1&&(t.style.left=0,r=0);for(let e=0;e<l.length;e++)l[e].classList.remove("active");l[r].classList.add("active"),move(t,{left:-(r+1)*c},500)}}}();