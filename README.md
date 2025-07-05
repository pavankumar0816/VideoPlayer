## React Video Player

A feature-rich video player built with React using both the native `<video>` tag and the powerful open-source library `video.js` for enhanced capabilities.

---

## About the Project

This project demonstrates how to build and enhance a video player experience in a React application. It supports chapters, subtitles, and streaming features.

## Key technologies used:

- React
- HTML5 `<video>` tag
- WebVTT (`.vtt`) file for chapters
- ImageKit.io for hosting videos
- `video.js` library for advanced video player features

##  Installation & Running the App : npm install vite@latest
## Install Dependencies : npm install
## Run: npm run dev

---

## 🎥 Features

- Custom video player UI
- WebVTT support for chapters/subtitles
- Quality selector (via `video.js` plugins)
- Hosted media using ImageKit.io
- Responsive layout and playback controls

---

## WebVTT (`.vtt`) File Integration

`.vtt` (Web Video Text Tracks) is a file format used to add:

- 🕒 **Chapters** — break the video into labeled sections.
- 💬 **Subtitles** — translate or display spoken content.
- 🎧 **Captions** — include sounds and spoken words.
- 📄 **Metadata** — provide structured text that isn't shown visually.

---

## Using the `<track>` Tag

The `<track>` tag is used to attach timed text tracks (like subtitles or chapters) to the `<video>` element.

<video controls width="640">
  <source src="your-video.mp4" type="video/mp4" />
  <track
    src="/chapters.vtt"
    kind="chapters"
    label="Chapters"
    default
  />
</video>

---

## Hosting Media with ImageKit.io

For video and media hosting, ImageKit.io was used. It supports video transformation features like thumbnail extraction, video streaming, and optimization.

https://ik.imagekit.io/your_id/your_video.mp4

## You can even use:

/ik-thumbnail.jpg?tr=so-5

---

## Using video.js for Enhanced Playback

To extend the basic `<video>` tag, this project also integrates video.js, an open-source HTML5 video player.

## Installation : npm install --save-dev video.js

## Why video.js?

Better controls and theming
Plugin support (e.g., quality level selector)
HLS/DASH stream support
Accessible and customizable


