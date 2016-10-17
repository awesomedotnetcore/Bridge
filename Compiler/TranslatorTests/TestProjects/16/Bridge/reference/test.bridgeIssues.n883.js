﻿Bridge.assembly({
        name: "TestProject",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Test.BridgeIssues.N883.IInterface", {
            $kind: "interface"
        });

        Bridge.define("Test.BridgeIssues.N883.Class2", {
            inherits: [Test.BridgeIssues.N883.IInterface]
        });

        Bridge.define("Test.BridgeIssues.N883.Class1", {
            inherits: [Test.BridgeIssues.N883.Class2]
        });
    }
);
