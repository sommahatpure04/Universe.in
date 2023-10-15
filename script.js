var link = "https://docs.google.com/document/d/1N8Z7IjlfESuXYl_DrYrEmcp2yEShR3BS/edit?usp=sharing&ouid=101649739137671882686&rtpof=true&sd=true";
function share()
{
  var text = document.getElementById("myH5");
  alert(link);
  console.log(link);
  if (text.innerText === "") {
    text.textContent = link;
  }else {
    text.textContent = ""; 
  } 
}