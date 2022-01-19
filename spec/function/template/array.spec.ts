import Truncate from "../../../dist/truncate-parameters";
import Template from "../../../dist/function/template-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("single", function() {

  expect(Template('data {0} and {1} and {2}')([
    'first',
    'second',
    'third'
  ])).toBe(
      'data first and second and third'
  );

});
