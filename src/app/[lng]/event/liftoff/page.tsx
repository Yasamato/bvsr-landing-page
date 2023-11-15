import React from "react"
import { Metadata } from 'next'
import {LiftoffContent} from "./content";

export const metadata: Metadata = {
    title: 'Liftoff Event',
}

export default function Liftoff() {
    return (
        <LiftoffContent />
    )
}
