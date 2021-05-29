Guestname =[];



function submit()
{
    
    var submit_Guest_list = [];
    var Guest_list = document.getElementById("name_of_the_guest_1").value;
    Guestname.push(Guest_list);
    console.log(Guest_list);
    submit_Guest_list.push(Guestname);
    console.log(submit_Guest_list);
    
    document.getElementById("display_name_with_commas").innerHTML = submit_Guest_list;
    
}

function show()
{
    var Guestname_show = [];

    var length_of_Guestname = Guestname.length;
    console.log(length_of_Guestname);
  
    for (var k = 0; k < length_of_Guestname; k++)  
   {
      Guestname_show.push("<h4>"+Guestname[k]+"</h4>");
  console.log(Guestname_show);
   }
    
   var remove_commas = Guestname_show.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function sort()
{
  Guestname.sort();
  console.log(Guestname);
  
  var Guestname_sort = [];

  var length_of_Guestname = Guestname.length;
  console.log(length_of_Guestname);

  for (var k = 0; k < length_of_Guestname; k++)  
 {
    Guestname_sort.push("<h4>"+ Guestname[k]+"</h4>");
console.log(Guestname_sort);
 }

 var remove_commas1 = Guestname_sort.join(" ");
 console.log(remove_commas1);
 document.getElementById("display_sort_without_commas").innerHTML = remove_commas1;

}

function search()
{
    var s= document.getElementById("search_input").value
    var found=0;
    var j;
    for(j=0; j<Guestname.length; j++)
    {
        if(s==Guestname[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
console.log("found name  " + found + "  time/s") 
}