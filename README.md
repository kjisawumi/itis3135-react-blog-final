# ITIS 3135 - Module 14 Project 2

A React/Vite blog with a custom responsive landing page, context-based demo login,
a protected blog index, and comments attributed to the current user.

## Run locally

Use Node.js 22.12+ (or 20.19+) and run:

```sh
npm ci
npm run dev
```

## Demo login

- Username: `student`
- Password: `Blog123!`

The credentials are also displayed on the login page. This is a front-end class
project: public demo credentials and browser state are not production
authentication. No password is written to browser storage. A real service would
authenticate on a server and protect its data there.

## Pages and state

- `/`: responsive landing page with welcome text, calls to action, and a featured story.
- `/login`: required-field and incorrect-credential validation.
- `/blog`: protected by `ProtectedRoute`; guests are redirected to login and return
  to their requested page after successful authentication.
- `/posts/1`, `/posts/2`, `/posts/3`: readable featured stories with existing
  comments. Guests see a login invitation instead of a comment form. This makes
  the logged-out comment state visible while the complete blog index is protected.
- `/about`, `/contact`: existing pages; the contact form remains a local demo.
- Unknown routes and missing posts have a recovery link.

`AuthProvider` owns the user object, login, and logout functions. `useAuth` reads
that shared context with `useContext`. The navbar, login form, protected route,
comment section, and comment form use the same authentication state.

The user object persists in `sessionStorage` across navigation and refresh in the
same tab. Closing the tab ends that stored session. Logout clears the context and
saved session. If storage is blocked, the in-memory session remains usable until
refresh. Only the username is stored; the password is never persisted.

Comment authors come from the authenticated username; there is no editable name
field. Comments are held in React state above the routes, stay with their post
while navigating, and reset on refresh. ThemeContext saves the light/dark choice
in localStorage independently of login.

## Build and deployment

```sh
npm run build
npm run preview
```

The production output is `dist`. `netlify.toml` configures the build command and
publish directory. `public/_redirects` routes direct URLs to `index.html`, allowing
React Router pages to load after a refresh. Upload the contents of `dist` for a
manual Netlify deployment, or connect the public repository to Netlify.

The source ZIP excludes dependencies, generated build output, local environment
files, and Git metadata. `package-lock.json` is included for repeatable installs.

## Published deliverables

- Public source: https://github.com/kjisawumi/itis3135-react-blog-final
- Live app: https://quiet-macaron-544134.netlify.app
