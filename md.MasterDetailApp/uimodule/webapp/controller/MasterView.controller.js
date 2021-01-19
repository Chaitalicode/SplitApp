sap.ui.define([
    "md/MasterDetailApp/controller/BaseController"
], function (Controller) {
    "use strict";

    return Controller.extend("md.MasterDetailApp.controller.MasterView", {

        onInit: function () {

        },
        onSelect: function (oEvent) {
            debugger;
            var oItem = oEvent.getParameters().listItem;
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteApp", {
                miniArg: oItem.getBindingContextPath().substr(11)

            });
           
        }
    });
});
