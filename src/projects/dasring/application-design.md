---
title: Dasring application design
layout: project.njk
---

Dasring is written in typescript and runs on nodejs. It consist of a few packages

## App
The package `@dasring/app` contains the code for starting the application and serves as the entry point for the platform. It also contains the implementation of the build in modules for loggin and startup.

## Core
The `@dasring/core` package contains all the in interfaces shared between the app and the modules. As well as the dependency injection implementation.

## Loading a module
Modules are loaded on startup for now. When a module is loaded all it's resources are added  to the container so they can be accessed.

