function closeWarningWindow(containerid) {
	document.getElementById(containerid).style.display = "none";
}

function validateParameters() {
    const params = Object.fromEntries(new URLSearchParams(location.search));
    if (window.sessionStorage.getItem("isEnabled") == 'true' || params.username == "arriba") {
          window.history.pushState('preview', 'Title', 'preview?username=encoded');
          window.sessionStorage.setItem("isEnabled", true);
    	return true;
    } else {
      alert("Ошибка регистрации.");
        return false;
    }
}

/* Currently not working as div not loading
function openpdf() {
  //Change URL on the fly: 
  //window.history.pushState('preview', 'Title', 'preview2.html');
 if (validateParameters() == true) {
  document.addEventListener("adobe_dc_view_sdk.ready", function(){
    var adobeDCView = new AdobeDC.View({clientId: "5b0a8656ad40443a873cddcfeb60b7d9", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
      content:{ location:
        { url: "files/demo.pdf"
        }},
      metaData:{fileName: "Demo.pdf"}
    },
    {
      embedMode: "SIZED_CONTAINER"
    });
  })}
  else {
   console.log("error getting parameter!")
 }
}*/
