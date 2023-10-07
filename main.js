menu_list_array = ["Mutton Curry",
                        "Butter Chicken Curry",
                        "Veg Curry",
                        "Dhaba Style Curry",
                        "Fish Curry",
                        "Red Chicken Curry"];
    
    function getmenu(){
        var htmldata="";
        var v= menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="Thai-Red-Curry-1-scaled.jpg">'
        var item=document.getElementById("add_item").value;
        var t= menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
