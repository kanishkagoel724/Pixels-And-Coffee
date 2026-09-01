//========== LOADING SCREEN ==========//
window.addEventListener("load",()=>{
    const loader=document.getElementById("loading-screen");
    setTimeout(()=>{
        loader.style.opacity="0";
        loader.style.visibility="hidden";
        loader.style.transition=".8s";
    },2200);
 }
);

//========== SPARKLE CLICK EFFECT ==========//
document.addEventListener("click",(e)=>{
    for(let i=0;i<10;i++){
        const sparkle=document.createElement("span");
        sparkle.classList.add("sparkle");
        sparkle.style.left=e.pageX+"px";
        sparkle.style.top=e.pageY+"px";
        sparkle.style.setProperty("--x",(Math.random()*160-80)+"px");
        sparkle.style.setProperty("--y",(Math.random()*160-80)+"px");

        document.body.appendChild(sparkle);
        setTimeout(()=>{
           sparkle.remove();
        },800);
    }
 }
);

//========== ENTER BUTTON ==========//
const enterBtn=document.querySelector(".enter-btn");
const steam=document.querySelectorAll(".steam span");
if(enterBtn){
    enterBtn.addEventListener("mouseenter",()=>{
        steam.forEach(item=>{
            item.style.animationDuration="1s";
         }
        );
     }
    );

    enterBtn.addEventListener("mouseleave",()=>{
        steam.forEach(item=>{
            item.style.animationDuration="2s";
         }
        );
     }
    );
}

//========== BUTTON CLICK ANIMATION ==========//
document.querySelectorAll("a").forEach(button=>{
    button.addEventListener("mousedown",()=>{
        button.style.transform="scale(.95)";
     }
    );

    button.addEventListener("mouseup",()=>{
        button.style.transform="";
     }
    );
 }
);

//========== PAGE FADE ==========//
document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",(e)=>{
        const target=link.getAttribute("href");
        if(target){
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(()=>{
                window.location.href=target;
             },500
            );
        }
     }
    );
 }
);

/*========== CUSTOM CURSOR ==========*/
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
        cursor.style.left=e.clientX+"px";
        cursor.style.top=e.clientY+"px";
        const spark=document.createElement("div");
        spark.classList.add("spark");
        spark.style.left=e.clientX+"px";
        spark.style.top=e.clientY+"px";
        document.body.appendChild(spark);
        setTimeout(()=>{
            spark.remove();
         },
         700
        );
}
);

/*========== CERTIFICATE POPUP ==========*/
const popup=document.getElementById("certificatePopup");
const popupImage=document.getElementById("popupImage");
const closePopup=document.querySelector(".close-popup");
function openCertificate(image){
    popup.style.display="flex";
    popupImage.src=image;
}

closePopup.onclick=function(){
    popup.style.display="none";
}

popup.onclick=function(e){
    if(e.target===popup){
        popup.style.display="none";
    }
}