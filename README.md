# primo-explore-custom-library-card-menu

## Description

Override the default options in the library card menu for the primo-explore UI.

### Screenshot

![screenshot](screenshot.png)

## Installation

1. Assuming you've installed and are using [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

2. Navigate to your template/central package root directory. For example:
```
cd primo-explore/custom/MY_VIEW_ID
```
3. If you do not already have a package.json file in this directory, create one:
```
npm init -y
```
4. Install this package:
```
npm install primo-explore-custom-library-card-menu --save-dev
```

## Usage

Once installed, inject `customLibraryCardMenu` as a dependency:

```
let app = angular.module('viewCustom', ['customLibraryCardMenu'])
```

**Note:** If you're using the --browserify build option, you will need to first import the module with:

```
import 'primo-explore-custom-library-card-menu';
```

You'll need to configure the module by passing it an array of objects as an angular `constant`:

| name | type | usage |
|------|-------------|--------|
| `name` | string | the text that will appear as the button link |
| `description` | string | for the aria label |
| `action` | string | url for the link. always opens in a new window. |
| `icon` | object | defines the icon for the link. must be chosen from <https://material.io/icons/>. you need to specify both the name of the action "set" (see link) and the icon itself, in the form "ic_person_outline_24px". note that all icons do not work so you may have to experiment some |

### Translations

You can use translations to access back office text by wrapping the value in curly braces, e.g. `{nui.menu.librarycard}`. Anything that works in the primo templates link this `<span translate="nyu.menu.librarycard"></span>` will work if it's available in the current scope.

### Example

```
app.constant('customLibraryCardMenuItems',
  [
    {
      name: "{nui.menu.librarycard}",
      description: "Go to {nui.menu.librarycard}",
      action: "{urls.eshelf}/account",
      icon: {
        set: 'social',
        icon: 'ic_person_outline_24px'
      }
    },
    {
      name: "E-Z Borrow",
      description: "Go to E-Z Borrow",
      action: "{urls.ezborrow}",
      icon: {
        set: 'social',
        icon: 'ic_share_24px'
      }
    },
    {
      name: "Interlibrary Loan",
      description: "Go to Interlibrary Loan (ILL)",
      action: "{urls.ill}",
      icon: {
        set: 'content',
        icon: 'ic_send_24px'
      }
    }
  ]
)
```

## Acknowledgements

Thanks to https://github.com/Alliance-PCJWG/primo-explore-custom-actions
for the idea
