
function makeAlbum(name, albumTitle, track=0){
    let obj ;
    if(track){
        obj = {name, albumTitle, track};
    }
    else{
        obj= {name, albumTitle}
    }
    return obj;
}
console.log(makeAlbum("tar","tarqa"))
console.log(makeAlbum("john","musoca ma"))
console.log(makeAlbum("rahul","kda oa",8))