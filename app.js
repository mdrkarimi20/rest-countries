var settings = {
    url: "https://restcountries.eu/rest/v2/all",
    method: "GET",
};

$.ajax(settings).done(function(response) {
    for (const country of response) {
        $("#select-country").append(
            `<option value="${country.alpha3Code}">${country.name}</option>`
        );
    }
});