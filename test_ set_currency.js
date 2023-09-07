function set_currency(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();
    var country = formContext.getAttribute("new_gti").getValue();
    
    if (country === 100000000) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "69084001-a691-ec11-b400-000d3a3488ae",name: "USD", entityType: "transactioncurrency" }]);
    } else if (country === 100000001) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "4cc9650e-9da9-ec11-983f-000d3a5c94e0",name: "Peso Colombiano", entityType: "transactioncurrency" }]);
    }else if (country === 100000002) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "23b0b81c-9da9-ec11-983f-000d3a5c94e0",name: "Peso Argentino", entityType: "transactioncurrency" }]);
    }else if (country === 100000003) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "73581d3a-9da9-ec11-983f-000d3a5c94e0",name: "Peso Chileno", entityType: "transactioncurrency" }]);
    }else if (country === 100000004) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "80da4c2a-9da9-ec11-983f-000d3a5c94e0",name: "Real", entityType: "transactioncurrency" }]);
    }else if (country === 100000005) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "267345c3-2ac7-ec11-a7b6-0022480b99b2",name: "colón costarricense", entityType: "transactioncurrency" }]);
    }else if (country === 100000007) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "b6dbebda-ded2-ec11-a7b5-000d3a35a9f1",name: "Quetzal", entityType: "transactioncurrency" }]);
    }else if (country === 100000008) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "e5b1243c-88d1-ec11-a7b5-000d3a35a9f1",name: "lempira hondureño", entityType: "transactioncurrency" }]);
    }else if (country === 100000009) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "6a534c46-9da9-ec11-983f-000d3a5c94e0",name: "Mexican peso", entityType: "transactioncurrency" }]);
    }else if (country === 100000011) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "15f43dd6-1ab6-ec11-983f-0022480bf6ef",name: "Sol Peruano", entityType: "transactioncurrency" }]);
    }else if (country === 100000013) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "290b7715-88d1-ec11-a7b5-000d3a35a9f1",name: "peso dominicano", entityType: "transactioncurrency" }]);
    }else if (country === 100000014) {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "b079ef1c-dfd2-ec11-a7b5-000d3a35a9f1",name: "peso uruguayo", entityType: "transactioncurrency" }]);
    }else {
        formContext.getAttribute("transactioncurrencyid").setValue([{ id: "69084001-a691-ec11-b400-000d3a3488ae",name: "USD", entityType: "transactioncurrency" }]);
    }
}
