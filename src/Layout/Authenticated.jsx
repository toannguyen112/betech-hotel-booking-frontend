import React from 'react'
import Footer from '../components/Footer';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
import Sidebar from '../components/Sidebar'

export default function Authenticated(props) {
    return (
        <React.Fragment>

            <Sidebar />
            <main className="ml-[var(--sidebar-width)] md:flex-1">
                <HeaderAdmin />
                <section className="px-4 py-8 md:p-12 md:overflow-y-auto">
                    {props.children}
                </section>
                <Footer />
            </main>
        </React.Fragment>
    )
}

