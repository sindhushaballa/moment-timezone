"use strict";

var tz = require("../../moment-timezone-utils");

function compare(test, source, expected) {
	test.equal(tz.pack(source), expected, 'should be able to pack name');

	test.done();
}

exports.pack = {
	single : function (test) {
		compare(test,
			{
				name : "Some/Zone_Name",
				abbrs   : ["ABC", "DEF", "ABC", "DEF", "GHI", "DEF"],
				offsets : [60, 239, 60, 239, 60, 239],
				untils  : [
					-4259 * 60000,
					-4139 * 60000,
					-3900 * 60000,
					-3780 * 60000,
					-3541 * 60000,
					Infinity
				]
			},
			"Some/Zone_Name|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X"
		);
	}
};
