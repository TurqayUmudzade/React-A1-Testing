import React from "react"
import User from "./User"

var appTitle = "React App"

function calculateSum(a, b) {
  return a + b
}

function getData() {
  return fetch("/api/data")
}

function функция() {
  return 1
}

function get$$$Data() {
  return "This is invalid data 🙂"
}

export default function Main() {
  return (
    <div>
      <h1>{appTitle}</h1>
      <User name="John" />
    </div>
  )
}

