# Tab Title Displayer

A simple Chrome extension that displays the title of the currently active tab in a popup.

## Features

- Displays the title of the current active tab.
- User-friendly interface with a button to trigger the display.

## Installation

1. **Clone the repository** or download the source files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the folder containing the extension files (`manifest.json`, `popup.html`, and `popup.js`).
5. The Tab Title Displayer extension should now appear in your list of extensions.

## Usage

1. Click on the Tab Title Displayer icon in the Chrome toolbar.
2. In the popup, click the "Display Tab Title" button.
3. The title of the currently active tab will be displayed below the button.

## Code Overview

- **manifest.json**: Contains metadata about the extension, including permissions and browser action details.
- **popup.html**: The HTML structure of the popup, including styles and layout.
- **popup.js**: JavaScript code that retrieves the active tab's title and updates the popup content when the button is clicked.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Acknowledgments

- Inspired by the need for a simple tool to display tab information.
