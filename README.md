![](https://i.imgur.com/L7moBQT.png)

# Part Designer
## Overview
This is a free online CAD tool to create custom LEGO® Technic compatible construction parts for 3D printing.

## Features
- Assemble a custom part from basic blocks: Pin Hole, Axle Hole, Pin, Axle, Solid
- Save your model as an STL file
- Catalog of existing LEGO® parts
- Customize measurements to get a perfect fit
- Create a sharable link of your part

# Local setup and development

## Installation Prerequisites

### Required Software Versions
- Node.js >= 16.0.0
- TypeScript >= 4.0.0 
- Python >= 3.6 (if using Python for local server)
- Modern web browser (see compatibility below)

### Browser Compatibility
- Chrome (latest version recommended)
- Firefox (latest version recommended)
- Safari 14+
- Edge (Chromium-based version)

Note: Internet Explorer is not supported due to WebGL and modern JavaScript requirements.

### System Requirements
- Operating System: Windows 10+, macOS 10.15+, or Linux
- RAM: Minimum 4GB (8GB recommended for larger models)
- Graphics: WebGL 2.0 capable graphics card
- Screen Resolution: Minimum 1280x720

### Configuration Details 
- Default port: 8000 (configurable)
- Supported file formats:
  - Import: None currently
  - Export: STL
- Local storage used for saving work in progress
- No backend database required

Your browser must have the following enabled:
- JavaScript
- WebGL
- Local Storage

You need to have [TypeScript](https://www.typescriptlang.org/) installed.
In the project root, run `tsc`.
This should run without errors and create the file `app.js`.

You need a webserver that locally serves the files from the project directory.
If you have python installed, you can call `python3 -m http.server`.
It will tell you the port, for example 8000, and you can visit http://localhost:8000 in your browser.
Alternatively, you can install [http-server](https://www.npmjs.com/package/http-server), which will also create a server in port 8000.

If you work on the code, run `tsc --watch`, which will recompile everytime you change a source file.

## Glossary

### Basic Building Elements
- **Axle** - A rod-like LEGO Technic element that can rotate freely in axle holes
- **Axle Hole** - A round hole that accepts LEGO Technic axles and allows them to rotate
- **Pin** - A cylindrical LEGO Technic connector that provides a friction fit
- **Pin Hole** - A circular hole designed to accept LEGO Technic pins
- **Solid Block** - A basic filled geometric shape with no holes or connectors

### File Formats
- **STL** - (STereoLithography) The 3D model file format used for exporting parts for 3D printing

### Technical Terms
- **WebGL** - Web Graphics Library; browser technology used for rendering 3D graphics
- **TypeScript** - Programming language that adds static typing to JavaScript
- **Local Storage** - Web browser feature for storing data locally on your computer

## Contributors

[![Contributors](https://contrib.rocks/image?repo=marian42/partdesigner)](https://github.com/marian42/partdesigner/graphs/contributors)
