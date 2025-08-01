# Next.js P5.js Letters Project

This is a Next.js project that runs your p5.js letters drawing sketch. The project includes all the original p5.js files and creates a React component to run the sketch.

## Features

- Original p5.js sketch functionality preserved
- Modern Next.js 14 with App Router
- TypeScript support
- Tailwind CSS for styling
- Responsive design
- Clean component structure

## Project Structure

```
nextjs-p5-letters/
├── public/
│   ├── lib/           # p5.js library files
│   └── sketch.js      # Your original sketch
├── src/
│   ├── app/
│   │   ├── letters/   # Letters page route
│   │   └── page.tsx   # Home page
│   └── components/
│       └── P5Sketch.tsx  # React component for p5.js
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **View the letters sketch:**
   Click on the "Letters" link on the home page or navigate directly to [http://localhost:3000/letters](http://localhost:3000/letters)

## How it Works

The `P5Sketch` component:
- Loads p5.js library dynamically
- Creates a new p5 instance with your sketch code
- Handles cleanup when the component unmounts
- Provides the same functionality as your original HTML file

## Original Files Preserved

All your original p5.js files are preserved in the `public/` directory:
- `lib/p5.min.js` - p5.js library
- `sketch.js` - Your original sketch code

## Customization

You can modify the sketch by editing the `P5Sketch.tsx` component or by updating the `public/sketch.js` file. The component will automatically reload when you make changes.

## Deployment

This project can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

```bash
npm run build
npm start
```

## Notes

- The sketch maintains the same functionality as your original version
- The "Create new" button reloads the page to generate a new pattern
- The desktop-only warning is preserved
- All original styling and behavior is maintained
