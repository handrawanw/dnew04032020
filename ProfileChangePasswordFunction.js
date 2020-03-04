
export function CheckPassword(info) {

let ProsesCek=new Promise((resolve,reject)=>{

if(Object.values(info).length>0){
let init=["old_password","password","confirm_password"],x=0,cek=false;
for(let i of init){
    if(!info.hasOwnProperty(i)){
        throw new Error(`Field password, nomor ${x+1} masih kosong`);
    }
 x++;
}
x=0;
resolve(true);
}else{
    throw new Error("Semua Field masih kosong");
}

});

ProsesCek.then(res=>{
if(res){//boolean
    if(info["password"]===info["confirm_password"]){
        if(typeof info["password"]==="string"){
            if(info["password"].length>=9){
                return true;
            }else{
                throw new Error("Password harus 9 digit");
            }
        }
    }else{
        throw new Error("Password tidak sama");
    }
}

}).then(res=>{
    
if(res){//boolean
    if(FilterPassword(info["password"])){
        if(FilterXSS(info["password"])){
            return true;
        }else{
            throw new Error("Password dangerous");
        }
    }
}


}).catch(err=>{
    return err;
});

return ProsesCek;
    
}


export function FilterPassword(info){
    let init={
        "Huruf Besar":/[A-Z]/g,
        "Huruf Kecil":/[a-z]/g,
        "Angka":/[0-9]/g,
        "Simbol":/[\W]/g,
    },cek=false;
    for(let i of Object.keys(init)){
        if(init[i].test(info)){
            cek=true;
        }else{
            throw new Error(`Password tidak memiliki ${i}`);
        }
    }
    return cek;
}

export function FilterXSS(info){
    if(escape(info)===unescape(info)){
        return true;
    }else{
        return false;
    }
}