$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("messenger.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.before({
  "duration": 4464943669,
  "status": "passed"
});
formatter.before({
  "duration": 926851,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 210349512,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify signup button",
  "description": "",
  "id": "login-feature;verify-signup-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@login1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter makbule into firstname text field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter angun into lastname text field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that signup button is disable at homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "makbule",
      "offset": 8
    },
    {
      "val": "firstname",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 1144315949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "angun",
      "offset": 8
    },
    {
      "val": "lastname",
      "offset": 19
    }
  ],
  "location": "LoginPageSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 2080101445,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.signupButtonIsEnable()"
});
formatter.result({
  "duration": 1041757915,
  "status": "passed"
});
formatter.after({
  "duration": 118969987,
  "status": "passed"
});
formatter.after({
  "duration": 197707,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Signup form should not accept any invalid email address",
  "description": "",
  "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@enterData"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter Test into firstname text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Test into lastname text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u003cemail\u003e into Mobilenumber text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on email text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Error Message for invalid email on homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 23,
      "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;1"
    },
    {
      "cells": [
        "plainaddress"
      ],
      "line": 24,
      "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;2"
    },
    {
      "cells": [
        "#@%^%#$@#$@#.com"
      ],
      "line": 25,
      "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;3"
    },
    {
      "cells": [
        "@example.com"
      ],
      "line": 26,
      "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;4"
    },
    {
      "cells": [
        "Joe Smith \u003cemail@example.com\u003e"
      ],
      "line": 27,
      "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3717302795,
  "status": "passed"
});
formatter.before({
  "duration": 136395,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 14276987,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Signup form should not accept any invalid email address",
  "description": "",
  "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@enterData"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter Test into firstname text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Test into lastname text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter plainaddress into Mobilenumber text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on email text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Error Message for invalid email on homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "firstname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 119175324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "lastname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 64914570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plainaddress",
      "offset": 8
    },
    {
      "val": "Mobilenumber",
      "offset": 26
    }
  ],
  "location": "LoginPage2SD.enterEmailIntoEmailField(String,String)"
});
formatter.result({
  "duration": 1109381193,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnText()"
});
formatter.result({
  "duration": 79976204,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnEmail()"
});
formatter.result({
  "duration": 2184150160,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.verifyEmail()"
});
formatter.result({
  "duration": 1052055393,
  "status": "passed"
});
formatter.after({
  "duration": 118907851,
  "status": "passed"
});
formatter.after({
  "duration": 93984,
  "status": "passed"
});
formatter.before({
  "duration": 2874343412,
  "status": "passed"
});
formatter.before({
  "duration": 116014,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 26306343,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Signup form should not accept any invalid email address",
  "description": "",
  "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@enterData"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter Test into firstname text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Test into lastname text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter #@%^%#$@#$@#.com into Mobilenumber text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on email text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Error Message for invalid email on homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "firstname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 108169931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "lastname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 65917428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#@%^%#$@#$@#.com",
      "offset": 8
    },
    {
      "val": "Mobilenumber",
      "offset": 30
    }
  ],
  "location": "LoginPage2SD.enterEmailIntoEmailField(String,String)"
});
formatter.result({
  "duration": 1143172497,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnText()"
});
formatter.result({
  "duration": 71127643,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnEmail()"
});
formatter.result({
  "duration": 2229391629,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.verifyEmail()"
});
formatter.result({
  "duration": 1049966564,
  "status": "passed"
});
formatter.after({
  "duration": 123106581,
  "status": "passed"
});
formatter.after({
  "duration": 84320,
  "status": "passed"
});
formatter.before({
  "duration": 2932756634,
  "status": "passed"
});
formatter.before({
  "duration": 128835,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 9354786,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Signup form should not accept any invalid email address",
  "description": "",
  "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@enterData"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter Test into firstname text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Test into lastname text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter @example.com into Mobilenumber text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on email text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Error Message for invalid email on homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "firstname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 118264415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "lastname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 66962826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@example.com",
      "offset": 8
    },
    {
      "val": "Mobilenumber",
      "offset": 26
    }
  ],
  "location": "LoginPage2SD.enterEmailIntoEmailField(String,String)"
});
formatter.result({
  "duration": 1096903375,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnText()"
});
formatter.result({
  "duration": 90699151,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnEmail()"
});
formatter.result({
  "duration": 2176669882,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.verifyEmail()"
});
formatter.result({
  "duration": 1059447508,
  "status": "passed"
});
formatter.after({
  "duration": 123904557,
  "status": "passed"
});
formatter.after({
  "duration": 65809,
  "status": "passed"
});
formatter.before({
  "duration": 3114553984,
  "status": "passed"
});
formatter.before({
  "duration": 110302,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 13493971,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Signup form should not accept any invalid email address",
  "description": "",
  "id": "login-feature;signup-form-should-not-accept-any-invalid-email-address;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@enterData"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter Test into firstname text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Test into lastname text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Joe Smith \u003cemail@example.com\u003e into Mobilenumber text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on email text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify Error Message for invalid email on homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "firstname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 106553461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "lastname",
      "offset": 18
    }
  ],
  "location": "LoginPage2SD.enterDataInto(String,String)"
});
formatter.result({
  "duration": 67575008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe Smith \u003cemail@example.com\u003e",
      "offset": 8
    },
    {
      "val": "Mobilenumber",
      "offset": 43
    }
  ],
  "location": "LoginPage2SD.enterEmailIntoEmailField(String,String)"
});
formatter.result({
  "duration": 1186154279,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnText()"
});
formatter.result({
  "duration": 72667303,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.clickOnEmail()"
});
formatter.result({
  "duration": 2163491658,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage2SD.verifyEmail()"
});
formatter.result({
  "duration": 1051535865,
  "status": "passed"
});
formatter.after({
  "duration": 107163474,
  "status": "passed"
});
formatter.after({
  "duration": 61783,
  "status": "passed"
});
});