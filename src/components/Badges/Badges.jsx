import React from "react"
import Badge from "./Badge"

export default function Badges() {
    return (
        <>
            <h2 className="component-title">Badges</h2>
            <h2 className="component-description">Square</h2>
            <div className="square-badges">
                <Badge color="gray" shape="square">Badge</Badge>
                <Badge color="red" shape="square">Badge</Badge>
                <Badge color="yellow" shape="square">Badge</Badge>
                <Badge color="green" shape="square">Badge</Badge>
                <Badge color="blue" shape="square">Badge</Badge>
                <Badge color="indigo" shape="square">Badge</Badge>
                <Badge color="purple" shape="square">Badge</Badge>
                <Badge color="pink" shape="square">Badge</Badge>
            </div>
            <h2 className="component-description">Pill</h2>
            <div className="pill-badges">
                <Badge color="gray" shape="pill">Badge</Badge>
                <Badge color="red" shape="pill">Badge</Badge>
                <Badge color="yellow" shape="pill">Badge</Badge>
                <Badge color="green" shape="pill">Badge</Badge>
                <Badge color="blue" shape="pill">Badge</Badge>
                <Badge color="indigo" shape="pill">Badge</Badge>
                <Badge color="purple" shape="pill">Badge</Badge>
                <Badge color="pink" shape="pill">Badge</Badge>
            </div>
        </>
    )
}