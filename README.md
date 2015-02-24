WEATHER UNDERGROUND API DEMO APP
================================

Copyright © 2012-2015, Intel Corporation. All rights reserved.

See [LICENSE.md](<LICENSE.md>) for license terms and conditions.

Created lovingly for the developer community by Mashery.
<http://www.mashery.com>
<http://developer.mashery.com>

This Intel XDK project has just an `index.html` file with the basic html, head
and body tags required for building HTML5 mobile web apps. Use this template to
create a *packaged mobile web app*.

Intel(R) XDK
------------
This sample is part of the Intel XDK.
Download the Intel XDK at <http://xdk.intel.com>.

Application Files
-----------------
* app_framework/*
* css/*
* images/*
* index.html
* js/*
* lib/*
* xdk/*


SYNOPSIS
========
This demo App provides a way to see the Weather Underground API in action.
It is built using Intel's Cross Platform Development Kit (XDK)
that lets you create mobile apps for smartphones and tablets using
standard web languages (HTML5, CSS, and JavaScript).


WHAT DOES THIS APP DO?
======================
Uses the Weather Underground API to get Weather Forecast: Day, Weather Symbol
Icon, Text Forecast


GETTING STARTED
===============
You will need the following to get started -

1. The Intel XDK, a free download - <http://xdk.intel.com>
2. A Weather Underground API key (Register at <http://www.wunderground.com/weather/api/d/login.html>).


OBTAINING THE API KEY
=====================
Before you can begin using this app, you will need to get an API key
from Weather Underground at <http://www.wunderground.com/weather/api/d/login.html>


SETTING UP THE API KEY IN THIS APP
==================================
Once you have obtained your API key, go to xdk folder \> service-credentials.js
\> on line 11 type or paste your key into "PLACE-YOUR-API-KEY-HERE"


ABOUT THE Weather Underground API
=================================
Weather Underground's APIs allow developers to access weather information:
conditions, forecast, history, and more.

In this demo app we utilize the Weather Underground's Forecast Information:
Day, Weather Symbol Icon, Text Forecast. By using XDK's Explore Services
\> Weather Underground \> Type or Paste in your API Key in the designated input
field, you can observe how easy it is to make an API call.

Get detailed information about the Weather Underground APIs at
<http://www.wunderground.com/weather/api>


ABOUT THE MASHERY API NETWORK
=============================
The Mashery API Network (http://developer.mashery.com) is an open
data commons of over 40 RESTful APIs that developers can access
with their Mashery ID.

Mashery is the world's leading API management service provider, helping
companies provide the best API experience for developers, as well as
the most advanced API management and reporting tools to our clients.


EXPLORE MORE APIS
=================
Check out Mashery's API Network at <http://developer.mashery.com/apis>
to explore other awesome APIs including Beats Music, Edmunds.com, USA TODAY,
Rotten Tomatoes, Best Buy, and more.


SUPPORT
=======
If you have any questions or need any help obtaining an API key,
you can reach out to us at: <developer-relations@mashery.com>


Additional Notes from Blank App Designer Template
=================================================

Use this template as a starting point for an Intel XDK App Designer project that
will be distributed as a *packaged mobile web app*. The file named `init-dev.js`
included as part of this project contains init code that generates an
`app.Ready` event; which is used as a way to normalize how App Designer starts
its own code. This technique allows App Designer to use a standard init sequence
regardless of the specific package type (a *packaged web app* or a *Cordova web
app*).

The `icon.png` and `screenshot.png` files are not required by your project. They
are included for use by the Intel XDK template/demo panel and have no use within
a real app. You can safely delete them from your project directory.

You can build a *packaged Cordova web app* from this template that can be
submitted to a store using the "Cordova Hybrid Mobile App Platforms” build tiles
(for Crosswalk, Android, iOS and Windows). The `intelxdk.config.additions.xml`
file can be used to include options that control your *packaged Cordova web app*
builds. For example, you can set the splash screen display time for a packaged
Android or Crosswalk Cordova app using this file.

Do not be alarmed if you see a "*Failed to load resource:
net::ERR\_FILE\_NOT\_FOUND*" message caused by the `cordova.js` script in your
`index.html` file. The `cordova.js` script is *only required* if you choose to
convert your "Standard HTML5 Project" into a "Standard HTML5 + Cordova Project."

You can:

-   safely ignore the "*Failed to load resource: net::ERR\_FILE\_NOT\_FOUND*"
    error message

or

-   comment out this script line if you will not be converting your project into
    a Cordova app that uses Cordova APIs.

The `cordova.js` script will be needed if you choose to convert your project to
a *Cordova project* and enhance your app with Cordova APIs. It is not required
to build a *Cordova packaged web app* for distribution via the Android, iOS and
Windows stores *if that app does not utilize Cordova APIs*.

This blank template does not require any Cordova APIs. If you would like to add
Cordova APIs to your application (via Cordova plugins) you must first convert
your project into a Cordova project. You can do this by clicking the Cordova
icon in the *Project Info* section on the **Projects** tab. Or, you can create a
new Cordova project using a Cordova blank template or a Cordova demo or sample
app as a starting point.

