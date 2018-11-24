let test1 = true
let test2 = true

function acendeLampada(id) {
    if(id == "lamp1" && test1 == true){
        document.getElementById("lamp1").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo04UaogLw_PwlL6jhMTQVV1km6BXVlwqdkKz0VNXC3ClzfL3osg"
    }
    else if(id == "lamp2" && test2 == true){
        document.getElementById("lamp2").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo04UaogLw_PwlL6jhMTQVV1km6BXVlwqdkKz0VNXC3ClzfL3osg"

    }
}

function apagaLampada(id) {
    if(id == "lamp1" && test1 == true){
        document.getElementById("lamp1").src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSp6RKb03wWf43hC36BXkwabVQ_Q4UelzZlQV3a-m_-Hr5pjyzWtw"
    }
    else if(id == "lamp2" && test2 == true){
        document.getElementById("lamp2").src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSp6RKb03wWf43hC36BXkwabVQ_Q4UelzZlQV3a-m_-Hr5pjyzWtw"

    }
}

function quebraLampada(id) {
    if(id == "lamp1" && test1 == true) {
        document.getElementById("lamp1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_Ybg88YBY4oVSTVLcyFyTmGOzjJRqWHNWERWFk653dPi5moKe"
        test1 = false
    }
    else if(id == "lamp2" && test2 == true){
        document.getElementById("lamp2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_Ybg88YBY4oVSTVLcyFyTmGOzjJRqWHNWERWFk653dPi5moKe"
        test2 = false
    }
    else if(id == "lamp1" && test1 == false){
        test1 = true
        document.getElementById("lamp1").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo04UaogLw_PwlL6jhMTQVV1km6BXVlwqdkKz0VNXC3ClzfL3osg"
    }
    else if(id == "lamp2" && test2 == false){
        test2 = true
        document.getElementById("lamp2").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo04UaogLw_PwlL6jhMTQVV1km6BXVlwqdkKz0VNXC3ClzfL3osg"
    }
}