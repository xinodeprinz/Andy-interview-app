require("./bootstrap");
require("bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
    resolve: async (name) =>
        await import(`./Pages/${name}`).then((module) => module.default),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

InertiaProgress.init({
    showSpinner: true,
    color: "purple",
    delay: 0,
    includeCSS: false,
});
