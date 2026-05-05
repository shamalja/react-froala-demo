# React Froala Editor Demo

A simple React (Vite) project showcasing how to integrate the **Froala WYSIWYG editor** using a reusable component and manage rich text content with live preview.

---

## Features

- Built with React + Vite
- Rich text editing using Froala Editor
- Controlled component pattern (React state sync)
- Reusable `Editor` component
- Live HTML preview rendering
- Minimal and clean setup for learning and integration

---

## Demo

> <img width="856" height="470" alt="image" src="https://github.com/user-attachments/assets/7c7a89ea-bb6c-473a-99b0-05085e26e43c" />

## 📂 Project Structure

```
froala-demo/
├── src/
│ ├── components/
│ │ └── Editor.jsx
│ ├── App.jsx
│ └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

- The **Froala editor** is wrapped inside a reusable `Editor` component.
- Editor content is managed using React state (`useState`).
- Changes are captured using `onModelChange`.
- The content is rendered as HTML using `dangerouslySetInnerHTML`.

---

## Installation

Clone the repository:

```
git clone https://github.com/shamalja/react-froala-demo.git
cd react-froala-demo
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

## Example Usage

```
<Editor value={content} onChange={setContent} />
```

## Notes

- This project uses the Froala React wrapper (react-froala-wysiwyg)
- In some environments (like Vite), you may need to handle default exports carefully
- For production apps, always sanitize HTML output (e.g., using DOMPurify)

## Security Tip

When rendering user-generated HTML:

```
import DOMPurify from "dompurify";

const cleanHTML = DOMPurify.sanitize(content);
```

## Tech Stack

- React
- Vite
- Froala Editor

## Use Cases

- CMS editors
- Blog platforms
- Admin dashboards
- Knowledge base systems

## License

This project is licensed under the MIT License.

## Support

If you found this helpful, consider giving this repo a star ⭐
