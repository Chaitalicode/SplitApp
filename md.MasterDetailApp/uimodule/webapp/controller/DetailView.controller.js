sap.ui.define([
  "md/MasterDetailApp/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("md.MasterDetailApp.controller.DetailView", {

    onInit:function(){
        debugger;
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter.getRoute("RouteApp").attachPatternMatched(this._onObjectMatched, this);
             var data ={
                "color":"Pink"
            };
            var jsn = new sap.ui.model.json.JSONModel(data);           
            this.getView().byId("idText").setModel(jsn,"NModel");

    },
    _onObjectMatched: function (oEvent) {	
        debugger;	
			var oArg = oEvent.getParameters("arguments");
			var oView = this.getView();
			oView.setModel(this.getOwnerComponent().getModel());
			oView.bindElement("/Employees/" + oArg.arguments.miniArg);
		}
  });
});
