'use client'
import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.preload('/MavenPro-VariableFont_wght.woff2', { as: 'font' })
}
