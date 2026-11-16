# Module 14 verification

The production build was tested in Chrome on November 16, 2026.

`npm ci --offline --no-fund --no-audit` and `npm run build` passed.

- Guest navigation to /blog redirects to login.
- Blank login shows username and password errors.
- Wrong credentials do not authenticate.
- Correct credentials redirect to the protected blog index.
- Navbar switches between Login and Logout and displays the current username.
- The comment author field is removed; the context username is used.
- Empty comments are rejected.
- A trimmed comment is posted under student, markup is displayed literally, and the form clears.
- Authentication and per-post comments survive route navigation.
- Authentication survives a direct post refresh; transient comments reset as documented.
- Logout clears authentication and blocks /blog.
- Logout remains effective after refresh.
- Guests see a login invitation instead of a comment box.
- Login from the comment invitation returns to the requested post.
- Dark mode survives refresh alongside the session.
- 390px login and landing layouts were visually reviewed with no horizontal overflow.
- No browser console errors or warnings were recorded during the checks.

The temporary phone viewport was cleared after verification.
The login is a front-end classroom demo, not server-side authentication.
Comments remain in memory; sessionStorage contains only the demo username.
