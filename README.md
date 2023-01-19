# React Keyboard (Hooks)

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

Implement the App using React Hooks useState and useEffect

> Here is [the working version](https://mate-academy.github.io/react_keyboard-hooks/)

- before any key was pressed show the `Nothing was pressed yet` message;
- when a key is pressed show a `The last pressed key is [key]` message;
- add `keyup` handler when the component appears
    ```ts
    // DON'T import KeyboardEvent from React, because it is a regular event
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
    });
    ```

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://sercansimsek.github.io/react_keyboard/) and add it to the PR description.
