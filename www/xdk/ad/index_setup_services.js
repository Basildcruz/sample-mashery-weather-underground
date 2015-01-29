var data_views   = { group:[], single:[], bindings:{}};

data_views.group.push({"model":{"icon_url":null,"title":null,"fcttext":null},"child":".uib_w_2","parent":".uib_w_1"});
data_views.single.push({"selector":".uib_w_3","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_2", "intel.xdk.services.weather1", ["forecast","txt_forecast","forecastday"], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_3", "uib_w_2_data", [], "null", data_views);
