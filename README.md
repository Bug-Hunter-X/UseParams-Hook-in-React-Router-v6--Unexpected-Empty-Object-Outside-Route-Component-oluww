# React Router v6 useParams Hook Issue

This repository demonstrates a common error when using the `useParams` hook in React Router v6.  The `useParams` hook must be used within a route component; otherwise, it returns an empty object, leading to potential bugs and unexpected application behavior.

## Problem
The `useParams` hook in React Router v6 only provides the expected parameters when called *within* a `Route` component's rendering logic.  If you attempt to use `useParams` outside this context (e.g., in a parent component that renders multiple routes), it will return an empty object, even if the route is active.  This can lead to errors or unexpected rendering behavior.  The provided code sample illustrates the problem and shows the correct way to use the hook.

## Solution
The solution is simple: ensure the `useParams` hook is used *only within* a component rendered as the element of a `<Route>` component.  The corrected example below shows the proper usage within a route component.
