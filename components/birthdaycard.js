/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
function Card() {
  useEffect(() => {
    const element = document.querySelector('.js-tilt')
    VanillaTilt.init(element, { reverse: true })
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    let date = new Date()
    var utcDate = date.toLocaleString('en-US', {
      timeZone: 'Etc/UTC',
    })
    var myDate = date.toLocaleString('en-US', {
      timeZone: 'Asia/Jakarta',
    })
    var yourDate = date.toLocaleString()
    let that = this
    let current = date.getTime()
    let thisYear = date.getFullYear()
    let bod = new Date('10 May ' + thisYear).getTime()
    let year = (bod - current) / day < 0 ? thisYear + 1 : thisYear
    let countDown = new Date('10 May ' + year).getTime()
    setInterval(function () {
      let now = new Date().getTime()
      let distance = countDown - now

      var days = Math.floor(distance / day)
      var hours = Math.floor((distance % day) / hour)
      var minutes = Math.floor((distance % hour) / minute)
      var seconds = Math.floor((distance % minute) / second)
      document.getElementById('timer').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '
    }, second)
  }, [])
  return (
    <div
      className="js-tilt mt-8 transform rounded-xl 
            bg-gradient-to-r from-[#6EE7B7]  via-[#3B82F6] to-[#9333EA] p-[5px] shadow-lg transition-all dark:shadow-cyan-700/50"
    >
      <div className="flex h-full flex-col justify-between space-y-2 rounded-xl bg-white p-8 transition dark:bg-black xl:grid xl:grid-cols-3 xl:gap-x-5 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 pb-8 ">
          <h1 className="text-8xl">🎂</h1>
        </div>
        <div className="prose max-w-lg pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">My Birthday countdown</h2>

          <h2 id="timer" className="font-timer"></h2>
        </div>
      </div>
    </div>
  )
}

export default Card
