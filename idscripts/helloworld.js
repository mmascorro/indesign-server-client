var mydoc = app.documents.add();
var mypage = mydoc.pages.item(0);
var txtframe = mypage.textFrames.add();
txtframe.geometricBounds = ["1in","1.5in","4in","7.5in"];
txtframe.contents = "Hello World";
mydoc.save( new File("/C/temp/test1.indd") );
app.documents.item(0).close();
