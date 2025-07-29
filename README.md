# React Zustand

A simple, modern e-commerce demo app built with React, Zustand, TypeScript, and Vite. This project demonstrates state management for user and cart features, including persistence, optimized updates, and developer tooling.

## Features

- 🛒 Shopping cart with add/remove and quantity update
- 👤 User profile with async fetch and address management
- ⚡ Instant state updates with Zustand, immer, and devtools
- 💾 State persistence to local storage
- 🎨 Styled with custom CSS and Tailwind
- 🚀 Lightning-fast Vite setup
- 🧩 Modular and extensible store slices

## Demo

The app displays a list of products. Users can add products to their cart, change quantities, and remove items. The user profile can be fetched asynchronously and edited (address field). Cart and user state are preserved across reloads.

## Tech Stack

- **React** (with TypeScript)
- **Zustand** for global state management
- **Immer** for immutable state updates
- **Vite** for fast development and build
- **Tailwind CSS** for styling

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/thaboRach/react-zustand.git
cd react-zustand
pnpm install
```

### Running the App

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
├── src/
│   ├── components/    # UI components (Cart, User, etc.)
│   ├── store/         # Zustand store, userSlice, cartSlice
│   ├── types/         # TypeScript types for state
│   ├── App.tsx        # Main app logic and product listing
│   └── index.css      # Styling
├── index.html
├── vite.config.ts
└── ...
```

## State Management

The store combines user and cart slices with middleware:

- **persist:** Saves state to local storage
- **devtools:** Enables Redux DevTools
- **immer:** For mutating state in a safe way

Example (from `src/store/store.ts`):

```typescript
export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        }))
      ),
      {
        name: "local-storage",
      }
    )
  )
);
```

## Customization

- Add new products or user fields in the respective slice files.
- Extend the UI or add more pages/components as needed.

## License

This project is for demo/educational purposes.

---

Inspired by the simplicity and power of Zustand for state management in modern React apps.
