sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Token"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Token) {
        "use strict";

        return Controller.extend("com.app.booksdetails.controller.Home", {
            onInit: function () {
                var oView = this.getView();
                // set explored app's demo model on this sample
                var oMultiInput1 = oView.byId("multiInput1");
                oMultiInput1.addValidator(function (args) {
                
                    if (true) {
                        var text = args.text;

                        return new Token({ key: text, text: text });
                    }
                });
                var oMultiInput2 = oView.byId("multiInput2");
                oMultiInput2.addValidator(function (args) {
                    if (true) {
                        var text = args.text;

                        return new Token({ key: text, text: text });
                    }
                });
                var oMultiInput3 = oView.byId("multiInput3");
                oMultiInput3.addValidator(function (args) {
                    if (true) {
                        var text = args.text;

                        return new Token({ key: text, text: text });
                    }
                });

            },

            onGoPress: function () {
    
                const oView = this.getView(),

                    oIdFilter = oView.byId("multiInput1"),
                    sId = oIdFilter.getTokens(),

                    oTitleFilter = oView.byId("multiInput2"),
                    sTitle = oTitleFilter.getTokens(),

                    oAuthorFilter = oView.byId("multiInput3"),
                    sAuthor = oAuthorFilter.getTokens(),

                    oTable = oView.byId("idBooksTable"),
                    aFilters = [];

                sId.filter((element) => {
                    element ? aFilters.push(new Filter("ID", FilterOperator.EQ, element.getKey())) : "";
                })
                sTitle.filter((element1) => {
                    element1 ? aFilters.push(new Filter("title", FilterOperator.EQ, element1.getKey())) : "";
                })
                sAuthor.filter((element2) => {
                    element2 ? aFilters.push(new Filter("AuthorName", FilterOperator.EQ, element2.getKey())) : ""; 
                })
                oTable.getBinding("items").filter(aFilters);
            },

            onClearFilterPress: function () {
                const oView = this.getView(),
                    ID = oView.byId("multiInput1").removeAllTokens(),
                    title = oView.byId("multiInput2").removeAllTokens(),
                    Author = oView.byId("multiInput3").removeAllTokens()
            }

        });
    });
