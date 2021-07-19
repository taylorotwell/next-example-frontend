# Laravel Breeze Next.js Starter (Frontend)

## Introduction

TBD.

To get started, clone this repository and install its dependencies with `yarn install` or `npm install`. Then, copy the `.env.example` file to `.env.local`, and fill in the URL of your backend, like so

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

> Note: We recommend using `localhost` on development (both on the frontend and the backend, with `php artisan serve`) instead of more advanced solutions like [Laravel Valet](https://laravel.com/docs/valet) due to Same-Origin issues with Chrome.

## Usage

The started contains a custom `useAuth` hook, designed to abstract all authentication logic away from your pages. Aside for exporting functions for registration, email verification and other functionality implemented by default, this hook exports a logout function and the user object, and accepts a middleware key to require authentication for your pages. It can be used as follows:

```js
const ExamplePage = () => {
    const { logout, user } = useAuth({ middleware: 'auth' /* or 'guest */ })

    return (
        <>
            <p>{user?.name}</p>
            <button onClick={logout}>Sign out</button>
        </>
    )
}

export default ExamplePage
```

> Note: You'll need to use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`user?.name` instead of `user.name`) when accessing properties on the user object to account for Next.js initial server-side render.
