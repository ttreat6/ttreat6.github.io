/*Updated on 02/24/2018| version 2.5 | MIT License*/
html {
    height: 100%;
}

body {
    height: 100%;
    font-family: Cairo, sans-serif;
    font-size: 14px;
}

.cesium-viewer-cesiumWidgetContainer {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

h1 {
    margin-top: 25%;
    font-family: Cairo, sans-serif;
    color: rgba(255, 255, 255, 0.95);
    font-size: 4vw;
    text-shadow: 0 0 6px rgba(0, 0, 0, .95);
}

.storymap-trigger {
    left: 0;
    margin-top: -10px;
    position: fixed;
    /* top: 33.3333%; */
    width: 3px;
    height: 3px;
}

.storymap-story {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 1000px;
    display: block;
    z-index: 1000;
    background-color: rgba(238, 238, 238, 0);

}

.storymap-map {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 900;
    display: block;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #f5f5f5;
}

@media (min-width: 768px) {
    .storymap-story {
        width: 600px;
    }

}

@media (min-width: 0px) and (max-width: 767px) {

    .storymap-story {
        width: 100%;
    }

    .storymap-map {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        min-width: 100%;
        min-height: 100%;
        display: block;
        overflow-x: hidden;
        overflow-y: hidden;
        background-color: #f5f5f5;
    }

    .viewing {
        background: rgba(221, 221, 221, 0.3);
    }

    .storymap-scroll-down {
        display: none;
    }

}

section {

    padding: 5px 15px 10px 15px;
    margin: 5px;
    border-radius: 5px;
    background: #eee;
    opacity: 0;
    /*color: #111111;*/
}

.viewing {
    color: #1c1c1c;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-opacity: 1;
}

.fullscreen {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 0;
    min-height: 100%;
    min-width: 100%;
    /*pointer-events: none;*/
    display: block;
}

.canvas-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/*transparent the story panel but still able to trigger events*/

.section-opacity {
    opacity: 1;
    filter: alpha(opacity=100);
    opacity: 1;
    -moz-opacity: 1;
    width: 0;
    padding: 0 0 0 0;
}

.storymap-loader {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 1px rgba(197, 197, 197, 0.95);
    position: fixed;
    top: 45%;
    left: 50%;
    font-size: 50px;
    z-index: 1003;
    animation: spin 1.2s linear infinite;

}

.storymap-screenloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 400%;
    height: 400%;
    background: rgb(238, 238, 238);
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display: block;
    z-index: 1002;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.storymap-navwidget {
    position: fixed;
    top: 40%;
    left: 0;
    z-index: 1005;
    font-size: 16px;
    color: rgba(63, 63, 63, 0.3);
    background: rgba(115, 115, 115, 0.2);
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    opacity: 0;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
}

.storymap-navwidget > li {
    position: relative;
    display: block !important;
    cursor: pointer;

}

.storymap-navwidget li a {
    padding: 6px;
    -webkit-text-stroke: 1px rgba(35, 35, 35, 0.7);
    text-shadow: 0 1px 2px rgba(81, 81, 81, 0.95);
}

.storymap-navwidget li a:visited,
.storymap-navwidget li a:active,
.storymap-navwidget li a:link {
    color: rgba(62, 62, 62, 0.6);
    text-decoration: none;
}

.storymap-navwidget li a:hover {
    color: rgba(218, 218, 218, 0.7);
    text-decoration: none;
}

/*support video in IE 8 and 9*/

video {
    display: block;
}

.storymap-scroll-down {
    cursor: pointer;
    z-index: 1001;
    font-size: 4vw !important;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 1px rgba(197, 197, 197, 0.95);
}

.storymap-scroll-down:hover {
    color: rgba(200, 200, 200, 0.9);
    text-shadow: 0 1px 1px rgba(150, 150, 150, 0.95);
}

.storymap-attribution {
    font-family: Cairo, sans-serif;
    background: rgba(255, 255, 255, 0.6) !important;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
}

.storymap-attribution a:visited,
.storymap-attribution a:active,
.storymap-attribution a:link {
    color: #333333;
    text-decoration: none;
}

.storymap-legend {
    position: fixed;
    line-height: 16px;
    width: 100px;
    z-index: 1000;
    right: 20px;
    top: 30px;
    display: none;
    color: #333333;
    font-family: Cairo, sans-serif;
    padding: 6px 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
}

.storymap-legend i {
    width: 16px;
    height: 16px;
    float: left;
    margin-right: 8px;
    opacity: 1;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}

.storymap-legend img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
    float: left;
}

.storymap-legend p {
    font-size: 12px;
    line-height: 16px;
    margin: 0;
}

.storymap-progressline {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    z-index: 1030;
    background: rgba(255, 30, 0, 0.80);
    box-shadow: 0 0 2px rgba(98, 16, 0, 0.9);
}

nav {
    height: 34px !important;
    z-index: 1001;
}

nav .navbar-brand {
    padding-top: 2px !important;
    padding-bottom: 0 !important;
    height: 28px;
}

.btn {
    position: fixed;
    cursor: pointer;
    font-size: 18px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    color: rgba(169, 169, 169, 0.8);
    z-index: 1005;
    top: 20px;
    left: 5px;
}

.btn:hover {
    color: rgba(0, 117, 255, 0.6);
    text-decoration: none;
}
