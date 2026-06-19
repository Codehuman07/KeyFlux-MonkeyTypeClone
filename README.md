# KeyFlux

## Project Overview

KeyFlux is a typing test website inspired by Monkeytype. The goal of this project is to build a clean and responsive typing experience while learning React fundamentals such as state management, event handling, timers, and component-based architecture.
In addition to core React concepts, this project is also an opportunity to learn how to integrate and customize modern UI components from community resources such as React Bits and similar component libraries.

This project is intended as a frontend-only application and will not include authentication, databases, leaderboards, multiplayer functionality, or any backend services.

---

# Problem

Many typing websites provide a simple way to measure typing speed and accuracy. This project aims to recreate the core typing test experience in order to practice React and build a polished portfolio project.

---

# Goal

Create a typing test application where users can:

* Start a typing test
* Complete a 60-second typing session
* View typing performance statistics
* Restart the test and try again

---

# Scope

## Landing Page

The application should start with a simple landing page.

Contents:

* Project name
* Short description
* Start button

When the user clicks Start, they are taken to the countdown screen.

---

## Countdown Screen

Before the test begins, a countdown should be displayed.

Sequence:

5 → 4 → 3 → 2 → 1

After the countdown finishes, the typing test starts automatically.

---

## Typing Test

The user is shown a block of text and has 60 seconds to type as much of it as possible.

During the test:

* A timer should be visible.
* The typed text should be tracked.
* Characters should be validated as correct or incorrect.
* WPM should update in real time.
* Accuracy should update in real time.

---

## Statistics

The application should track:

* Total typed characters
* Correct characters
* Incorrect characters
* Current WPM
* Current accuracy
* Remaining time

---

## Results Screen

When the timer reaches zero, the test ends and the results screen is displayed.

Results shown:

* Final WPM
* Final Accuracy
* Correct Characters
* Incorrect Characters
* Total Typed Characters

---

## Restart Test

A "Try Again" button should allow the user to start a new test.

The application should reset all values before starting again.

---

# Success Criteria

The project will be considered complete when a user can:

1. Open the website.
2. Start a typing test.
3. Complete a 60-second session.
4. View typing statistics.
5. Restart the test without refreshing the page.

The focus of the project is to create a smooth typing experience while practicing React development.
