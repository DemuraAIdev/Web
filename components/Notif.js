/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
export default function Notif() {
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
        <div className="mr-2 flex-auto text-left font-semibold">Website Update 2.3 🎉</div>
      </div>
    </div>
  )
}
