// Custom styling
import "../css/main.css";

import "htmx.org";
import { prettyPrintJson, FormatOptions } from "pretty-print-json";


window.onload = function () {
  // Your code goes here
  var jsonView = document.getElementById("jsonView");
  if (jsonView) {
    const rawData = jsonView.getAttribute("json");
    const elem = document.getElementById("jsonView");

    const jsonData any = JSON.parse(rawData);

    if (elem) {
      const options: FormatOptions = { linkUrls: true };
      elem.innerHTML = prettyPrintJson.toHtml(jsonData, options);
    }
  }
};