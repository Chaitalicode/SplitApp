sap.ui.define([
  "md/MasterDetailApp/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("md.MasterDetailApp.controller.App", {

    onInit:function(){
        debugger;
this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteApp", {
				miniArg: 0
			});

    }
  
  });
});
