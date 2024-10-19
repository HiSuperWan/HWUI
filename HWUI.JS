//感谢您使用HWUI，当您使用HWUI时，请不要修改load函数中的内容，这是不仅是对开发者的尊重，更是对开源社区的尊重，感谢您的理解，祝您的程序永不出BUG！
//您可以修改除load以外的所有函数内容 但请您标注“由HWUI修改”等字样 开源社区将因您变得更好！
//使用本UI请同时加载CSS与JS文件，请注意：UI的JS文件请优先加载，否则可能会调用失败！
//当前版本1.0预览版（不完美）
load();


let bodyEleNum = 0;
let firstLoad = false;
setInterval(() => {
    LoadButton();
    LoadHwInput();
    LoadHwSwitch();
}, 10);


function LoadHwSwitch(){
    const allHwSwitch = document.querySelectorAll("hw-switch");

    for(let i = 0 ; i < allHwSwitch.length ; i++){
        if(!allHwSwitch[i].classList.contains("HWUI-Element")){

        
        allHwSwitch[i].active = true;
        allHwSwitch[i].addEventListener("click",function(){
            allHwSwitch[i].active = !allHwSwitch[i].active;
            if(allHwSwitch[i].getAttribute("active") === "true"){
                allHwSwitch[i].setAttribute("active",false);
            }else{
                allHwSwitch[i].setAttribute("active",true);
            }
        }
    )
    }
        AddHWUIClass(allHwSwitch[i]);
    }
}
function LoadButton(){
    const hwButton = document.querySelectorAll("hw-button");

    for(let i = 0;i < hwButton.length ; i++){
        hwButton[i].classList.add("hw-default");
    }
}
function LoadHwInput(){
    const allHwInput = document.querySelectorAll("hw-input");

    for(let i = 0 ; i < allHwInput.length ; i++){
        if(!allHwInput[i].classList.contains("HWUI-Element")){
            const a = document.createElement("input");
            const placeholder = document.createElement("span");
    
            a.classList.add("hw-input");
            a.setAttribute("type",allHwInput[i].getAttribute("type"));
            setInterval(function(){
                if(a.value != ""){
                    placeholder.classList.remove("hw-input-ph")
                    placeholder.classList.add("hw-input-ph-2")
                }else{
                    placeholder.classList.remove("hw-input-ph-2")
                    placeholder.classList.add("hw-input-ph")
                }
            },10)
            placeholder.classList.add("hw-input-ph");
            placeholder.innerHTML = allHwInput[i].innerHTML;
            allHwInput[i].innerHTML = "";
            
            
            allHwInput[i].appendChild(a);
            allHwInput[i].appendChild(placeholder);
            AddHWUIClass(allHwInput[i]);
        }
    }
}

function GetEleClassChange(){

}

function AddHWUIClass(ele){
    ele.classList.add("HWUI-Element")
}

function load(){
    //load函数，请不要修改此函数的内容，十分感谢！
    console.log("HWUI已成功加载 | By HiSuperWan");
    console.log("GitHub -> https://github.com/HiSuperWan/HWUI");
    console.log("Website -> hisuperwan.com");
}