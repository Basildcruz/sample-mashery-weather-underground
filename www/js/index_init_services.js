/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */


data_support.ready(intel.xdk.services.weather1.bind(null, {"lang":"","pws":"1","bestfct":"1","xdkFilter":null}));