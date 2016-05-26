
    // opens print window and preview
    // print only table body
    // also needs to capture images and suppress list numbers

function printContent(className) {
      var matchedElements = document.getElementsByTagName("tbody");
      
      var str = '';

      for (var i = 0; i < matchedElements.length; i++) {
          var str = str + matchedElements[i].innerHTML;
        }

      var newwin = window.open('', 'printwin', 'left=100,top=100,width=600,height=600');
      newwin.document.write('<html>\n<head>\n');
      newwin.document.write('<title>walking directions</title>\n');
      newwin.document.write('<link href="http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300" rel="stylesheet" type="text/css">\n');
      newwin.document.write('<link rel="stylesheet" href="googledirections.css">\n');
      newwin.document.write('<script>\n');
      newwin.document.write('function chkstate(){\n');
      newwin.document.write('if(document.readyState=="complete"){\n');
      newwin.document.write('window.close()\n');
      newwin.document.write('}\n');
      newwin.document.write('else{\n');
      newwin.document.write('setTimeout("chkstate()",2000)\n');
      newwin.document.write('}\n');
      newwin.document.write('}\n');
      newwin.document.write('function print_win(){\n');
      newwin.document.write('window.print();\n');
      newwin.document.write('chkstate();\n');
      newwin.document.write('}\n');
      newwin.document.write('<\/script>\n');
      newwin.document.write('</head>\n');
      newwin.document.write('<body onload="print_win()">\n');
      newwin.document.write(str);
      newwin.document.write('</body>\n');
      newwin.document.write('</html>\n');
      newwin.document.close();
    }