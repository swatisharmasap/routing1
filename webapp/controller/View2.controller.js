sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.routing1.controller.View2", {
            onInit: function () {

            },
            onPressButton2:function(){
                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView1");
            }
        });
    });
