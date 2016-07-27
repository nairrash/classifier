
//IIFE that takes in DOm and jquery as a dependency
(function(global,$){

  var Classifier = function(input,type){
    return new Classifier.init(input,type);
  };
    
    
    var supportedActors = ['ip','url'];

  Classifier.prototype = {

  };
    

  Classifier.init = function(input,type){
    var self = this;
    self.input = input || 'No values to process';
    self.type = type || '';
  };

  Classifier.init.prototype = Classifier.prototype;
  global.Classfier = global.C$ = Classifier;
    
  var validateUrl = function(str){
    var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
      '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
      //'((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
      '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
      '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
      '(\#[-a-z\d_]*)?$','i');
    if(!pattern.test(str)){
      return false;
    }
    else {
        return true;
    }
  };
  var validateIp = function(str) {
    var pattern = '/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/';
    if(!pattern.test(str)){
      return false;
    }
    else {
      return true;
    }
  }
}(window,jQuery));