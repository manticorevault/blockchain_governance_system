import React from "react";
import Link from 'next/link';
import Layout from "../components/Layout"

export default () => {
    return (
        <Layout>
            <div>
                <h1> This is the LANDING page </h1>
                <ul>
                    <li>
                        <Link href="/projects/list">
                            <a>Projects</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}