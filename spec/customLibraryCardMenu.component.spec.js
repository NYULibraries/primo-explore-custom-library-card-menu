const customLibraryCardMenuItems = __fixtures__['customLibraryCardMenuItems'];

describe('customLibraryCardMenu component', () => {
  beforeEach(module('customLibraryCardMenu', ($provide) => {
    $provide.constant("customLibraryCardMenuItems", customLibraryCardMenuItems);
    $provide.value("translateFilter", (original) => `{${original}}`);
  }));

  let $compile, $rootScope, element;

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    const scope = $rootScope.$new();
    element = $compile("<prm-library-card-menu-after />")(scope);
    scope.$digest();
  }));

  describe('template layout', () => {

    it('should render proper number of buttons', () => {
      const buttons = element.children();

      Array.from(buttons).forEach(btn => {
        expect(btn.tagName).toEqual('BUTTON');
      });

      expect(buttons.length).toEqual(customLibraryCardMenuItems.length);
    });
  });

  describe('Buttons', () => {
    let buttons;

    beforeEach(() => {
      buttons = element.children();
    });

    it('should include name', () => {
      Array.from(buttons).forEach((btn, idx) => {
        expect(btn.innerText).toEqual(jasmine.stringMatching(customLibraryCardMenuItems[idx].name));
      });
    });

    it('should link to action property', () => {
      Array.from(buttons).forEach((btn, idx) => {
        const href = btn.getAttribute('data-href');
        expect(href).toEqual(customLibraryCardMenuItems[idx].action);
      });
    });

    it('should contain primo icons with mapped attributes', () => {
      Array.from(buttons).forEach((button, idx) => {
        const iconEl = button.querySelector('prm-icon');
        const iconSet = iconEl.getAttribute('svg-icon-set');
        const iconDef = iconEl.getAttribute('icon-definition');

        expect(iconSet).toEqual(customLibraryCardMenuItems[idx].icon.set);
        expect(iconDef).toEqual(customLibraryCardMenuItems[idx].icon.icon);
      });
    });
  });

});
