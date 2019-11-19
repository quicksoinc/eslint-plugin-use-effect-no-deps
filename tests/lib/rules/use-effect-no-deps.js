/**
 * @fileoverview Warns a user when they call the react useEffect hook without a dependency array
 * @author Alex Henry
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/use-effect-no-deps"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("use-effect-no-deps", rule, {
  valid: [
    {
      code: "useEffect(function() { console.log(); }, [])"
    },
    {
      code: "useCallback(function() { console.log(); }, [])"
    },
    {
      code: "useCallback(function() { console.log(); })"
    }
  ],

  invalid: [
    {
      code: "useEffect(function() { console.log(); })",
      errors: [
        {
          message:
            "useEffect re-runs on every render when called with one argument. Did you forget to pass a dependencies array?"
        }
      ]
    }
  ]
});
