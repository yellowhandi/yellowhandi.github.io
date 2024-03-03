function openPdfInNewTab(pdfFileName) {
      var baseUrl = window.location.href;
	  var directoryUrl = baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1);
	  var pdfUrl = directoryUrl + pdfFileName;
	  window.open(pdfUrl, '_blank');
    }