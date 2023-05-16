import * as React from "react"
import meshVideo from "../assets/meshery-full-perf-720p.mp4"

export default function Home() {
  return (
  <>
  <div>Hello world!</div>
   <video controls>
      <source src={meshVideo} type="video/mp4" />
    </video>
  </>
  )
}
