﻿Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N524.Bridge524", {
            statics: {
                callAsGetter: function () {
                    var list = new (Test.BridgeIssues.N524.Bridge524.ImmutableList$1(System.Int32))();
                    var firstValue = list[0];
                }
            }
        });
    }
);
