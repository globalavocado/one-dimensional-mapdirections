
    // opens print window and preview
    // print only table body
    // also needs to capture images and suppress list numbers

function printDirections()
{
 var printContent = document.getElementById('directionspanel');
 var WinPrint = window.open('', '', 'width=700,height=650');
 WinPrint.document.write(printContent.innerHTML);
 WinPrint.document.close();
 WinPrint.focus();
 WinPrint.print();
 WinPrint.close();
}