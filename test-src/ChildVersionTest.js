//example of inheritance

ChildVersionTest = new TestCase('ChildVersionTest');

ChildVersionTest.prototype.testInheritance = function(){
   var testClassExample = jslix.Class(
            jslix.version,
            function(dispatcher){
                jslix.version.call(this, dispatcher);
                this.setVersion(Math.floor((Math.random()*10)+1));
            }
        );

    var sample;
    assertNoException(function(){
                        sample = new testClassExample(jslix.dispatcher)
                      });

    assertNotNull(sample.getVersion());

    sample.init("hell", "2.0");
    sample._os = "JSLiX";

    assertEquals(sample.getName(), "hell");
    assertEquals(sample.getOs(), "JSLiX");
};