/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
export default function Notif() {
  useEffect(() => {
    const loader = document.getElementById('notif')
    setTimeout(function () {
      loader.style.opacity = 0
      setTimeout(function () {
        loader.style.display = 'none'
      }, 500)
    }, 5000)
  }, [])
  return (
    <div className="text-center transition-all duration-500">
      <div
        className="alert-del inline-flex items-center rounded-full bg-indigo-800 p-2 leading-none text-indigo-100 transition-all duration-500"
        role="alert"
        id="notif"
      >
        <span className="mr-3 flex rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold uppercase">
          Update
        </span>
        <span className="mr-2 flex-auto text-left font-semibold">Website Update 2.0 🎉</span>
      </div>
    </div>
  )
}
