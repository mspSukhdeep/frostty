CHROME_EXT_INSTALL_URL = "";

function installExtension(successCallback, failureCallback) {
    function installSuccess(callback) {
        if (typeof callback === "function")
            callback();
    }

    function installFail(callback) {
        if (typeof callback === "function")
            callback();
    }

    if (window.chrome && chrome.webstore) {
        if (!$("link[rel='chrome-webstore-item'][href='" + CHROME_EXT_INSTALL_URL + "']").length) {
            $("head").append("<link rel='chrome-webstore-item' href='" + CHROME_EXT_INSTALL_URL + "'/>");
        }
        chrome.webstore.install(CHROME_EXT_INSTALL_URL, function() {
            installSuccess(successCallback);
        }, function() {
            installFail(failCallback);
        });
    } else {
        installFail(failCallback);
    }
}

$(document).ready(function() {

    $(window).on("scroll", function(e) {
        if ($(window).scrollTop() > 400) {
            $("header").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader");
        }
    });
});


$(document).on("click", ".js-instl-btn", function() {
	installExtension(function(){

	},
	function(){
		
	});
});
