﻿Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("TestProject2.TestClassB", {
            config: {
                properties: {
                    Value1: 0
                }
            }
        });
    }
);
