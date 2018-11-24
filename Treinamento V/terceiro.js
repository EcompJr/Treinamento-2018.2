let test = true

function acendeLampada() {
    if(test == true){
        document.getElementById("lampada").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo04UaogLw_PwlL6jhMTQVV1km6BXVlwqdkKz0VNXC3ClzfL3osg"
    }
}

function apagaLampada() {
    if(test == true){
        document.getElementById("lampada").src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSp6RKb03wWf43hC36BXkwabVQ_Q4UelzZlQV3a-m_-Hr5pjyzWtw"
    }
}

function quebraLampada() {
    if(test == true) {
        document.getElementById("lampada").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_Ybg88YBY4oVSTVLcyFyTmGOzjJRqWHNWERWFk653dPi5moKe"
        test = false
    }
    else{
        test = true
        document.getElementById("lampada").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo04UaogLw_PwlL6jhMTQVV1km6BXVlwqdkKz0VNXC3ClzfL3osg"
    }
}