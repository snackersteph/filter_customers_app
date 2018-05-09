describe("ListResults", function() {
  var Utils = React.addons.TestUtils;

  it("can render without error", function() {
    var component, element;

    element = React.createElement(ListResults);
    expect(() => {
      component = Utils.renderIntoDocument(element)
    }).not.toThrow();
  });
});