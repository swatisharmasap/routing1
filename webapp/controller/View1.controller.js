sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.routing1.controller.View1", {
            onInit: function () {

            },
            onPressButton1:function(){

                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView2");

            }
        });
    });
